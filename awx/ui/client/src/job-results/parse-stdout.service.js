/*************************************************
* Copyright (c) 2016 Ansible, Inc.
*
* All Rights Reserved
*************************************************/

export default [function(){
    var val = {
        prettify: function(line){
            // this function right now just removes the 'rn' strings
            // that i'm currently seeing on this branch on the beginning
            // and end of each event string. In the future it could be
            // used to add styling classes to the actual lines of stdout
            return line.replace(/rn/g, '');
        },
        parseStdout: function(event){
            // this object will be used by the ng-repeat in the
            // job-results-stdout.partial.html. probably need to add the
            // elapsed time in here too
            return {
                start_line: event.start_line,
                end_line: event.end_line,
                stdout: this.prettify(event.stdout)
            };
        }
    };
    return val;
}];
