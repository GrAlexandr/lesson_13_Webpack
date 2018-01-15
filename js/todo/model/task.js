import TaskModel from './taskModel';

let options = {
	year: 'numeric',
	month: 'long',
	day: 'numeric',
};

let tasks = new TaskModel([
	{
		text: 'Brew coffee',
		done: true,
		date: new Date(2017, 11, 25, 18, 1, 0).toLocaleString('en-US', options)
	},
	{
		text: 'Write some code',
		done: false,
		date: new Date(2017, 11, 24, 20, 58, 34).toLocaleString('en-US', options)
	},
	{
		text: 'Sleep',
		done: false,
		date: new Date(2017, 11, 23, 12, 30, 22).toLocaleString('en-US', options)
	}
]);

export default tasks;