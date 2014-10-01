/**
 * @jsx React.DOM
 */
 
var React = require('react'),
  mui = require('mui'),
  CodeExample = require('../code-example/code-example.jsx'),

  menuItems = [
    { payload: '1', text: 'Never' },
    { payload: '2', text: 'Every Night' },
    { payload: '3', text: 'Weeknights' },
    { payload: '4', text: 'Weekends' },
    { payload: '5', text: 'Weekly' },
  ],

  labelMenuItems = [
    { payload: '1', text: 'ID', data: '1234567890', icon: 'home' },
    { payload: '2', text: 'Type', data: 'Announcement', icon: 'home' },
    { payload: '3', text: 'Caller ID', data: '(123) 456-7890', icon: 'home' }
  ],

  attributeMenuItems = [
    { payload: '1', text: 'All', number: '22'},
    { payload: '3', text: 'Uncategorized', number: '6'},
    { payload: '4', text: 'Trash', number: '11' }
  ],

  iconMenuItems = [
    { payload: '1', text: 'Live Answer', icon: 'home', number: '10' },
    { payload: '2', text: 'Voicemail', icon: 'contacts',  number: '5' },
    { payload: '3', text: 'Starred', icon: 'mic', number: '3' },
    { payload: '4', text: 'Shared', icon: 'pie',  number: '12' }
  ],

  filterMenuItems = [
    { payload: '1', text: 'Text Opt-In', toggle: true},
    { payload: '2', text: 'Text Opt-Out', toggle: true},
    { payload: '3', text: 'Voice Opt-Out', toggle: true}
  ],

  nestedMenuItems = [
    { type: mui.MenuItem.Types.NESTED, text: 'Reports', items: [
      { payload: '1', text: 'Nested Item 1' },
      { type: mui.MenuItem.Types.NESTED, text: 'Nested Item 2', items: [
        { payload: '1', text: 'Nested Item 3' },
        { type: mui.MenuItem.Types.NESTED, text: 'Nested Item 4', items: [
          { payload: '1', text: 'Nested Item 5' },
          { payload: '3', text: 'Nested Item 6' }
        ] },
        { payload: '3', text: 'Nested Item 7' }
      ] },
      { payload: '3', text: 'Nested Item 9' },
      { type: mui.MenuItem.Types.NESTED, text: 'Nested Item 2', items: [
        { payload: '1', text: 'Nested Item 3' },
        { type: mui.MenuItem.Types.NESTED, text: 'Nested Item 4', items: [
          { payload: '1', text: 'Nested Item 5' },
          { payload: '3', text: 'Nested Item 6' }
        ] },
        { payload: '3', text: 'Nested Item 7' }
      ] },
      { payload: '4', text: 'Nested Item 10' }
    ] },
    { payload: '1', text: 'Audio Library'},
    { payload: '2', text: 'Settings'},
    { payload: '3', text: 'Logout'}
  ];


