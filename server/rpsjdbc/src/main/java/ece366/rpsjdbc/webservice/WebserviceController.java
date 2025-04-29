package ece366.rpsjdbc.webservice;

import ece366.rpsjdbc.DatabaseConnectionManager;
import ece366.rpsjdbc.Player;
import ece366.rpsjdbc.PlayerDAO;
import org.springframework.web.bind.annotation.*;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = {"http://moosetracks.eastus.azurecontainer.io"})
@RestController
@RequestMapping("/api")
public class WebserviceController {

    private final PlayerDAO playerDAO;
    private final boolean isTestMode;

    // Constructor for dependency injection (used in tests)
    public WebserviceController(PlayerDAO playerDAO) {
        this.playerDAO = playerDAO;
        this.isTestMode = true; // Indicates that this is a test instance
    }

    // Default constructor (used in production)
    public WebserviceController() {
        this.isTestMode = false;
        this.playerDAO = null; // Will be initialized dynamically in production
    }

    @GetMapping("/testPlayer")
    public String getTestPlayer() {
        return "TEST PLAYER";
    }

    @GetMapping("/player/{id}")
    public Player getPlayerById(@PathVariable Long id) {
        System.out.println("getPlayerById: " + id);

        try {
            // Use injected PlayerDAO in test mode, otherwise create it dynamically
            PlayerDAO dao = isTestMode ? playerDAO : createPlayerDAO();
            Player player = dao.findById(id);
            System.out.println(player.toString());
            return player;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    // Factory method to create PlayerDAO in production
    private PlayerDAO createPlayerDAO() throws SQLException {
        DatabaseConnectionManager dcm = new DatabaseConnectionManager("localhost", "rps", "postgres", "password");
        Connection connection = dcm.getConnection();
        return new PlayerDAO(connection);
    }
}

