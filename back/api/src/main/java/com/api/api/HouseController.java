import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/house")
public class HouseController {

    @Autowired
    private HouseService houseService;

    // GET /house - Get all houses
    @GetMapping
    public List<House> getAllHouses() {
        return houseService.getAllHouses();
    }

    // GET /house/{id} - Get a house by ID
    @GetMapping("/{id}")
    public House getHouseById(@PathVariable String id) {
        return houseService.getHouseById(id).orElseThrow(() -> new RuntimeException("House not found"));
    }

    // POST /house - Create or update a house
    @PostMapping
    public House createOrUpdateHouse(@RequestBody House house) {
        return houseService.saveHouse(house);
    }

    // DELETE /house/{id} - Delete a house by ID
    @DeleteMapping("/{id}")
    public void deleteHouseById(@PathVariable String id) {
        houseService.deleteHouseById(id);
    }
}
