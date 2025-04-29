CREATE TABLE game_round (
    game_id bigint NOT NULL,
    round_number int NOT NULL,
    p1_choice varchar(50) NOT NULL,
    p2_choice varchar(50) NOT NULL,
    PRIMARY KEY (game_id, round_number),
    FOREIGN KEY (game_id) REFERENCES game(game_id) ON DELETE CASCADE
);