import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "House")
public class House {
    @Id
    private String id;
}
