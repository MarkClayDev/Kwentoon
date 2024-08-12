-- Table to store manga details
CREATE TABLE manga_details (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    genre VARCHAR(255) NOT NULL,
    season VARCHAR(255) NOT NULL
);

-- Table to store images related to manga
CREATE TABLE manga_images (
    id INT AUTO_INCREMENT PRIMARY KEY,
    manga_id INT NOT NULL,
    image_path VARCHAR(255) NOT NULL,
    FOREIGN KEY (manga_id) REFERENCES manga_details(id)
);
