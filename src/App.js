import './App.css';
import 'bootstrap';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
// import { BsCreditCard2Front } from "react-bootstrap-icons";// import Button from 'react-bootstrap/Button';
import { BiMessageEdit } from "react-icons/bi";
function App() {
  return (
    <div classNameName="App">

      {/* starts here */}
      <div>
	{/* <!-- dashboard menu --> */}
<div class="dashboard_menu" id="dashboard_menu">
	{/* <!-- dashboard_ logo --> */}
	<div class="dashboard_logo">
		{/* <!-- row starts --> */}
		<div class="row" id="rowone">
		<div class="col text-light" id="infoview_logo">
		<b>Infoview </b>
		</div>
		<div class="col" id="colone">
			<i class="bi bi-arrow-left-circle"></i>
		</div>
	</div>
</div>
	{/* <!-- row ends --> */}

	{/* <!-- row starts here --> */}

	{/* <!-- row ends here --> */}
<div id="dashboard_starting">
	<div class="card row dashboard_menu_2_menu">
			<p><i class="bi bi-grid-1x2-fill" id="bi-grid-1x2-fill"></i> <span id="dashboard_span">Dashboard</span> </p>
	</div>
</div>
	{/* <!-- card ends here --> */}
<div class="card menulist_menu2" id="menulist_menu2">
	<ul class="list-group list">
    <li class="list-group-item menulist_menu2_list_items"><i class="bi bi-bar-chart-line-fill"></i> <span id="icon_menulist_menu2">Reports</span></li>

    <li class="list-group-item menulist_menu2_list_items"><i class="bi bi-chat-dots"></i><span id="icon_menulist_menu2">Messages</span></li>

    <li class="list-group-item menulist_menu2_list_items"><i class="bi bi-controller"></i><span id="icon_menulist_menu2">Simulators</span></li>

    <li class="list-group-item menulist_menu2_list_items"><i class="bi bi-plus-square"></i><span id="icon_menulist_menu2">Affliates</span></li>

    <li class="list-group-item menulist_menu2_list_items"><i class="bi bi-folder-plus"></i><span id="icon_menulist_menu2">Disputes</span></li>

<li class="list-group-item menulist_menu2_list_items">

            <Dropdown>
      
      <Dropdown.Toggle  id="drop_down">
      <BiMessageEdit/><span id='blogs_span'>Blogs</span>
    </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>


    </li>

    <li class="list-group-item menulist_menu2_list_items"><i class="bi bi-wallet"></i><span id="salary_span">Salary</span></li>

  </ul>
</div>
{/* <!-- div class ends here --> */}
{/* <!-- div starts here --> */}

{/* <!-- div ends here --> */}
<div class="card row help_needed" id="help_needed">
			{/* <!-- <p><i class="bi bi-info-circle-fill"></i> --> */}
<div class="dropdown">
  <div class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    <i class="bi bi-pencil-square" id="bi-pencil-square"></i>
    <span id="need_help">Need Help?</span>
  </div>
  <ul class="dropdown-menu dropdown-menu-dark" id="dropdown-menu-dark">
    <li><a class="dropdown-item" href=".">Get Product Tour</a></li>
    <li><a class="dropdown-item" href=".">Get Documentation</a></li>
  </ul>
</div>
			 {/* <!-- --> */}
	</div>
{/* <!-- div starts here --> */}
<div class="card" id="setting_bar_in_menu">
	<ul class="list-group list">

    <li class="list-group-item menulist_menu2_list_items"><i class="bi bi-gear"></i><span id="setting_span">Settings</span></li>
    

    <li class="list-group-item menulist_menu2_list_items"><i class="bi bi-person-lines-fill"></i><span id="contact_admin">Contact Admin</span></li>
</ul>

</div>
<div class="card" id="signout_menulist">
	<p class="menulist_menu2_list_items"><i class="bi bi-box-arrow-right "></i> <span id="signout_span">Signout</span></p>
</div>
{/* <!-- div ends here --> */}
	</div>
	
</div>
{/* <!-- dashboard menu ends here --> */}

{/* <!-- main menu --> */}
<div class="main_card" id="main_card">
	<h5 class="text-light"  id="maincard_heading_h5">Dashboard</h5>

	{/* <!-- user_details starts here --> */}
	<div class="user_details" id="user_details_div">
		<div id="empty_div_user_details">
    <div class="card" id="card_user_details_div">
    <div class="container">
    <div class="row">
    <div class="col-3">
      <img src="https://media.istockphoto.com/photos/smart-businessman-smiling-at-camera-wearing-round-glasses-isolated-on-picture-id1253034963?k=20&m=1253034963&s=612x612&w=0&h=SQJY-ybsD9lwBUpJfSodcCY8nGWrdMG6AeZ0Gkhiank=" id="profile_img_name_designation" alt='profile_image'/>
    </div>
    <div class="col-9">
      <p class="text-center" id="designation_header_p"> Saurav Arvind P <br/><span id="designation_header_span">IVTL Intern</span> </p>
    </div>
    </div>   			
    </div>
    </div>
	</div>
</div>
{/* <!-- user details ends here --> */}

{/* <!-- search box --> */}
 <form class="d-flex" role="search" id="search_d_flex">
        <input class="form-control me-1" type="search" placeholder="Search" aria-label="Search" id="input_search"/>
        <button class="btn text-light search_btn_menu2" type="submit" id="search_input_button"><i class="bi bi-search"></i></button>
      </form>
{/* <!-- search box ends here --> */}

	<div class="page_hover_effect">
		<div class="card" id="card_page_hover_effect">
			<div class="container">
  <div class="row text-center">
    <div class="col active_hover_item_page_hover">
      <i class="bi bi-boxes" id="topbar_text"></i> Work Shedule
    </div>
   <div class="col hover_item_page_hover">
      <i class="bi bi-calendar-plus" id="topbar_text"></i> Add Calendar
    </div>
    <div class="col hover_item_page_hover">
      <i class="bi bi-cart-plus" id="topbar_text"></i> Main Cart
    </div>
    <div class="col hover_item_page_hover">
      <i class="bi bi-chat-left-text-fill" id="topbar_text"></i> Live Messages
    </div>
    <div class="col hover_item_page_hover">
      <i class="bi bi-box-fill" id="topbar_text"></i> Flexible Leaves
    </div>
        <div class="col hover_item_page_hover">
      <i class="bi bi-bug" id="topbar_text"></i> Fix Bugs
    </div>
  </div>
			</div>
		</div>
	</div>
{/* <!-- heading --> */}
	<h6 class="text-light" id="projecthoursh6"><i class="bi bi-calendar-week" id="bi-calendar-week"></i> Project Hours</h6> 

</div>
{/* <!-- main_menu ends here --> */}

{/* <!-- another_menu --> */}
<div class="container" id="container_maincard">
	{/* <!-- heading --> */}
	<h6 class="text-light" id="workprogress_h6"><i class="bi bi-reception-3" id="bi-reception-3"></i> Working Progress</h6>
    {/* <!-- <img src="images/charter.jpg" style="width:1250px; border-radius: 10px;"> --> */}
</div>
{/* <!-- quicklink starts here --> */}
<div class="drop">
<div class="quick_link_btn_menu2" id="quick_link_btn_menu2">
<div class="plus_symbol_rotate_menu2">
  <i class="bi bi-plus-circle-fill"></i>
</div>

</div>
    {/* <!-- Display the quick links --> */}
<div class="card quicklinks_card text-center">
    <i class="quick_icons bi bi-house-door-fill"></i>
    <i class="quick_icons bi bi-chat-dots-fill"></i>
    <i class="quick_icons bi bi-boxes"></i>
    <i class="quick_icons bi bi-calendar-plus"></i>
    <i class="quick_icons bi bi-pencil-square"></i>
</div>
{/* <!-- display the quick link ends --> */}
</div>
{/* <!-- style ends --> */}
</div>



      // {/* ends here */}
  );
}

export default App;
