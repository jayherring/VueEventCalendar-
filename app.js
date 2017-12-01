

new Vue ({
	//div with id of events
	el: '#events',
	
	// holds the data for the application , View Model
	data: {
		event: { name: '', description: '', date: '' },
		events:[]
	},
	// runs when the application loads up
	mounted: function() {
		// call to method that inits data
		this.fetchEvents();
	},

	// custom methods that the application uses
	methods: {

		// this method allows user to retrive and set data
		fetchEvents: function() {
			var events = [{
					id: 1,
					name: 'Jackson Party',
					description: 'Micheal Jackson House Party',
					date: '2017-01-01'
				},
				{
					id: 2,
					name: 'International Pancake Day',
					description: 'Free pancakes',
					date: '2017-03-07'
				},
				{
					id: 3,
					name: 'Lollapalooza',
					description: 'Huge Music Fesitval in Chicago',
					date: '2017-08-02'
				}
			];
			// pushes data to array(vue specific)
		this.events = events;
		},

		// adds extra events

		addEvent: function() {
			if(this.event.name) {
				this.events.push(this.event);
				this.event = { name: '', description: '', date: ''};
			}
		},

		deleteEvent: function(index) {
			if(confirm("Are you sure you want to delete this?")){
				this.events.splice(index,1);
			}
		}
	}
});