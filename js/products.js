class Wines {
    constructor(id, image, quantity, name, variaty, type, price, description) {
        this.id = id
        this.image = image
        this.quantity = quantity
        this.name = name
        this.variaty = variaty
        this.type = type
        this.price = price
        this.description = description
    }
}



const wine1 = new Wines(1, "/img/alamos malbec.jpg", 1, "Alamos", "White", "malbec", 1000, "es un vino que refleja su amor por la buena uva");
const wine2 = new Wines(2, "/img/alamos malbec.jpg", 1, "Emilia", "Rosé", "malbec", 1200, "es un vino que refleja su amor por la buena uva");
const wine3 = new Wines(3, "/img/alamos malbec.jpg", 1, "Estiba", "Red", "Cabernet Sauvignon", 800, "es un vino que refleja su amor por la buena uva");
const wine4 = new Wines(4, "/img/alamos malbec.jpg", 1, "Alma mora", "Cabernet Sauvignon", "malbec", 700, "es un vino que refleja su amor por la buena uva");
const wine5 = new Wines(5, "/img/alamos malbec.jpg", 1, "Ruttini", "White wine", "malbec", 3000, "es un vino que refleja su amor por la buena uva");
const wine6 = new Wines(6, "/img/alamos malbec.jpg", 1, "Zuccardi", "White wine", "malbec", 3500, "es un vino que refleja su amor por la buena uva");
const wine7 = new Wines(7, "/img/alamos malbec.jpg", 1, "Trapiche", "Cabernet Sauvignon", "malbec", 900, "es un vino que refleja su amor por la buena uva");
const wine8 = new Wines(8, "/img/alamos malbec.jpg", 1, "Azul", "Rosé", "malbec", 1200, "es un vino que refleja su amor por la buena uva");
const wine9 = new Wines(9, "/img/alamos malbec.jpg", 1, "Altos del plata", "Red wine Sauvignon", "malbec", 1000, "es un vino que refleja su amor por la buena uva");
const wine10 = new Wines(10, "/img/alamos malbec.jpg", 1, "Hormiga negra", "Red wine", "malbec", 650, "es un vino que refleja su amor por la buena uva");


let wineList = [wine1, wine2, wine3, wine4, wine5, wine6, wine7, wine8, wine9, wine10]




localStorage.setItem("wine", JSON.stringify(wineList))
