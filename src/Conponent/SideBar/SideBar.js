import React, { Component } from 'react';
import './SideBar.scss';
import './SearchBar.scss';
import {Link} from 'react-router-dom'
class SideBar extends React.Component{
render(){

    return(
        <div id="main-navigation">
			<ul>
				<li>
					<Link href="javascript:void(0)" class="wattpad-logo" to="/results">Pocetna
					</Link>

				</li>
				<li>
					<Link href="javascript:void(0)" class="entypo-layout" to="/exams">Exams</Link>
				</li>
				{/* <li>
					<Link href="javascript:void(0)" class="entypo-users" to="/students" onClick={e => this.modalOpen(e)}>Studenti</Link>
					<Modal show={this.state.modal} handleClose={e => this.modalClose(e)}>
						<SearchStudent handleClose={e => this.modalClose(e)}/>
        			</Modal>
				</li> */}
				<li>
					<Link href="javascript:void(0)" class="entypo-users" to="/students">Students</Link>
				</li>
				<li>
					<Link href="javascript:void(0)" class="entypo-doc-text" to="/results">Results</Link>
				</li>
				<li>
					<Link href="javascript:void(0)" class="entypo-mail" to="/createExam">Create New</Link>
				</li>
			</ul>
		</div>
    );
}
    
}

export default SideBar