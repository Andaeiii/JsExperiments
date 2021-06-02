<?php


function pr($ar){
    echo '<pre>';
    print_r($ar);
    echo '</pre>';
}


class BookShelfObject{
    public $name;
    public $type;
    public $pages;
    public function __construct(int $pages){
        $this->name = $name;
        $this->pages = $pages;
    }

    public function getPage(int $page):string{
       //return the string of the object..
    }

}


class Book extends BookShelfObject{
    private $type;
    public $title;
    public $author;
    public function __construct(int $pages, string $title, string $author)){
        parent::__construct($pages);
        $this->type = 'Book';
        $this->title = $title;
        $this->author = $author;
    }
}

class Magazine extends BookShelfObject{
    private $type;
    public $name;
    public function __construct(int $pages, string $name){
        parent::__construct($pages);
        $this->type = 'Magazine';
        $this->name = $name;
    }
}

class NoteBook extends BookShelfObject{
    private $type;
    public $owner;
    public function __construct(int $pages, string $owner){
        parent::__construct($pages);
        $this->type = 'NoteBook';
        $this->owner = $owner;
    }
}

class BookShelf{

    public $items;     //  an array of BookShelf Objects(books, magazines, notebooks)
    private $config;   //  hold interger values(capacity) of each item

    public function __construct($config){      
        $this->items = [              
            'books' => [],
            'magazines' => [],
            'notebooks' => []
        ];
        $this->config = [               //objec that initilizes the capacity                 
            'books' => $config['books'], 
            'magazines' => $config['magazines'] 
            'notebooks' => $config['notebook']
        ];   
    }
    
    public function storeItem(string $type, array $items):boolean {
        //add book - return true/false if successful 
    }

    public function getItems(string $type, int $amount):array {
        //returns array of types... 
    }

    public function getStateOfBookShelf():array{
        $totalItems = 0;
        $totalCapacity = 0;
        foreach($this->items as $item => $value) {
           $totalItems += count($value)
        }
        foreach($this->config as $item => $value) {
            $totalCapacity += $value
         }
        return[
            'currentAmount' => $totalItems, 
            'AmountLeft' => $totalCapacity - $totalItems
        ]
    }

}