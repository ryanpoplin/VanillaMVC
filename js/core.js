// cache variables in memory so fetching overhead is low...

// utilize a CommonJS-type functionality...

// init. the app object, or just make a new one...
var app = app || {};
app.main = (function () {

	"use strict";

	// ref. to all DOM objects...
	var elements = {
		// caching in memory...
		// replace with jQuery...
		noteField: document.querySelector('.write-note'),
		noteSubmit: document.querySelector('.submit-note'),
		noteList: document.querySelector('.notes'),
		noNotesFound: document.querySelector('.no-notes-found')
	};

	// array data structure to hold the notes...
	var notes = [];

	// start listening to events, and act accordingly...
	var attachEvents = function () {



	};

	// add notes to the list...
	var addAsFirstChild = function (parent, child) {

		var parentNode = parent,
		childNode = child;
		
		// if there's already data in the parentNode,
		if (parentNode.firstChild) {
			// insert new data on top of the list...
			parentNode.insertBefore(child, parent.firstChild);
		} else {
			// if there's not data, just add it...
			parentNode.appendChild(child);
		}

	};

	// what appears to be happening based on the model...
	var View = function (note, containerEl) {

		var index = notes.indexOf(note),
		// context...
		that = this;

		this.render = function () {

			this.listItem = document.createElement('li');
			this.paragraph = document.createElement('p');
			this.actions = document.createElement('ul');
			this.removeBtn = document.createElement('li');
			this.likeBtn = document.createElement('li');
			this.editBtn = document.createElement('li');

			this.listItem.classList.add('note');
			this.actions.classList.add('actions');
			this.actions.removeButton.add('remove', 'icon-cancel');
			this.actions.likeButton.add('like', 'icon-heart');

			if (note.data.liked) {
				this.likeButton.classList.add('liked');
			}

			addAsFirstChild(elements.noteList, this.listItem);
			elements.noNoteFound.classList.add('hidden');
			return this; 

		};

		this.like = function () {

			note.like();
			that.likeButton.classList.toggle('liked');

		};

		// this.edit = function () {

		// };

		this.remove = function () {

			elements.noteList.removeChild(that.listItem);
			note.remove();

			if (elements.noteList.childElementCount === 0) {
				elements.noNotesFound.classList.remove('hidden');
			}

		};

		this.attachEvents = function () {

			this.likeButton.addEventListener('click', this.like);
			this.removeButton.addEventListener('click', this.remove);

		};

		this.init = function () {

			this.render();
			this.attachEvents();

			return this;

		};

	};

	// Model constructor...
	// what's really happening...
	var Model = function (noteData, collection) {

		/*

		noteData = {
	
			noteBodyText: '...',
			liked: false

		};

		*/

		// ref. to the instance prop. || meth. from the constructor...
		this.data = noteData;

		this.save = function () {
			collection.push(this.data);
			// JSONify a native JavaScript array of model object elements...
			// into a JSON string...
			// or, RESTful API..., etc...
			localStorage.setItem('notes', JSON.stringify(collection));
			// ref. to method chain...()...
			return this;

		};

		// could add a dislike, too...

		// could add social shares, too...

		this.like = function () {

			// inverse, like flipping a switch on a boolean...
			this.data.liked = !this.data.liked;
			// where's the notes model position in the collection?...
			var indexToUpdate = collection.indexOf(this.data);
			// splice method...
			collection.splice(indexToUpdate, 1, this.data);
			// update the storage...
			localStorage.setItem('notes', JSON.stringify(collection));
			return this;

		};

		// this.edit = function (newNote) {

		// 	// updated note text...
		// 	var newNoteText = newNote;
		// 	this.data.noteBodyText = newNoteText;
		// 	// where's the notes model position in the collection?...
		// 	var indexToUpdate = collection.indexOf(this.data);
		// 	// splice method...
		// 	collection.splice(indexToUpdate, 1, this.data);
		// 	// update the storage...
		// 	localStorage.setItem('notes', JSON.stringify(collection));
		// 	return this;			

		// };

		this.remove = function () {

			var indexToRemove = collection.indexOf(this.data);
			// just delete the element...
			collection.splice(indexToRemove, 1);
			localStorage.setItem('notes', JSON.stringify(collection));
			return this;

		};

	};

	var initialRender = function () {

		if ('notes' in localStorage && JSON.parse(localStorage('notes')).length > 0) {

		}

	};

}());