package ece366.rpsjdbc.webservice;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import ece366.rpsjdbc.Player;
import ece366.rpsjdbc.PlayerDAO;

@ExtendWith(MockitoExtension.class)
public class WebserviceControllerTest {

    @Mock
    private PlayerDAO playerDAO; // Mock the PlayerDAO

    private WebserviceController wc; // WebserviceController instance

    @BeforeEach
    public void setup() {
        // Manually inject the mock PlayerDAO into WebserviceController
        wc = new WebserviceController(playerDAO);
    }

    @Test
    void getTestPlayer() {
        assertEquals("TEST PLAYER", wc.getTestPlayer());
    }

    @Test
    public void getPlayerByIdTest() {
        // Create a mock Player object
        Player mockPlayer = new Player();
        mockPlayer.setPlayerId(1L);
        mockPlayer.setUserName("TestUser");
        mockPlayer.setTotalWins(600);

        // Mock the behavior of PlayerDAO's findById method
        when(playerDAO.findById(1L)).thenReturn(mockPlayer);

        // Call the method under test
        Player p = wc.getPlayerById(1L);

        // Verify the result
        assertEquals(600, p.getTotalWins());
        assertEquals("TestUser", p.getUserName());
        assertEquals(1L, p.getPlayerId());
    }
}