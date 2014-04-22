<?php

class myDB
{
    protected $_conn;
    protected $_stmt;
    
    public function __construct() {
        //$this->_conn = new mysqli('localhost','u167341_ahorro','HCc93UtN','u167341_saves') or die('There was a problem connecting to the DB');
        $this->_conn = new mysqli('localhost','root','','u167341_paperblox') or die('There was a problem connecting to the DB');
    }
      
    public function insert($stmt){        
    }
    
    public function delete($stmt){        
    }
    
    public function update($stmt){        
    }
    
    public function query($stmt){
        $this->_conn->prepare($stmt)or die('There is problem with the query');
        $this->_conn->execute();
        
        return;
    }
    
    public function select($stmt){
        return $this->_conn->query($stmt);
    }
    
    public function __destruct() {
        $this->_conn->close();
    }
    
    protected function _bindStmt($stmt){        
    }
}

?>