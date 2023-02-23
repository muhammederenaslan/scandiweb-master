class Furniture extends Product {
  private $height;
  private $width;
  private $length;

  public function __construct($sku, $name, $price, $height, $width, $length) {
    parent::__construct($sku, $name, $price);
    $this->height = $height;
    $this->width = $width;
    $this->length = $length;
  }

  public function getHeight() {
    return $this->height;
  }

  public function getWidth() {
    return $this->width;
  }

  public function getLength() {
    return $this->length;
  }

  public function getType() {
    return "Furniture";
  }
}
