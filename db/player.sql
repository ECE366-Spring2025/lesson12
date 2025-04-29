CREATE SEQUENCE player_seq start with 1;

CREATE TABLE player (
  player_id bigint NOT NULL DEFAULT nextval('player_seq'),
  user_name varchar(50) NOT NULL UNIQUE,
  password varchar(50) NOT NULL,
  total_games int DEFAULT 0,
  total_wins int DEFAULT 0,
  total_losses int DEFAULT 0,
  PRIMARY KEY (player_id)
);