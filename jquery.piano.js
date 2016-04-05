(function($) {

    $.fn.piano = function( config ) {

        var options = $.extend({
            tone: 1
        }, config );

        var context = new window.AudioContext();
        var self = this;
        var octavis = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];

        this.demoPlaying = false;
        this.timeouts = [];

        this.toneClick = function(e) {
            var key = $(e.currentTarget).data("key");
            var tone = $(e.currentTarget).data("tone");
            var freq = this.frequencySelector(key);

            var t = 0;
            for(var i=0; i<tone; i++) {
                t = t + (freq*2);
            }
            this.soundPlay(t);
        };

        this.soundPlay = function(freq) {
            var now = context.currentTime;
            var oscillator = context.createOscillator();
            var gain = context.createGain();

            oscillator.type = "sine";
            oscillator.frequency.value = freq;
            gain.gain.linearRampToValueAtTime(0, now);
            gain.gain.linearRampToValueAtTime(.6, now + .1);
            gain.gain.linearRampToValueAtTime(0, now + 1);
            oscillator.connect(gain);
            gain.connect(context.destination);
            oscillator.start(0);

            setTimeout(function() { oscillator.stop(); }, 1500);
        };

        this.demos = function(e) {

            if((typeof(e) !== 'undefined' && this.demoPlaying) ) {
                $(e.currentTarget).removeClass("active");
                this.demoPlaying = false;
                for (var i = 0; i < this.timeouts.length; i++) {
                    clearTimeout(this.timeouts[i]);
                }
                this.timeouts = [];
            } else {
                if((typeof(e) !== 'undefined')){
                    if(!$(e.currentTarget).hasClass("active")) {
                        $(e.currentTarget).addClass("active");
                    }
                }
                this.demoPlaying = true;
                var self = this;
                var loopTimeout = 750;
                for (var i = 0; i < 4; i++) {
                    self.timeouts.push(setTimeout(function () {
                        if(self.demoPlaying) {
                            $("body " + self.selector).find("div[data-key='D'][data-tone='1']").mousedown().addClass("active").delay(500).queue(function (next) {
                                $(this).removeClass("active");
                                next();
                            });

                            $("body " + self.selector).find("div[data-key='F'][data-tone='1']").mousedown().addClass("active").delay(500).queue(function (next) {
                                $(this).removeClass("active");
                                next();
                            });
                            $("body " + self.selector).find("div[data-key='A'][data-tone='1']").mousedown().addClass("active").delay(500).queue(function (next) {
                                $(this).removeClass("active");
                                next();
                            });
                        }
                    }, loopTimeout * i));
                }
                self.timeouts.push(setTimeout(function () {
                    for (var i = 0; i < 4; i++) {
                        setTimeout(function () {
                            if(self.demoPlaying) {
                                $("body " + self.selector).find("div[data-key='D'][data-tone='1']").mousedown().addClass("active").delay(500).queue(function (next) {
                                    $(this).removeClass("active");
                                    next();
                                });

                                $("body " + self.selector).find("div[data-key='F'][data-tone='1']").mousedown().addClass("active").delay(500).queue(function (next) {
                                    $(this).removeClass("active");
                                    next();
                                });
                                $("body " + self.selector).find("div[data-key='A#'][data-tone='1']").mousedown().addClass("active").delay(500).queue(function (next) {
                                    $(this).removeClass("active");
                                    next();
                                });
                            }
                        }, loopTimeout * i);
                    }
                }, 3000));

                self.timeouts.push(setTimeout(function () {
                    if(self.demoPlaying) {
                        $("body " + self.selector).find("div[data-key='C'][data-tone='2']").mousedown().addClass("active").delay(500).queue(function (next) {
                            $(this).removeClass("active");
                            next();
                        });
                    }
                }, 5700));

                self.timeouts.push(setTimeout(function () {
                    for (var i = 0; i < 4; i++) {
                        setTimeout(function () {
                            if(self.demoPlaying) {
                                $("body " + self.selector).find("div[data-key='C'][data-tone='1']").mousedown().addClass("active").delay(500).queue(function (next) {
                                    $(this).removeClass("active");
                                    next();
                                });

                                $("body " + self.selector).find("div[data-key='F'][data-tone='1']").mousedown().addClass("active").delay(500).queue(function (next) {
                                    $(this).removeClass("active");
                                    next();
                                });
                                $("body " + self.selector).find("div[data-key='A'][data-tone='1']").mousedown().addClass("active").delay(500).queue(function (next) {
                                    $(this).removeClass("active");
                                    next();
                                });
                            }
                        }, loopTimeout * i);
                    }
                }, 6100));
                self.timeouts.push(setTimeout(function () {
                    for (var i = 0; i < 4; i++) {
                        setTimeout(function () {
                            if(self.demoPlaying) {
                                $("body " + self.selector).find("div[data-key='C'][data-tone='1']").mousedown().addClass("active").delay(500).queue(function (next) {
                                    $(this).removeClass("active");
                                    next();
                                });

                                $("body " + self.selector).find("div[data-key='F'][data-tone='1']").mousedown().addClass("active").delay(500).queue(function (next) {
                                    $(this).removeClass("active");
                                    next();
                                });
                                $("body " + self.selector).find("div[data-key='G'][data-tone='1']").mousedown().addClass("active").delay(500).queue(function (next) {
                                    $(this).removeClass("active");
                                    next();
                                });
                            }
                        }, loopTimeout * i);
                    }
                }, 9100));

                self.timeouts.push(setTimeout(function () {
                    if(self.demoPlaying) {
                        self.demos();
                    }
                }, 12100));
            }
        };

        this.demos2 = function(e) {

            if((typeof(e) !== 'undefined' && this.demoPlaying) ) {
                $(e.currentTarget).removeClass("active");
                this.demoPlaying = false;
                for (var i = 0; i < this.timeouts.length; i++) {
                    clearTimeout(this.timeouts[i]);
                }
                this.timeouts = [];
            } else {
                if((typeof(e) !== 'undefined')){
                    if(!$(e.currentTarget).hasClass("active")) {
                        $(e.currentTarget).addClass("active");
                    }
                }
                this.demoPlaying = true;
                var self = this;
                var loopTimeout = 1500;
                for (var i = 0; i < 4; i++) {
                    self.timeouts.push(setTimeout(function () {
                        if(self.demoPlaying) {
                            $("body " + self.selector).find("div[data-key='B'][data-tone='1']").mousedown().addClass("active").delay(500).queue(function (next) {
                                $(this).removeClass("active");
                                next();
                            });

                            $("body " + self.selector).find("div[data-key='G#'][data-tone='2']").mousedown().addClass("active").delay(500).queue(function (next) {
                                $(this).removeClass("active");
                                next();
                            });
                            $("body " + self.selector).find("div[data-key='D'][data-tone='3']").mousedown().addClass("active").delay(400).queue(function (next) {
                                $(this).removeClass("active");
                                next();
                            });
                            self.timeouts.push(setTimeout(function () {
                                $("body " + self.selector).find("div[data-key='D'][data-tone='3']").mousedown().addClass("active").delay(400).queue(function (next) {
                                    $(this).removeClass("active");
                                    next();
                                });
                            }, 1000));
                        }
                    }, loopTimeout * i));
                }


                //self.timeouts.push(setTimeout(function () {
                //    if(self.demoPlaying) {
                //        //self.demos2();
                //    }
                //}, 12100));
            }
        };

        this.init = function() {
            var $container = $("<div>", {class: "keyboard"});
            var $left_speaker = $("<div>", {class: "speaker left_speaker"});
            var $right_speaker = $("<div>", {class: "speaker right_speaker"});

            var $options = $("<div>", {class: "options"});
            if(options.tone >= 2) {
                var $item1 = $("<div>", {class: "item"});
                $item1.click($.proxy(this.demos, this));
                $item1.html("Demo 1");
                $options.append($item1);
            }
            //if(options.tone >= 3) {
            //    var $item2 = $("<div>", {class: "item"});
            //    $item2.click($.proxy(this.demos2, this));
            //    $item2.html("Demo 2");
            //    $options.append($item2);
            //}


            for(var ii = 1; ii <= options.tone; ii++) {
                for (var i = 0; i < 12; i++) {
                    if (octavis[i].indexOf("#") > 0) {
                        var $div = $("<div>", {class: "keys black-keys", "data-key": octavis[i], "data-tone": ii});
                    } else {
                        var $div = $("<div>", {class: "keys", "data-key": octavis[i], "data-tone": ii});
                    }
                    $div.mousedown($.proxy(this.toneClick, this));
                    $container.append($div);
                }
            }

            $(this).append($left_speaker);
            $(this).append($right_speaker);
            $(this).append($options);
            $(this).append($container);
        };

        this.frequencySelector = function(note) {
            var frequency = '';

            switch(note) {
                case 'C':
                    frequency = 130.81;
                    break;
                case 'C#':
                    frequency = 138.59;
                    break;
                case 'D':
                    frequency = 146.83;
                    break;
                case 'D#':
                    frequency = 155.56;
                    break;
                case 'E':
                    frequency = 164.81;
                    break;
                case 'F':
                    frequency = 174.61;
                    break;
                case 'F#':
                    frequency = 185;
                    break;
                case 'G':
                    frequency = 196;
                    break;
                case 'G#':
                    frequency = 207.65;
                    break;
                case 'A':
                    frequency = 220;
                    break;
                case 'A#':
                    frequency = 233.08;
                    break;
                case 'B':
                    frequency = 246.94;
                    break;
            }

            return frequency;
        };

        this.init();

        return this;
    }

}(jQuery));