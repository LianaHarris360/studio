var Views = require("edit_channel/views");
var Models = require("edit_channel/models");

$(function() {

	/* Todo: remove once data structures implemented */
	var channelModel = new Models.ChannelModel({title: 'Khan Academy', description: 'Default value for testing purposes'});
	var rootTopicNode = new Models.TopicNodeModel({title:'Khan Academy', description:'This is a sample description'});
	var topicTree = new Models.TopicTreeModel({name: "Untitled Tree", is_published: false, root_node: rootTopicNode, channel: channelModel});
	var dummyDescription = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
	
	var channelModel2 = new Models.ChannelModel({title: 'Learning Equality', description: 'Description of learning equality'});
	var channelModel3 = new Models.ChannelModel({title: 'This is a very long name for a channel title', description: dummyDescription + dummyDescription + dummyDescription + dummyDescription + dummyDescription});
	var channelCollection = new Models.ChannelCollection([channelModel, channelModel2, channelModel3]);
	//Content Container 1
	var topicNode1 = new Models.TopicNodeModel({parent: rootTopicNode, title:'This is a very long title name for a file', description: dummyDescription + dummyDescription + dummyDescription + dummyDescription + dummyDescription + dummyDescription + dummyDescription + dummyDescription + dummyDescription +dummyDescription + dummyDescription + dummyDescription});
	var topicNode2 = new Models.TopicNodeModel({parent: rootTopicNode, title:'Science', description: "Shorter description"});
	var contentNode1 = new Models.ContentNodeModel({parent: rootTopicNode, title: "Intro video", description: dummyDescription, author:"Anyonymous"});
	var contentNode2 = new Models.ContentNodeModel({parent: rootTopicNode, title: "This is a very long title name for a file", description: dummyDescription, author:"Anyonymous"});
	
	//Content Container 2										
	var topicNode3 = new Models.TopicNodeModel({parent: topicNode1, title:'Algebra', description: dummyDescription});
	var topicNode4 = new Models.TopicNodeModel({parent: topicNode1, title:'Trigonometry', description: dummyDescription});
	var topicNode5 = new Models.TopicNodeModel({parent: topicNode1, title:'Geometry', description: dummyDescription});
	var topicNode6 = new Models.TopicNodeModel({parent: topicNode1, title:'Addition and Subtraction', description: dummyDescription});
	var topicNode8 = new Models.TopicNodeModel({parent: topicNode1, title:'Practice Tests', description: dummyDescription});
	var topicNode9 = new Models.TopicNodeModel({parent: topicNode1, title:'Homework', description: dummyDescription});
	var contentNode3 = new Models.ContentNodeModel({parent: topicNode1, title: "About", description: dummyDescription, author:"Anyonymous"});
	var contentNode4 = new Models.ContentNodeModel({parent: topicNode1, title: "Learning about shapes", description: dummyDescription, author:"Anyonymous"});

	//Content Container 3
	var topicNode7 = new Models.TopicNodeModel({parent: topicNode5, title:'Geology', description: dummyDescription});
	var contentNode5 = new Models.ContentNodeModel({parent: topicNode5, title: "Review", description: dummyDescription, author:"Anyonymous"});

	var topicNodeCollection = new Models.TopicNodeCollection([rootTopicNode, topicNode1, topicNode2, topicNode3, topicNode4, topicNode5, topicNode6, topicNode7, topicNode8, topicNode9]);
	var contentNodeCollection = new Models.ContentNodeCollection([contentNode1, contentNode2, contentNode3, contentNode4, contentNode5]);
	
	var view = new Views.BaseView({
		el: $("#channel-container"),
		model: {topicnodes: topicNodeCollection, contentnodes: contentNodeCollection, topic: topicTree, channels: channelCollection}
	});
});