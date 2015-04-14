var wolfscript;
var util = require('util');

exports.enable = function (){ 
    this.getLogman().info("HELLO WOLFTEST");
 
    this.registerCommand({
      "aliases" : ["js"]
     , "description" : "execute a javascript command"
     , "toolTip" : "/js command"
     , execute: function(sender, args) {
        __log.info("TESTY");
        __log.info(this);
        __log.info(sender);
        __log.info(args);
        this.getLogman().info("Command js received");
     }
    });
    
    var that = this;
    this.events.on("LoadWorld", function(e){
        that.getLogman().info("io.wolfscript.hook.system.LoadWorldHook");
        that.getLogman().info(e.getWorld().getFqName());
        that.getLogman().info(e.getWorld());
        that.getLogman().info(e);
    });
 }; 
 
