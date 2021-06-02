<?php

function pr($ar){
    echo '<pre>';
    print_r($ar);
    echo '</pre>';
}


$array = ['1' => 'apple', '2' => 'banana', '3' => 'cherry'];

$arrayObject = new ArrayObject($array);

$arrayObject

$iterator = $arrayObject->getIterator();

pr($arrayObject);

for($iterator; $iterator->valid(); $iterator->next()) {
   // echo $iterator->key() . ' => ' . $iterator->current() . "</br>";
}