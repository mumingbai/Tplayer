function $d(text) {
    return document.getElementById(text);
}

function hasClass(elements, cName) {
    return !!elements.className.match(new RegExp("(\\s|^)" + cName + "(\\s|$)"));
}

function addClass(elements, cName) {
    if (!hasClass(elements, cName)) {
        elements.className += " " + cName;
    }
}

function removeClass(elements, cName) {
    if (hasClass(elements, cName)) {
        elements.className = elements.className.replace(new RegExp("(\\s|^)" + cName + "(\\s|$)"), " ");
    }
}
 var tplayer = new Object();
function Tplayer(Element, src, poster, server, videoid) {
   
    tplayer.videoid = videoid;
    tplayer.warp = Element;
    tplayer.vsrc = src;
    tplayer.vposter = poster;
    tplayer.serverurl = server;
    tplayer.geturl = tplayer.serverurl + "get/?id=" + tplayer.videoid;
    tplayer.sendurl = tplayer.serverurl + "send/";
    window.onload = function() {
        tplayer.v = '<div class="dm-video-warp"id="dm-video-warp"><div class="dm-video-main"id="dm-video-main"><video class="dm-video"id="dm-video-x" src="' + tplayer.vsrc + '" poster="' + tplayer.vposter + '"></video><div id="danmu"></div><div class="dm-oneplay"id="dm-oneplay"><svg style="width: 200px;height:200px;"class="dm-icon"viewBox="0 0 1024 1024"version="1.1"xmlns="http://www.w3.org/2000/svg"><path fill="#fff"d="M836.1152 512 194.2848 886.4v-748.8000000000001L836.1152 512z"/></svg></div><div class="dm-spinner"id="dm-spinner"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div><div id="dm-video-y"class="dm-video-y"><div class="dm-send"id="dm-send"><div class="dm-logo-small"></div><input class="dm-tucao"type="text"id="dm-text"required="true"placeholder="客官，不来吐槽一下吗?"autocomplete="off"><input type="text"id="dm-color"style="display:none"value="#fff"><input type="text"id="dm-place"style="display:none"value="1"><div class="dm-colorbar"id="dm-colorbar"><div class="dm-place"></div></div><input class="dm-post"id="dm-up"type="submit"value="发送"><div id="color-picker"class="cp-small"></div></div><div id="video-control"class="video-control"><svg id="video-control-play"class="dm-icon"viewBox="0 0 1024 1024"version="1.1"xmlns="http://www.w3.org/2000/svg"><path fill="#fff"d="M836.1152 512 194.2848 886.4v-748.8000000000001L836.1152 512z"/></svg><svg id="video-control-paused"class="dm-icon"viewBox="0 0 1024 1024"version="1.1"xmlns="http://www.w3.org/2000/svg"><path fill="#fff"d="M256.033769 192.014198l127.977743 0 0 639.933741-127.977743 0 0-639.933741ZM639.976 191.982l127.993 0 0 639.966-127.993 0 0-639.966z"/></svg><span id="video-control-nowtime">0:00</span><!--<input id="video-control-paused"type="button"value="暂停">--><input id="video-control-range"type="range"name="points"min="0"max="10000"style="width:64%"value="0"/><span id="video-control-alltime" style="padding-right:6px">0:00</span><div class="dm-dmk"id="dm-dmk">弹</div><div class="dm-syk"id="dm-syk">♫<input id="dm-syk-range"style="width:70px;"type="range"name="points"min="0"max="100"value="100"/></div><svg id="video-full"style="width: 20px;float: right;padding-right:30px"xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink"class="dm-icon"style=""viewBox="0 0 1024 1024"version="1.1"p-id="1427"><defs><style type="text/css"><![CDATA[]]></style></defs><path d="M971.862 52.538c-10.964-10.992-25.546-17.044-41.056-17.044L429.616 35.494l0 79.362 479.86 0 0 465.288 79.364 0L988.84 93.524C988.84 78.024 982.802 63.46 971.862 52.538z"p-id="1428"/><path d="M115.092 429.62 35.728 429.62l0 500.854c0 15.5 6.038 30.066 16.982 40.994 10.966 10.988 25.544 17.04 41.05 17.04l469.182 0 0-79.364L115.092 909.144 115.092 429.62z"p-id="1429"/><path d="M127.16 193.578l73.198 73.198-0.034 0.034 40.438 40.44 14.164 14.096 152.616 152.616c8.796 8.796 20.492 13.64 32.932 13.64 12.442 0 24.138-4.846 32.936-13.644 18.158-18.16 18.156-47.708-0.002-65.866l-141.318-141.318 0.094-0.094-40.484-40.486-14.162-13.97L192.812 127.492l146.47 0 0-92L101.16 35.492c-36.392 0-66 29.608-66 66l0 237.972 92 0L127.16 193.578z"p-id="1430"/><path d="M896.578 830.358l-73.198-73.198 0.034-0.034-40.44-40.44-14.148-14.084-152.622-152.62c-8.796-8.8-20.496-13.648-32.942-13.648-12.444 0-24.14 4.848-32.94 13.646-18.148 18.156-18.148 47.702 0.004 65.866l141.31 141.306-0.094 0.094 40.492 40.494 14.16 13.974 84.728 84.726-146.734 0 0 92 238.386 0c36.392 0 66-29.608 66-66l0-237.96-92 0L896.574 830.358z"p-id="1431"/></svg></div></div></div></div>';
        tplayer.warp.innerHTML = tplayer.v;
        tplayer.ddom = $d("dm-video-x");
        tplayer.time = 0;
        tplayer.sjc = 0;
        tplayer.dsq = 0;
        tplayer.leftarr = [];
        tplayer.toparr = [];
        tplayer.dmheight = 31;
        tplayer.time2=0;
        //弹幕行高
        tplayer.width = tplayer.ddom.offsetWidth;
        tplayer.height = tplayer.ddom.offsetHeight;
        tplayer.getdanmu = function() {
            var xmlhttp;
            xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    var text = JSON.parse(xmlhttp.responseText);
                    tplayer.data = text.data;
                }
            };
            xmlhttp.open("GET", tplayer.geturl, true);
            xmlhttp.send();
        };
        tplayer.getdanmu();
        tplayer.send = function(text, color, wz, me) {
            tplayer.width = tplayer.ddom.offsetWidth;
            tplayer.height = tplayer.ddom.offsetHeight;
            var dm = document.createElement("div");
            dm.appendChild(document.createTextNode(text));
            dm.style.color = color;
            if (me) {
                dm.style.border = "1px solid #fff";
            }
            if (wz == 1) {
                //left 弹幕
                var dtop = tplayer.getlefttop();
                dm.style.top = dtop * tplayer.dmheight + "px";
                tplayer.leftarr[dtop] = 1;
                dm.className = "danmu dm-left";
                dm.style.transform = "translateX(-" + tplayer.width + "px)";
                var e = $d("danmu").appendChild(dm);
                var s1 = e.offsetWidth;
                var s2 = s1 + tplayer.width;
                var v = s2 / 10;
                var t = s1 / v;
                setTimeout(function() {
                    tplayer.leftarr[dtop] = 0;
                }, t * 1e3 + 500);
                setTimeout(function() {
                    tplayer.danmuhide(e, 1);
                }, 16e3);
            } else if (wz == 2) {
                //顶部弹幕
                dm.className = "danmu dm-top";
                var dtop = tplayer.gettoptop();
                dm.style.top = dtop * tplayer.dmheight + "px";
                tplayer.toparr[dtop] = 1;
                var e = $d("danmu").appendChild(dm);
                setTimeout(function() {
                    tplayer.danmuhide(e, 2, dtop);
                }, 5e3);
            }
        };
        tplayer.danmuhide = function(e, id, topid) {
            if (hasClass(e, "dm-suspend")) {
                setTimeout(function() {
                    tplayer.danmuhide(e, id, topid);
                }, 5e3);
            } else {
                e.remove();
                if (id == 2) {
                    //顶部弹幕
                    tplayer.toparr[topid] = 0;
                }
            }
        };
        tplayer.getlefttop = function() {
            var h;
            for (var i = 0; i <= tplayer.leftarr.length; i++) {
                if (!tplayer.leftarr[i]) {
                    //console.log('第'+i+'可以发射弹幕');
                    h = i;
                    break;
                }
            }
            return h;
        };
        tplayer.gettoptop = function() {
            var h;
            for (var i = 0; i <= tplayer.toparr.length; i++) {
                if (!tplayer.toparr[i]) {
                    //console.log('第'+i+'可以发射弹幕');
                    h = i;
                    break;
                }
            }
            return h;
        };
        //弹幕开关
        $d("dm-dmk").onclick = function() {
            if (this.className == "dm-dmk") {
                this.className = "dm-dmk dm-dmk-c";
                $d("danmu").style.opacity = "0";
            } else {
                this.className = "dm-dmk";
                $d("danmu").style.opacity = "1";
            }
        };
        //弹幕回车按下
        $d("dm-text").onkeydown = function(event) {
            var e = event || window.event || arguments.callee.caller.arguments[0];
            if (e.keyCode == 13) {
                $d("dm-up").onclick();
            }
        };
        //弹幕发送
        $d("dm-up").onclick = function() {
            tplayer.send($d("dm-text").value, $d("dm-color").value, $d("dm-place").value, 1);
            $d("dm-text").readonly = "readonly";
            //$("dm-text").style.background = "#f4f4f4";
            $d("dm-up").disabled = "true";
            $d("dm-up").style.background = "#777479";
            setTimeout(function() {
                $d("dm-text").value = "";
                //$("dm-text").style.background = "#fff";
                $d("dm-up").disabled = "";
                $d("dm-up").style.background = "#8715EF";
            }, 500);
            var postData = {
                id:tplayer.videoid,
                text:$d("dm-text").value,
                color:$d("dm-color").value,
                time:tplayer.time,
                place:$d("dm-place").value
            };
            postData = function(obj) {
                // 转成post需要的字符串.
                var str = "";
                for (var prop in obj) {
                    str += prop + "=" + obj[prop] + "&";
                }
                return str;
            }(postData);
            var xhr = new XMLHttpRequest();
            xhr.open("POST", tplayer.sendurl, true);
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.onreadystatechange = function() {
                var XMLHttpReq = xhr;
                if (XMLHttpReq.readyState == 4) {
                    if (XMLHttpReq.status == 200) {
                        var text = XMLHttpReq.responseText;
                        console.log(text);
                    }
                }
            };
            xhr.send(postData);
        };
        //视频暂停
        $d("video-control-paused").onclick = function() {
            clearInterval(tplayer.Interval);
            tplayer.dsq = 0;
            var e = $d("danmu").getElementsByTagName("div");
            this.style.display = "none";
            $d("video-control-play").style.display = "inline-block";
            tplayer.ddom.pause();
            for (var i = e.length - 1; i >= 0; i--) {
                addClass(e[i], "dm-suspend");
            }
            $d("dm-spinner").style.display = "none";
        };
        $d("dm-oneplay").onclick = function() {
            this.style.display = "none";
            $d("video-control-play").onclick();
        };
        $d("danmu").onclick = function() {
            if ($d("dm-video-x").paused) {
                $d("video-control-play").onclick();
            } else {
                $d("video-control-paused").onclick();
            }
        };
        $d("video-control-play").onclick = function() {
            $d("dm-oneplay").style.display = "none";
            if (tplayer.dsq == 0) {
                tplayer.Interval = setInterval(danmutime, 100);
                tplayer.dsq = 1;
            }
            $d("dm-video-y").style.opacity = "0";
            var e = $d("danmu").getElementsByTagName("div");
            this.style.display = "none";
            $d("video-control-paused").style.display = "inline-block";
            tplayer.ddom.play();
            for (var i = e.length - 1; i >= 0; i--) {
                removeClass(e[i], "dm-suspend");
            }
        };
        //控制台显示
        $d("dm-video-y").onmousemove = function() {
            showbar();
        };
