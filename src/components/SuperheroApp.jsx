var React = require('react');

var SuperheroList = require('./SuperheroList');
var SuperheroApi = require('../api/SuperheroApi');
var SuperheroDetails = require('./SuperheroDetails');
var SuperheroAddButton = require('./SuperheroAddButton');


var SuperheroApp = React.createClass({
  getInitialState : function(){
    return {
      "selectedSuperhero" : {},
      "superheroes" : SuperheroApi.getSuperheroes()
    }
  },
  handleClick : function(name, level){
    SuperheroApi.addSuperhero(name, level);
    this.setState(SuperheroApi.getSuperheroes());
  },

  selectSuperhero : function(id){
    var superhero = SuperheroApi.getSuperheroById(id);
    if(superhero){
        this.setState({'selectedSuperhero':superhero});
    }
  },

  render : function(){
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h2>Superheroes</h2>
            <img src="http://placehold.it/650x250" />
          </div>
          <div className="row">
            <div className="col-md-6">
              <SuperheroAddButton handleClick={this.handleClick}/>
              <SuperheroList superheroes={this.state.superheroes} selectSuperhero={this.selectSuperhero}/>
            </div>
            <div className="col-md-6">
              <SuperheroDetails superhero={this.state.selectedSuperhero} />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = SuperheroApp;
