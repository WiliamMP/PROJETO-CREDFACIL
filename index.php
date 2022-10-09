<?php

$URL = $_GET['url'] ?? 'inicio';

if(file_exists("pages/{$URL}.html")){
  include "pages/{$URL}.html";
} else {
  include "pages/error.html";
}

