<?php
/*
Użycie: 
	add: json.php?action=add&title={title}&description={desc}&type={movie/show}&lasts={lasts}&image={image}&year={year}
	
	show: json.php?action=show (pokazuje wszystkie rekordy)
	show: json.php?action=show&id={id} (pokazuje tylko post o wybranym ID)

*/
error_reporting(0);
$db = new PDO('mysql:host=localhost;dbname=Wisielec;charset=utf8', 'root', '');
//$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$action = $_REQUEST['action'];
$ret = [ 'status' => 'error' ];
switch( $action ) {
	case 'hasla':
		$add = '';
		if(isset($_REQUEST['haslo'])) {
			$add = " WHERE `haslo` = '" . $_REQUEST['haslo'] . "'";
		}
		$result = $db->query('SELECT * FROM `Hasla`' . $add);
		$rows = $result->fetchAll(PDO::FETCH_ASSOC);
		$ret['posts'] = $rows;
		$ret['status'] = 'ok';
		break;
	case 'add':
		$stmt = $db->prepare("INSERT INTO mov(title, description, lasts, year, type, image) VALUES(:title, :desc, :lasts, :year, :type, :image)");
		$stmt->execute(	array(	':title' => $_REQUEST['title'], 
								':desc' => $_REQUEST['description'],
								':lasts' => $_REQUEST['lasts'], 
								':year' => $_REQUEST['year'],
								':type' => $_REQUEST['type'],
								':image' => $_REQUEST['image'] )
						);
		if( $stmt->rowCount() ) {
			$ret['status'] = 'ok';
			$ret['rows'] = $stmt->rowCount();
		}
		break;
}

echo json_encode($ret);