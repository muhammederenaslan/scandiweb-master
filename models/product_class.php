
class Product {
    private $sku;
    private $name;
    private $price;

    public function __construct($sku,$name,$price){
        $this->sku = $sku;
        $this->name = $name;
        $this->price = $price;
    }

    public function getSKU(){
        return $this->sku;

    }

    public function getName(){
        return $this->name;
        
    }

    public function getPrice(){
        return $this->price;
        
    }

    public function getType(){
        return "Product";

    }
}