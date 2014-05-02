<?PHP
require_once 'twitteroauth/twitteroauth.php';
define("CONSUMER_KEY", "KImaqacBarrrAjkvsWrKJllZOI");
define("CONSUMER_SECRET", "KOjb1rytlgH2mWYPLldi9GWu4qlVVdbXTM8OnA96S0KZB3kofw");
define("OAUTH_TOKEN", "2472722023-PSDzxJSc58KP23qbF5kmF94qpLTDx8OHnK9SvIJ");
define("OAUTH_SECRET", "SREPgSXGvfto4wscatyWfrVlDAgetdX5NODDlg4qHJicT");
$connection = new TwitterOAuth(CONSUMER_KEY, CONSUMER_SECRET, OAUTH_TOKEN, OAUTH_SECRET);
$content = $connection->get('account/verify_credentials');
$connection->post('statuses/update', array('status' => $_POST['tweet']));
?>
