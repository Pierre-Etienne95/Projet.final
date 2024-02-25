INSERT INTO `personne` (`admin`, `id`, `email`, `mot_de_passe`, `nom`, `prenom`) VALUES
(b'1', 1, 'a@a', '$2a$10$JG2xUNp9o.0VF6.kuraaXu20788gGRBxJBAkUmtpvaB1zRRKcXwz6', 'Bernard', 'Pierre'),
(b'0', 2, 'b@a', '$2a$10$JG2xUNp9o.0VF6.kuraaXu20788gGRBxJBAkUmtpvaB1zRRKcXwz6', 'l\'éponge', 'Bob');

INSERT INTO site (nom, adresse) VALUES
('Premier_site', 'Metz'),
('Deuxieme_site', 'Nancy');

INSERT INTO local (nom, mcarre, site_id) VALUES
('Premier_loc', 300, 1),
('Deuxieme_loc', 600, 1);

INSERT INTO stock (quantite, localS_id) VALUES
('40000', 2),
('20000', 1);

INSERT INTO consommable (nom, cout, stock_id) VALUES
('Poulet', 3, 2),
('Courgette', 1.50, 1);

INSERT INTO type (nom, local_id) VALUES
('Viandes', 1),
('Légumes', 2);