//      $d("video-control-range").onchange = function() {
//      	var value=this.value;
//          tplayer.ddom.currentTime = parseInt(value) * tplayer.ddom.duration * 1e-4;
//          tplayer.time2=parseInt(tplayer.ddom.currentTime) * 10;
//          tplayer.time = parseInt(tplayer.ddom.currentTime) * 10;
//          console.log('onchange'+value)
//      };
        $d("video-control-range").onclick=function(){
        	var value=this.value;
        	//console.log('change'+value)
            tplayer.ddom.currentTime = parseInt(value) * tplayer.ddom.duration * 1e-4;
            tplayer.time2=parseInt(value) * tplayer.ddom.duration * 1e-4;
            tplayer.time = parseInt(value) * tplayer.ddom.duration * 1e-4;
            
        }
        function getCookie(Name) {
            var cookieName = encodeURIComponent(Name) + "=", returnvalue = "", cookieStart = document.cookie.indexOf(cookieName), cookieEnd = null;
            if (cookieStart > -1) {
                cookieEnd = document.cookie.indexOf(";", cookieStart);
                if (cookieEnd == -1) {
                    cookieEnd = document.cookie.length;
                }
                returnvalue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
            }
            return returnvalue;
        }
        tplayer.changersound = function() {
            var Days = 7;
            var exp = new Date();
            exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1e3);
            document.cookie = "tpsound=" + parseInt($d("dm-syk-range").value) + ";expires=" + exp.toGMTString() + "&path=/";
        };
        tplayer.soundcookie = getCookie("tpsound");
        if (tplayer.soundcookie) {
            $d("dm-syk-range").value = tplayer.soundcookie;
            $d("dm-video-x").volume = parseInt($d("dm-syk-range").value) * .01;
        } else {
            tplayer.changersound();
        }
        //音量调节
        $d("dm-syk").onchange = function() {
            var i = parseInt($d("dm-syk-range").value) * .01;
            $d("dm-video-x").volume = i;
            tplayer.changersound();
        };
        function danmutime() {
            //定时器 0.1s执行一次  time2为校准时间
            if(!tplayer.time2){
            	tplayer.time++;
            	$d("video-control-nowtime").innerHTML = getvideotime(tplayer.ddom.currentTime).m + ":" + getvideotime(tplayer.ddom.currentTime).s;
                $d("video-control-range").value = tplayer.ddom.currentTime / tplayer.ddom.duration * 1e4;
                // 检查时间与视频时间差
                
                var time = tplayer.ddom.currentTime * 10;
                if (time + 10 < tplayer.time||time - 10 > tplayer.time) {
                    tplayer.time2 = parseInt(time);
                    //console.log("时间校准 time2已给予值");
                	}
           		
            }
      		else{
      			 tplayer.time=tplayer.time2;
      			 tplayer.time2=0;
      		}
            //每1秒时间校准 
           
            for (var i = 0; i < tplayer.data.length; i++) {
                if (tplayer.data[i].time == tplayer.time) {
                    //console.log("send");
                    tplayer.send(tplayer.data[i].text, tplayer.data[i].color, tplayer.data[i].place);
                }
            }
        }
        //视频缓冲事件
        $d("dm-video-x").addEventListener("waiting", videohc);
        function videohc() {
            //console.log('loding');
            clearInterval(tplayer.Interval);
            tplayer.dsq = 0;
            $d("dm-spinner").style.display = "block";
            var e = $d("danmu").getElementsByTagName("div");
            for (var i = e.length - 1; i >= 0; i--) {
                addClass(e[i], "dm-suspend");
            }
        }
        $d("dm-video-x").addEventListener("playing", function() {
            // console.log('play');
            if (tplayer.dsq == 0) {
                tplayer.Interval = setInterval(danmutime, 100);
                tplayer.dsq = 1;
            }
            var e = $d("danmu").getElementsByTagName("div");
            $d("dm-spinner").style.display = "none";
            $d("video-control-alltime").innerHTML = getvideotime(tplayer.ddom.duration).m + ":" + getvideotime(tplayer.ddom.duration).s;
            for (var i = e.length - 1; i >= 0; i--) {
                removeClass(e[i], "dm-suspend");
            }
        });
        //键盘
        document.onkeydown = function(event) {
            var e = event || window.event || arguments.callee.caller.arguments[0];
            showbar();
            if (e && e.keyCode == 39) {
                // right 键
                $d("video-control-range").value = parseInt($d("video-control-range").value) + 50;
            }
            if (e && e.keyCode == 37) {
                // left 键
                $d("video-control-range").value = parseInt($d("video-control-range").value) - 50;
            }
            if (e && e.keyCode == 32) {
                // space 键
                $d("danmu").onclick();
            }
            if (e && e.keyCode == 38) {
                // up 键
                $d("dm-syk-range").value = parseInt($d("dm-syk-range").value) + 1;
                $d("dm-syk").onclick();
            }
            if (e && e.keyCode == 40) {
                // down 键
                $d("dm-syk-range").value = parseInt($d("dm-syk-range").value) - 1;
                $d("dm-syk").onclick();
            }
        };
        function getvideotime(time) {
            var tm;
            var m = parseInt(time / 60);
            if (parseInt(time % 60) >= 10) {
                tm = parseInt(time % 60);
            } else {
                tm = "0" + parseInt(time % 60);
            }
            return {
                m:m,
                s:tm
            };
        }
        document.getElementById("dm-colorbar").onclick = function() {
            if (document.getElementById("color-picker").style.display == "block") {
                document.getElementById("color-picker").style.display = "none";
            } else {
                document.getElementById("color-picker").style.display = "block";
            }
        };
        //颜色选择器
        ColorPicker(document.getElementById("color-picker"), function(hex, hsv, rgb) {
            //console.log(hsv.h, hsv.s, hsv.v);         // [0-359], [0-1], [0-1]
            //console.log(rgb.r, rgb.g, rgb.b);         // [0-255], [0-255], [0-255]
            document.getElementById("dm-color").value = hex;
            document.getElementById("dm-colorbar").style.background = hex;
        });
        $d("video-full").addEventListener("click", FullScreen);
        function FullScreen() {
            if (xFullScreen()) {
                outfull();
            } else {
                startfull();
            }
        }
        $d("dm-place2").onclick = function() {
            if ($d("dm-place").value == 1) {
                $d("dm-place").value = 2;
                this.innerText = "顶部弹幕";
            } else {
                $d("dm-place").value = 1;
                this.innerText = "正向弹幕";
            }
        };
        function startfull() {
            var elem = document.getElementById("dm-video-warp");
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.mozRequestFullScreen) {
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) {
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen();
            }
            var w = $d("danmu").offsetWidth;
            var e = $d("danmu").getElementsByTagName("div");
            for (var i = e.length - 1; i >= 0; i--) {
                if (hasClass(e[i], "dm-left")) {
                    e[i].style.transform = "translateX(-" + w + "px)";
                }
            }
        }
        function outfull() {
            tplayer.full = 0;
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
        function xFullScreen() {
            var c = document.webkitIsFullScreen || document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
            return c;
        }
        function showbar() {
            $d("dm-video-y").style.opacity = "1";
            tplayer.sjc++;
            var time = setTimeout(sjc, 2e3, tplayer.sjc);
        }
        function sjc(time) {
            if (time >= tplayer.sjc) {
                $d("dm-video-y").style.opacity = "0";
            }
        }
    };
}