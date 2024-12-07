from flask import Flask, request, jsonify
import joblib
import numpy as np
import pandas as pd
from flask_cors import CORS
from datetime import datetime, timedelta
import lightgbm as lgb


app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

# Load the model using joblib
model = joblib.load('lgb.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    # Get the input data from the request
    data = request.get_json()
    print("TOP LEVEL DATA:", data)

    # Check if 'features' is part of the request and contains the expected values
    consumption = data.get('consumption')


    today = datetime.today().date()
    dates = [(today - timedelta(days=i)) for i in range(len(consumption)-1, -1, -1)]
   
    df = pd.DataFrame({'consumption': consumption, 
                             'dayOfTheMonth': [date.day for date in dates], 
                             'month': [date.month for date in dates], 
                             'dayOfTheYear': [date.timetuple().tm_yday for date in dates]})
    

    X_train = df[['month', 'dayOfTheMonth', 'dayOfTheYear']]  # Features
    y_train = df['consumption']  # Target

    ####################### training ############################
    lgbm = lgb.LGBMRegressor(verbosity=-1)
    lgbm.fit(X_train, y_train)
    
    futureDates = [(today + timedelta(days=i)) for i in range(1,11)]

    results = []
    for date in futureDates:
        results.append(float(lgbm.predict([[date.month, date.day, date.timetuple().tm_yday]])[0]))

    print('df:', df)
    print(results)
    
    # Return the prediction as a JSON response
    # return jsonify({'prediction': prediction[0]})
    return results

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000) 