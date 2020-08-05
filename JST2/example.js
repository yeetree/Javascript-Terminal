ver = [
  "2.0",
  "1.2",
];
log("Welcome to a new terminal!")
log("Updated by: Evan Viele");
log("Type 'help' for a list of commands");
update_user_title("JS:> ");

register_cmd("", function(cmd) {
    block_log("");
});

register_cmd("help", function(cmd) {
    block_log("JS Terminal v0.1 Help");
    block_log("help - brings you here");
    block_log("exit - exits JS Terminal");
    block_log("reboot - restarts JS Terminal");
    block_log("cls - clears screen");
    block_log("cat - displays picture of a cat");
    block_log("say - says user input");
    block_log("reg - read/write contents of the JS Terminal registry");
    block_log("list - advanced help menu");
    block_log("prompt - changes prompt, use just 'prompt' to change back to default prompt");
});

register_cmd("say", function(cmd) {
    var parameters = cmd.split(" ").slice(1);
    for (var i = 0; i < parameters.length; i++) {
        block_log(parameters[i]);
    }
});

register_cmd("cat", function(cmd) {
    block_img('https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg')
});

register_cmd("exit", function(cmd) {
  window.close();
});

register_cmd("reboot", function(cmd) {
  window.location.reload()
});

register_cmd("prompt", function(cmd) {
    var parameters = cmd.split(" ").slice(1);
    var prmpt = ""
    for (var i = 0; i < parameters.length; i++) {
        prmpt = prmpt + parameters[i];;
    }
    if (prmpt == "") {
      update_user_title("JS:> ");
    }else {
      update_user_title(prmpt);
    }
});











register_cmd("reg", function(cmd) {
    var parameters = smart_split(cmd, " ", false).slice(1);
    console.log(parameters);
    if (parameters.length === 0) {
        block_log("Please specify an operation, or run 'reg help'");
        return;
    }
    if (parameters[0].toString().toUpperCase() === "EDIT") {
      if (parameters.length === 1) {
          block_log("Please specify the value you would like to change");
          return;
      }else {
        if (parameters[1].toString().toUpperCase() === "PROMPT") {
            if (parameters.length === 1) {
                block_log("Please specify a new value");
                return;
            }else {
                update_user_title(parameters[2]);
                return;
            }
        }
      }
    }else if (parameters[0].toString().toUpperCase() === "RESTORE") {
        if (parameters.length === 1) {
            block_log("Please specify the value you would like to restore");
            return;
        }else {
            if (parameters[1].toString().toUpperCase() === "PROMPT") {
                update_user_title("eDOS:> ")
                return;
            }
        }
    }else if (parameters[0].toString().toUpperCase() === "READ") {
      if (parameters.length === 1) {
          block_log("Please specify the value you would like to read");
          return;
      }else {
          if (parameters[1].toString().toUpperCase() === "PROMPT") {
              block_log(terminal_user_title);
              return;
          }
      }
    }else if (parameters[0].toString().toUpperCase() === "LIST") {
      block_log("JS Terminal Registry Tool v" + ver[1] + " List");
      block_log("prompt");
    }else if (parameters[0].toString().toUpperCase() === "HELP") {
      block_log("JS Terminal Registry Tool v" + ver[1] + " Help");
      block_log("help - brings you to this menu");
      block_log("edit - changes a value");
      block_log("restore - restores a value to its default state");
      block_log("list - lists all registers");
      block_log("read - reads contents of a value");
    }

});

register_cmd("cls", function(cmd) {
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
    block_log("<br />");
});
