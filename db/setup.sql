CREATE DATABASE rps;
GRANT ALL PRIVILEGES ON DATABASE rps TO postgres;

\c rps

\i /home/1_player.sql
\i /home/2_game.sql
\i /home/3_game_round.sql
\i /home/4_sample_records.sql