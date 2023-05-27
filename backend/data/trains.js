const trains = [
    {
      id: 1,
      name: 'Train A',
      source: 'Chennai',
      destination: 'Mangalore',
      stops: [
        { name: 'Chennai', distance: 0, departure: '09:00' },
        { name: 'Vellore', distance: 170, departure: '11:00' },
        { name: 'Bangalore', distance: 200, departure: '15:30' },
        { name: 'Mysuru', distance: 120, departure: '17:30' },
        { name: 'Mangalore', distance: 300, departure: '21:45' }
      ]
    },
    {
      id: 2,
      name: 'Train B',
      source: 'Bangalore',
      destination: 'Mangalore',
      stops: [
        { name: 'Bangalore', distance: 0, departure: '09:00' },
        { name: 'Shimoga', distance: 180, departure: '12:00' },
        { name: 'Mangalore', distance: 250, departure: '17:30' }
      ]
    },
    {
      id: 3,
      name: 'Train C',
      source: 'Bangalore',
      destination: 'Mangalore',
      stops: [
        { name: 'Bangalore', distance: 0, departure: '16:00' },
        { name: 'Shimoga', distance: 180, departure: '19:00' },
        { name: 'Mangalore', distance: 250, departure: '23:45' }
      ]
    }
  ];
  
  module.exports = trains;
  