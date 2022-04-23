import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class Home extends Component {
	render() {
		return (
			<>
				<h2 className="title-main">Welcome to Todos App with ReactJs</h2>
				<div className="content-main">
					<h5 className="card-title mb-3">What is a ToDo List?</h5>
					<div className="card-text">
						<p>
							What is a ToDo List? The definition is a simple one. It’s a list of tasks you need to
							complete or things that you want to do.
						</p>
						<p>
							Most typically, they’re organised in order of priority. Traditionally, they’re written on a
							piece of paper or post it notes and act as a memory aid. As technology has evolved we have
							been able to create a todo lists with excel spreadsheets, word documents, email lists, todo
							list apps, Microsoft to do and google to do list to name a few. You can use a to do list in
							your home and personal life, or in the workplace.
						</p>
						<p>
							Having a list of everything you need to do written down in one place means you shouldn’t
							forget anything important. By prioritising the tasks in the list you plan the order in which
							you’re going to do them and can quickly see what needs your immediate attention and what
							tasks you can leave until a little later.
						</p>
					</div>
					<h5 className="card-title mb-3">The Benefits of Using a To Do List</h5>
					<div className="card-text">
						<p>
							One of the most important reasons you should use a to do list is that it will help you stay
							organised. When you write all your tasks in a list, they seem more manageable. When you’ve
							got a clear outline of the tasks you’ve got to do and those you’ve completed, it helps you
							stay focused. While freeing up space in your mind for other more creative tasks.
						</p>
						<p>
							When you complete a task, you can cross it off your list. This gives you a sense of progress
							and achievement, something you’ll lack if you’re always rushing from one task to the next.
							If you feel a sense of achievement, it spurs you on and motivates you to keep moving
							forward.
						</p>
						<p>But that’s not the only benefit of a to do list. Here are a few more:</p>
						<p>
							Improves your memory: A to do list acts as an external memory aid. It’s only possible to
							hold a few pieces of information at one time. Keep a to do list and you’ll be able to keep
							track of everything, rather than just a few of the tasks you need to do. Your to do list
							will also reinforce the information, which makes it less likely you’re going to forget
							something.
						</p>
						<p>
							Increases productivity: A to do list allows you to prioritize the tasks that are more
							important. This means you don’t waste time on tasks that don’t require your immediate
							attention. Your list will help you stay focused on the tasks that are the most important.
						</p>
						<p>
							Helps with motivation: To do lists are a great motivational tool because you can use them to
							clarify your goals. You can divide your long-term goal into smaller, more achievable
							short-term goals and as you tick each one off your list, your confidence will increase.
						</p>
					</div>
					<div className="text-center">
						<NavLink className="btn btn-primary" to="/todos">
							Let's go
						</NavLink>
					</div>
				</div>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