var MenusPage = React.createClass({

  render: function() {
    return (
    	<div>
    		<h2>Drop Down Menu</h2>
        <div className="mui-menu-container">
    		  {this._getDropDownMenuExample()}
        </div>
        <br />
        <h2>Label Menu</h2>
        <div className="mui-menu-container">
          {this._getLabelMenuExample()}
        </div>
        <br />
        <h2>Attribute Menu</h2>
        <div className="mui-menu-container">
          {this._getAttributeMenuExample()}
        </div>
        <br />
        <h2>Icon Menu</h2>
        <div className="mui-menu-container">
          {this._getIconMenuExample()}
        </div>
        <br />
        <h2>Filter Menu</h2>
        <div className="mui-menu-container">
          {this._getFilterMenuExample()}
        </div>
        <h2>Nested Menu</h2>
        <div className="example-menu">
          <mui.Menu menuItems={nestedMenuItems} onItemClick={this._onItemClick} />
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br />
    	</div>
    );
  },

  _getDropDownMenuExample: function() {
    var code = 
      "var menuItems = [\n" +
      " { payload: '1', text: 'Never' },\n" +
      " { payload: '2', text: 'Every Night' },\n" +
      " { payload: '3', text: 'Weeknights' },\n" +
      " { payload: '4', text: 'Weekends' },\n" +
      " { payload: '5', text: 'Weekly' },\n" +
      "],\n\n" +

      "<DropDownMenu menuItems={menuItems} />";

    return (
      <CodeExample code={code}>
        <mui.DropDownMenu menuItems={menuItems} onChange={this._onDropDownMenuChange} />
      </CodeExample>
    );
  },

  _getLabelMenuExample: function() {
    var code = 
      "var labelMenuItems = [\n" +
      "{ payload: '1', text: 'ID', data: '1234567890', icon: 'home' },\n" +
      "{ payload: '2', text: 'Type', data: 'Announcement', icon: 'home' },\n" +
      "{ payload: '3', text: 'Caller ID', data: '(123) 456-7890', icon: 'home' }\n" +
      "];\n\n"  +

      "<Menu menuItems={labelMenuItems} />";

    return (
      <CodeExample code={code}>
        <mui.Menu menuItems={labelMenuItems} onItemClick={this._onItemClick} />
      </CodeExample>
    );
  },

  _getAttributeMenuExample: function() {
    var code = 
      "var attributeMenuItems = [\n" +
      "{ payload: '1', text: 'All', number: '22' },\n" +
      "{ payload: '3', text: 'Uncategorized', number: '6'},\n" +
      "{ payload: '4', text: 'Trash', number: '11' }\n" +
      "];\n\n"  +

      "<Menu menuItems={attributeMenuItems} />";

    return (
      <CodeExample code={code}>
        <mui.Menu menuItems={attributeMenuItems} onItemClick={this._onItemClick} />
      </CodeExample>
    );
  },

  _getIconMenuExample: function() {
    var code = 
      "iconMenuItems = [\n" +
      "{ payload: '1', text: 'Live Answer', icon: 'home', number: '10' },\n" +
      "{ payload: '2', text: 'Voicemail', icon: 'contacts',  number: '5' },\n" +
      "{ payload: '3', text: 'Starred', icon: 'mic', number: '3'},\n" +
      "{ payload: '4', text: 'Shared', icon: 'pie',  number: '12' }\n" +
      "],\n\n" +

      "<Menu menuItems={iconMenuItems} />";

    return (
      <CodeExample code={code}>
        <mui.Menu menuItems={iconMenuItems} onItemClick={this._onItemClick} />
      </CodeExample>
    );
  },

  _getFilterMenuExample: function() {
    var code = 
      "filterMenuItems = [\n" +
      "{ payload: '1', text: 'Text Opt-In', toggle: true},\n" +
      "{ payload: '2', text: 'Text Opt-Out', toggle: true},\n" +
      "{ payload: '3', text: 'Voice Opt-Out', toggle: true}\n" +
      "],\n\n" +

      "<Menu menuItems={filterMenuItems} />";

    return (
      <CodeExample code={code}>
        <mui.Menu menuItems={filterMenuItems} onItemToggle={this._onFilterMenuToggle}  onItemClick={this._onItemClick} />
      </CodeExample>
    );
  },

  _getNestedMenuExample: function() {
    var code = 
      '<Menu menuItems={nestedMenuItems} />';

    return (
      <CodeExample code={code}>
        <mui.Menu menuItems={nestedMenuItems} onItemClick={this._onItemClick} />
      </CodeExample>
    );
  },

  _onDropDownMenuChange: function(e, key, menuItem) {
  	console.log('Menu Clicked: ', menuItem);
  },

  _onFilterMenuToggle: function(e, key, menuItem, toggled) {
    console.log('Filter Menu Toggled: ', key, menuItem, toggled)
  },

  _onItemClick: function(e, key, menuItem) {
    console.log("Menu Item Click: ", menuItem);
  }

});

module.exports = MenusPage;