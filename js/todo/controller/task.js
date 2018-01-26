import tasks from '../model/task';
import taskView from '../view/task';
import taskAddFromView from '../view/taskAddForm';

export default function taskController(rootElement) {

	taskView(rootElement, tasks, {
		onDone,
		onMove,
		onDelete
	});

	taskAddFromView(rootElement, {
		onSubmit
	});

	function onDone(task, status) {
		tasks.done(task, status);
	}

	function onMove(task) {
		tasks.move(task);
	}

	function onDelete(task) {
		tasks.delete(task);
	}

	function onSubmit(text) {
		tasks.add(text);
	}

}