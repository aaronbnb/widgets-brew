import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './App.css';
import API from './utils/API';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import AdvancedSearch from './components/AdvancedSearch';
import WidgetIndex from './components/WidgetIndex';
import WidgetShow from './components/WidgetShow';
import WidgetForm from './components/WidgetForm';
import WidgetIndexNavFilter from './components/WidgetIndexNavFilter';

const WIDGETS_BREW = "Widgets Brew";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      search: "",
      selectedOption: null,
      widgets: [],
      selectedWidgets: [],
      widget: {},
      colors: [],
      sizes: [],
      advancedSearch: false
    }
  }

  componentDidMount() {
    this.populate();
  }

  populate = () => {
    API.getWidgets().then( ({ data }) => {
      this.setState({ widgets: data,
                      selectedWidgets: data });
    })
    .catch((err) =>
      this.setState({
        widgets: [],
        err: err,
        message: "No New Widgets Found, Try a Different Query"
      })
    );
  }

  handleColorFilter = selectedOption => {
    this.setState({ selectedOption });

    if (selectedOption.value === 'All') {
      this.setState({ 
        selectedWidgets: this.state.widgets
      })
    } else {
      let selectedWidgets = [...this.state.widgets].filter( widget => 
        widget.color === selectedOption.value);
      this.setState({selectedWidgets: selectedWidgets});
    }
  }


  handleSearchInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  submitSearch = () => {

  }

  selectWidget = widget => {
    this.setState({
      selectedWidget: widget
    });
  }

  filter = category => {
    API.filterWidgets(category).then( ({ data }) => {
      this.setState({widgets: data})
    }).catch((err) =>
      this.setState({
        widgets: [],
        err: err,
        message: "No Widgets Found, Try a Different Query"
      })
    );
  }

  onlyUnique = (value, index, self) => { 
    return self.indexOf(value) === index;
  }


  render() {
    const colors = this.state.widgets.map( widget => widget.color).filter(this.onlyUnique);

    return (
      <div className="App">
          <Router>
            <div>
              <Header title={WIDGETS_BREW}/>

              <Switch>
                <Route exact path="/" render={props => 
                  <Fragment>
                    <SearchBar  
                      search={this.state.search} 
                      handleSearchInput={this.handleSearchInput}
                      submitSearch={this.submitSearch}
                      showAdvancedSearch={this.state.advancedSearch}
                    >
                          <AdvancedSearch 
                            colors={colors}
                            search={this.state.search} 
                            disabled={this.state.advancedSearch}
                            selectedOption={this.state.selectedOption}
                            handleColorFilter={this.handleColorFilter}
                            submitSearch={this.submitSearch}/>
                          <Link to={"/new"}>Create a New Widget!</Link>
                    </SearchBar>
                    <WidgetIndex
                      {...props}
                      widgets={this.state.selectedWidgets}
                      selectWidget={this.selectWidget}
                    >

                        <WidgetIndexNavFilter 
                          filter={this.filter} 
                          colors={colors}/>

                    </WidgetIndex>
                  </Fragment>
                  } 
                />
                   <Route exact path="/widgets/:widget" render={props => 
                    <WidgetShow widget={this.state.selectedWidget}/>
                  } 
                  />
                  <Route exact path="/new" render={props => 
                    <WidgetForm />
                  } 
                />
              </Switch>
            </div>
          </Router>
      </div>
    );
  }
}

export default App;