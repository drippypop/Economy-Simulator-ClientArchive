function GROWABLE_HEAP_I8() {
    if (wasmMemory.buffer != buffer) {
        updateGlobalBufferAndViews(wasmMemory.buffer)
    }
    return HEAP8
}

function GROWABLE_HEAP_U8() {
    if (wasmMemory.buffer != buffer) {
        updateGlobalBufferAndViews(wasmMemory.buffer)
    }
    return HEAPU8
}

function GROWABLE_HEAP_I16() {
    if (wasmMemory.buffer != buffer) {
        updateGlobalBufferAndViews(wasmMemory.buffer)
    }
    return HEAP16
}

function GROWABLE_HEAP_U16() {
    if (wasmMemory.buffer != buffer) {
        updateGlobalBufferAndViews(wasmMemory.buffer)
    }
    return HEAPU16
}

function GROWABLE_HEAP_I32() {
    if (wasmMemory.buffer != buffer) {
        updateGlobalBufferAndViews(wasmMemory.buffer)
    }
    return HEAP32
}

function GROWABLE_HEAP_U32() {
    if (wasmMemory.buffer != buffer) {
        updateGlobalBufferAndViews(wasmMemory.buffer)
    }
    return HEAPU32
}

function GROWABLE_HEAP_F32() {
    if (wasmMemory.buffer != buffer) {
        updateGlobalBufferAndViews(wasmMemory.buffer)
    }
    return HEAPF32
}

function GROWABLE_HEAP_F64() {
    if (wasmMemory.buffer != buffer) {
        updateGlobalBufferAndViews(wasmMemory.buffer)
    }
    return HEAPF64
}
var Module = typeof Module != "undefined" ? Module : {};
if (!Module.expectedDataFileDownloads) {
    Module.expectedDataFileDownloads = 0
}
Module.expectedDataFileDownloads++;
(function() {
    if (Module["ENVIRONMENT_IS_PTHREAD"]) return;
    var loadPackage = function(metadata) {
        var PACKAGE_PATH = "";
        if (typeof window === "object") {
            PACKAGE_PATH = window["encodeURIComponent"](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf("/")) + "/")
        } else if (typeof process === "undefined" && typeof location !== "undefined") {
            PACKAGE_PATH = encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf("/")) + "/")
        }
        var PACKAGE_NAME = "RobloxLinux/WebPlayer.data";
        var REMOTE_PACKAGE_BASE = "WebPlayer.data";
        if (typeof Module["locateFilePackage"] === "function" && !Module["locateFile"]) {
            Module["locateFile"] = Module["locateFilePackage"];
            err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")
        }
        var REMOTE_PACKAGE_NAME = Module["locateFile"] ? Module["locateFile"](REMOTE_PACKAGE_BASE, "") : REMOTE_PACKAGE_BASE;
        var REMOTE_PACKAGE_SIZE = metadata["remote_package_size"];

        function fetchRemotePackage(packageName, packageSize, callback, errback) {
            var xhr = new XMLHttpRequest;
            xhr.open("GET", packageName, true);
            xhr.responseType = "arraybuffer";
            xhr.onprogress = function(event) {
                var url = packageName;
                var size = packageSize;
                if (event.total) size = event.total;
                if (event.loaded) {
                    if (!xhr.addedTotal) {
                        xhr.addedTotal = true;
                        if (!Module.dataFileDownloads) Module.dataFileDownloads = {};
                        Module.dataFileDownloads[url] = {
                            loaded: event.loaded,
                            total: size
                        }
                    } else {
                        Module.dataFileDownloads[url].loaded = event.loaded
                    }
                    var total = 0;
                    var loaded = 0;
                    var num = 0;
                    for (var download in Module.dataFileDownloads) {
                        var data = Module.dataFileDownloads[download];
                        total += data.total;
                        loaded += data.loaded;
                        num++
                    }
                    total = Math.ceil(total * Module.expectedDataFileDownloads / num);
                    if (Module["setStatus"]) Module["setStatus"]("Downloading data... (" + loaded + "/" + total + ")")
                } else if (!Module.dataFileDownloads) {
                    if (Module["setStatus"]) Module["setStatus"]("Downloading data...")
                }
            };
            xhr.onerror = function(event) {
                throw new Error("NetworkError for: " + packageName)
            };
            xhr.onload = function(event) {
                if (xhr.status == 200 || xhr.status == 304 || xhr.status == 206 || xhr.status == 0 && xhr.response) {
                    var packageData = xhr.response;
                    callback(packageData)
                } else {
                    throw new Error(xhr.statusText + " : " + xhr.responseURL)
                }
            };
            xhr.send(null)
        }

        function handleError(error) {
            console.error("package error:", error)
        }
        var fetchedCallback = null;
        var fetched = Module["getPreloadedPackage"] ? Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE) : null;
        if (!fetched) fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE, function(data) {
            if (fetchedCallback) {
                fetchedCallback(data);
                fetchedCallback = null
            } else {
                fetched = data
            }
        }, handleError);

        function runWithFS() {
            function assert(check, msg) {
                if (!check) throw msg + (new Error).stack
            }
            Module["FS_createPath"]("/", "content", true, true);
            Module["FS_createPath"]("/content", "sounds", true, true);
            Module["FS_createPath"]("/content", "sky", true, true);
            Module["FS_createPath"]("/content", "fonts", true, true);
            Module["FS_createPath"]("/content", "music", true, true);
            Module["FS_createPath"]("/content", "textures", true, true);
            Module["FS_createPath"]("/content/textures", "loading", true, true);
            Module["FS_createPath"]("/content/textures", "Cursors", true, true);
            Module["FS_createPath"]("/content/textures/Cursors", "Gamepad", true, true);
            Module["FS_createPath"]("/content/textures", "ui", true, true);
            Module["FS_createPath"]("/content/textures/ui", "Vehicle", true, true);
            Module["FS_createPath"]("/content/textures/ui", "Settings", true, true);
            Module["FS_createPath"]("/content/textures/ui/Settings", "MenuBarIcons", true, true);
            Module["FS_createPath"]("/content/textures/ui/Settings", "Help", true, true);
            Module["FS_createPath"]("/content/textures/ui/Settings", "DropDown", true, true);
            Module["FS_createPath"]("/content/textures/ui/Settings", "Radial", true, true);
            Module["FS_createPath"]("/content/textures/ui/Settings", "MenuBarAssets", true, true);
            Module["FS_createPath"]("/content/textures/ui/Settings", "Slider", true, true);
            Module["FS_createPath"]("/content/textures/ui", "PlayerList", true, true);
            Module["FS_createPath"]("/content/textures/ui", "Chat", true, true);
            Module["FS_createPath"]("/content/textures/ui", "Backpack", true, true);
            Module["FS_createPath"]("/content/textures/ui", "TopBar", true, true);
            Module["FS_createPath"]("/content/textures/ui", "Scroll", true, true);
            Module["FS_createPath"]("/content/textures/ui", "Menu", true, true);
            Module["FS_createPath"]("/content/textures", "particles", true, true);
            Module["FS_createPath"]("/", "shaders", true, true);
            Module["FS_createPath"]("/shaders", "source", true, true);
            Module["FS_createPath"]("/", "PlatformContent", true, true);
            Module["FS_createPath"]("/PlatformContent", "pc", true, true);
            Module["FS_createPath"]("/PlatformContent/pc", "terrain", true, true);
            Module["FS_createPath"]("/PlatformContent/pc", "textures", true, true);
            Module["FS_createPath"]("/PlatformContent/pc/textures", "sky", true, true);

            function DataRequest(start, end, audio) {
                this.start = start;
                this.end = end;
                this.audio = audio
            }
            DataRequest.prototype = {
                requests: {},
                open: function(mode, name) {
                    this.name = name;
                    this.requests[name] = this;
                    Module["addRunDependency"]("fp " + this.name)
                },
                send: function() {},
                onload: function() {
                    var byteArray = this.byteArray.subarray(this.start, this.end);
                    this.finish(byteArray)
                },
                finish: function(byteArray) {
                    var that = this;
                    Module["FS_createDataFile"](this.name, null, byteArray, true, true, true);
                    Module["removeRunDependency"]("fp " + that.name);
                    this.requests[this.name] = null
                }
            };
            var files = metadata["files"];
            for (var i = 0; i < files.length; ++i) {
                new DataRequest(files[i]["start"], files[i]["end"], files[i]["audio"] || 0).open("GET", files[i]["filename"])
            }

            function processPackageData(arrayBuffer) {
                assert(arrayBuffer, "Loading data file failed.");
                assert(arrayBuffer instanceof ArrayBuffer, "bad input to processPackageData");
                var byteArray = new Uint8Array(arrayBuffer);
                DataRequest.prototype.byteArray = byteArray;
                var files = metadata["files"];
                for (var i = 0; i < files.length; ++i) {
                    DataRequest.prototype.requests[files[i].filename].onload()
                }
                Module["removeRunDependency"]("datafile_RobloxLinux/WebPlayer.data")
            }
            Module["addRunDependency"]("datafile_RobloxLinux/WebPlayer.data");
            if (!Module.preloadResults) Module.preloadResults = {};
            Module.preloadResults[PACKAGE_NAME] = {
                fromCache: false
            };
            if (fetched) {
                processPackageData(fetched);
                fetched = null
            } else {
                fetchedCallback = processPackageData
            }
        }
        if (Module["calledRun"]) {
            runWithFS()
        } else {
            if (!Module["preRun"]) Module["preRun"] = [];
            Module["preRun"].push(runWithFS)
        }
    };
    loadPackage({
        "files": [{
            "filename": "/content/sounds/icemetal2.mp3",
            "start": 0,
            "end": 6,
            "audio": 1
        }, {
            "filename": "/content/sounds/woodplastic.wav",
            "start": 6,
            "end": 19358,
            "audio": 1
        }, {
            "filename": "/content/sounds/woodplastic2.mp3",
            "start": 19358,
            "end": 19364,
            "audio": 1
        }, {
            "filename": "/content/sounds/action_falling.mp3",
            "start": 19364,
            "end": 19370,
            "audio": 1
        }, {
            "filename": "/content/sounds/woodplastic2.wav",
            "start": 19370,
            "end": 38724,
            "audio": 1
        }, {
            "filename": "/content/sounds/stone3.mp3",
            "start": 38724,
            "end": 38730,
            "audio": 1
        }, {
            "filename": "/content/sounds/stone2.mp3",
            "start": 38730,
            "end": 38736,
            "audio": 1
        }, {
            "filename": "/content/sounds/woodplastic.mp3",
            "start": 38736,
            "end": 38742,
            "audio": 1
        }, {
            "filename": "/content/sounds/swordslash.mp3",
            "start": 38742,
            "end": 38748,
            "audio": 1
        }, {
            "filename": "/content/sounds/grass.mp3",
            "start": 38748,
            "end": 38754,
            "audio": 1
        }, {
            "filename": "/content/sounds/plasticmetal.mp3",
            "start": 38754,
            "end": 38760,
            "audio": 1
        }, {
            "filename": "/content/sounds/uuhhh.wav",
            "start": 38760,
            "end": 52254,
            "audio": 1
        }, {
            "filename": "/content/sounds/swordslash.wav",
            "start": 52254,
            "end": 73276,
            "audio": 1
        }, {
            "filename": "/content/sounds/SWITCH3.mp3",
            "start": 73276,
            "end": 73282,
            "audio": 1
        }, {
            "filename": "/content/sounds/metal.mp3",
            "start": 73282,
            "end": 73288,
            "audio": 1
        }, {
            "filename": "/content/sounds/plasticplastic2.mp3",
            "start": 73288,
            "end": 73294,
            "audio": 1
        }, {
            "filename": "/content/sounds/metal3.wav",
            "start": 73294,
            "end": 92642,
            "audio": 1
        }, {
            "filename": "/content/sounds/metal2.wav",
            "start": 92642,
            "end": 111990,
            "audio": 1
        }, {
            "filename": "/content/sounds/Kid saying Ouch.wav",
            "start": 111990,
            "end": 132854,
            "audio": 1
        }, {
            "filename": "/content/sounds/metalgrass3.wav",
            "start": 132854,
            "end": 152206,
            "audio": 1
        }, {
            "filename": "/content/sounds/plasticice2.wav",
            "start": 152206,
            "end": 171558,
            "audio": 1
        }, {
            "filename": "/content/sounds/ice.mp3",
            "start": 171558,
            "end": 171564,
            "audio": 1
        }, {
            "filename": "/content/sounds/plasticgrass3.mp3",
            "start": 171564,
            "end": 171570,
            "audio": 1
        }, {
            "filename": "/content/sounds/button.mp3",
            "start": 171570,
            "end": 171576,
            "audio": 1
        }, {
            "filename": "/content/sounds/impact_bodyfall.mp3",
            "start": 171576,
            "end": 171582,
            "audio": 1
        }, {
            "filename": "/content/sounds/woodstone.mp3",
            "start": 171582,
            "end": 171588,
            "audio": 1
        }, {
            "filename": "/content/sounds/clickfast.wav",
            "start": 171588,
            "end": 180926,
            "audio": 1
        }, {
            "filename": "/content/sounds/impact_explosion_01.mp3",
            "start": 180926,
            "end": 180932,
            "audio": 1
        }, {
            "filename": "/content/sounds/icestone2.wav",
            "start": 180932,
            "end": 200282,
            "audio": 1
        }, {
            "filename": "/content/sounds/electronicpingshort.mp3",
            "start": 200282,
            "end": 200288,
            "audio": 1
        }, {
            "filename": "/content/sounds/plasticice3.wav",
            "start": 200288,
            "end": 219640,
            "audio": 1
        }, {
            "filename": "/content/sounds/switch.mp3",
            "start": 219640,
            "end": 219646,
            "audio": 1
        }, {
            "filename": "/content/sounds/action_swim.mp3",
            "start": 219646,
            "end": 219652,
            "audio": 1
        }, {
            "filename": "/content/sounds/hit.mp3",
            "start": 219652,
            "end": 219658,
            "audio": 1
        }, {
            "filename": "/content/sounds/swordlunge.mp3",
            "start": 219658,
            "end": 219664,
            "audio": 1
        }, {
            "filename": "/content/sounds/bfsl-minifigfoots2.wav",
            "start": 219664,
            "end": 288884,
            "audio": 1
        }, {
            "filename": "/content/sounds/woodwood3.wav",
            "start": 288884,
            "end": 308234,
            "audio": 1
        }, {
            "filename": "/content/sounds/plasticplastic.mp3",
            "start": 308234,
            "end": 308240,
            "audio": 1
        }, {
            "filename": "/content/sounds/woodice.wav",
            "start": 308240,
            "end": 327588,
            "audio": 1
        }, {
            "filename": "/content/sounds/Kid saying Ouch.mp3",
            "start": 327588,
            "end": 327594,
            "audio": 1
        }, {
            "filename": "/content/sounds/Rubber band.mp3",
            "start": 327594,
            "end": 327600,
            "audio": 1
        }, {
            "filename": "/content/sounds/action_get_up.mp3",
            "start": 327600,
            "end": 327606,
            "audio": 1
        }, {
            "filename": "/content/sounds/Kerplunk.wav",
            "start": 327606,
            "end": 339432,
            "audio": 1
        }, {
            "filename": "/content/sounds/collide.mp3",
            "start": 339432,
            "end": 339438,
            "audio": 1
        }, {
            "filename": "/content/sounds/woodgrass.mp3",
            "start": 339438,
            "end": 339444,
            "audio": 1
        }, {
            "filename": "/content/sounds/stone.wav",
            "start": 339444,
            "end": 358790,
            "audio": 1
        }, {
            "filename": "/content/sounds/action_jump.mp3",
            "start": 358790,
            "end": 358796,
            "audio": 1
        }, {
            "filename": "/content/sounds/woodmetal2.wav",
            "start": 358796,
            "end": 378148,
            "audio": 1
        }, {
            "filename": "/content/sounds/plasticgrass.wav",
            "start": 378148,
            "end": 397502,
            "audio": 1
        }, {
            "filename": "/content/sounds/plasticice2.mp3",
            "start": 397502,
            "end": 397508,
            "audio": 1
        }, {
            "filename": "/content/sounds/plasticice.mp3",
            "start": 397508,
            "end": 397514,
            "audio": 1
        }, {
            "filename": "/content/sounds/metalstone2.wav",
            "start": 397514,
            "end": 416866,
            "audio": 1
        }, {
            "filename": "/content/sounds/ice3.wav",
            "start": 416866,
            "end": 436212,
            "audio": 1
        }, {
            "filename": "/content/sounds/SWITCH3.wav",
            "start": 436212,
            "end": 448036,
            "audio": 1
        }, {
            "filename": "/content/sounds/grass3.wav",
            "start": 448036,
            "end": 467384,
            "audio": 1
        }, {
            "filename": "/content/sounds/metalstone3.mp3",
            "start": 467384,
            "end": 467390,
            "audio": 1
        }, {
            "filename": "/content/sounds/plasticice.wav",
            "start": 467390,
            "end": 486742,
            "audio": 1
        }, {
            "filename": "/content/sounds/icestone.mp3",
            "start": 486742,
            "end": 486748,
            "audio": 1
        }, {
            "filename": "/content/sounds/icestone2.mp3",
            "start": 486748,
            "end": 486754,
            "audio": 1
        }, {
            "filename": "/content/sounds/swoosh.wav",
            "start": 486754,
            "end": 500698,
            "audio": 1
        }, {
            "filename": "/content/sounds/Rubber band sling shot.mp3",
            "start": 500698,
            "end": 500704,
            "audio": 1
        }, {
            "filename": "/content/sounds/icemetal3.wav",
            "start": 500704,
            "end": 520054,
            "audio": 1
        }, {
            "filename": "/content/sounds/swordlunge.wav",
            "start": 520054,
            "end": 545256,
            "audio": 1
        }, {
            "filename": "/content/sounds/impact_explosion_01.wav",
            "start": 545256,
            "end": 608878,
            "audio": 1
        }, {
            "filename": "/content/sounds/ice2.mp3",
            "start": 608878,
            "end": 608884,
            "audio": 1
        }, {
            "filename": "/content/sounds/woodmetal.mp3",
            "start": 608884,
            "end": 608890,
            "audio": 1
        }, {
            "filename": "/content/sounds/woodgrass2.mp3",
            "start": 608890,
            "end": 608896,
            "audio": 1
        }, {
            "filename": "/content/sounds/Rubber band sling shot.wav",
            "start": 608896,
            "end": 636618,
            "audio": 1
        }, {
            "filename": "/content/sounds/icemetal2.wav",
            "start": 636618,
            "end": 655968,
            "audio": 1
        }, {
            "filename": "/content/sounds/plasticstone3.wav",
            "start": 655968,
            "end": 675322,
            "audio": 1
        }, {
            "filename": "/content/sounds/Kerplunk.mp3",
            "start": 675322,
            "end": 675328,
            "audio": 1
        }, {
            "filename": "/content/sounds/plasticgrass2.mp3",
            "start": 675328,
            "end": 675334,
            "audio": 1
        }, {
            "filename": "/content/sounds/woodmetal3.wav",
            "start": 675334,
            "end": 694686,
            "audio": 1
        }, {
            "filename": "/content/sounds/bass.wav",
            "start": 694686,
            "end": 727060,
            "audio": 1
        }, {
            "filename": "/content/sounds/grassstone2.wav",
            "start": 727060,
            "end": 746412,
            "audio": 1
        }, {
            "filename": "/content/sounds/plasticstone.wav",
            "start": 746412,
            "end": 765766,
            "audio": 1
        }, {
            "filename": "/content/sounds/woodstone3.mp3",
            "start": 765766,
            "end": 765772,
            "audio": 1
        }, {
            "filename": "/content/sounds/splat.wav",
            "start": 765772,
            "end": 782018,
            "audio": 1
        }, {
            "filename": "/content/sounds/metal.wav",
            "start": 782018,
            "end": 801364,
            "audio": 1
        }, {
            "filename": "/content/sounds/icegrass2.wav",
            "start": 801364,
            "end": 820714,
            "audio": 1
        }, {
            "filename": "/content/sounds/impact_explosion_02.wav",
            "start": 820714,
            "end": 888516,
            "audio": 1
        }, {
            "filename": "/content/sounds/electronicpingshort.wav",
            "start": 888516,
            "end": 911688,
            "audio": 1
        }, {
            "filename": "/content/sounds/button.wav",
            "start": 911688,
            "end": 930240,
            "audio": 1
        }, {
            "filename": "/content/sounds/bfsl-minifigfoots1.wav",
            "start": 930240,
            "end": 999688,
            "audio": 1
        }, {
            "filename": "/content/sounds/plasticmetal.wav",
            "start": 999688,
            "end": 1019042,
            "audio": 1
        }, {
            "filename": "/content/sounds/woodice2.mp3",
            "start": 1019042,
            "end": 1019048,
            "audio": 1
        }, {
            "filename": "/content/sounds/plasticstone3.mp3",
            "start": 1019048,
            "end": 1019054,
            "audio": 1
        }, {
            "filename": "/content/sounds/icestone3.mp3",
            "start": 1019054,
            "end": 1019060,
            "audio": 1
        }, {
            "filename": "/content/sounds/woodwood2.wav",
            "start": 1019060,
            "end": 1038410,
            "audio": 1
        }, {
            "filename": "/content/sounds/hit.wav",
            "start": 1038410,
            "end": 1065276,
            "audio": 1
        }, {
            "filename": "/content/sounds/grassstone2.mp3",
            "start": 1065276,
            "end": 1065282,
            "audio": 1
        }, {
            "filename": "/content/sounds/woodstone.wav",
            "start": 1065282,
            "end": 1084632,
            "audio": 1
        }, {
            "filename": "/content/sounds/metalgrass3.mp3",
            "start": 1084632,
            "end": 1084638,
            "audio": 1
        }, {
            "filename": "/content/sounds/plasticstone2.wav",
            "start": 1084638,
            "end": 1103992,
            "audio": 1
        }, {
            "filename": "/content/sounds/plasticmetal3.mp3",
            "start": 1103992,
            "end": 1103998,
            "audio": 1
        }, {
            "filename": "/content/sounds/woodwood3.mp3",
            "start": 1103998,
            "end": 1104004,
            "audio": 1
        }, {
            "filename": "/content/sounds/grass2.mp3",
            "start": 1104004,
            "end": 1104010,
            "audio": 1
        }, {
            "filename": "/content/sounds/plasticmetal2.mp3",
            "start": 1104010,
            "end": 1104016,
            "audio": 1
        }, {
            "filename": "/content/sounds/metalstone.wav",
            "start": 1104016,
            "end": 1123368,
            "audio": 1
        }, {
            "filename": "/content/sounds/woodgrass3.mp3",
            "start": 1123368,
            "end": 1123374,
            "audio": 1
        }, {
            "filename": "/content/sounds/plasticgrass.mp3",
            "start": 1123374,
            "end": 1123380,
            "audio": 1
        }, {
            "filename": "/content/sounds/icestone.wav",
            "start": 1123380,
            "end": 1142730,
            "audio": 1
        }, {
            "filename": "/content/sounds/impact_water.wav",
            "start": 1142730,
            "end": 1218890,
            "audio": 1
        }, {
            "filename": "/content/sounds/grassstone.mp3",
            "start": 1218890,
            "end": 1218896,
            "audio": 1
        }, {
            "filename": "/content/sounds/plasticplastic2.wav",
            "start": 1218896,
            "end": 1238252,
            "audio": 1
        }, {
            "filename": "/content/sounds/bfsl-minifigfoots1.mp3",
            "start": 1238252,
            "end": 1238258,
            "audio": 1
        }, {
            "filename": "/content/sounds/snap.wav",
            "start": 1238258,
            "end": 1251752,
            "audio": 1
        }, {
            "filename": "/content/sounds/action_footsteps_plastic.mp3",
            "start": 1251752,
            "end": 1251758,
            "audio": 1
        }, {
            "filename": "/content/sounds/woodstone2.wav",
            "start": 1251758,
            "end": 1271110,
            "audio": 1
        }, {
            "filename": "/content/sounds/unsheath.wav",
            "start": 1271110,
            "end": 1294638,
            "audio": 1
        }, {
            "filename": "/content/sounds/Rubber band.wav",
            "start": 1294638,
            "end": 1329322,
            "audio": 1
        }, {
            "filename": "/content/sounds/action_jump.wav",
            "start": 1329322,
            "end": 1340282,
            "audio": 1
        }, {
            "filename": "/content/sounds/icemetal.wav",
            "start": 1340282,
            "end": 1359632,
            "audio": 1
        }, {
            "filename": "/content/sounds/plasticmetal2.wav",
            "start": 1359632,
            "end": 1378986,
            "audio": 1
        }, {
            "filename": "/content/sounds/metal3.mp3",
            "start": 1378986,
            "end": 1378992,
            "audio": 1
        }, {
            "filename": "/content/sounds/swoosh.mp3",
            "start": 1378992,
            "end": 1378998,
            "audio": 1
        }, {
            "filename": "/content/sounds/victory.wav",
            "start": 1378998,
            "end": 1420914,
            "audio": 1
        }, {
            "filename": "/content/sounds/icegrass.mp3",
            "start": 1420914,
            "end": 1420920,
            "audio": 1
        }, {
            "filename": "/content/sounds/metalgrass2.wav",
            "start": 1420920,
            "end": 1440272,
            "audio": 1
        }, {
            "filename": "/content/sounds/woodwood.mp3",
            "start": 1440272,
            "end": 1440278,
            "audio": 1
        }, {
            "filename": "/content/sounds/woodice3.wav",
            "start": 1440278,
            "end": 1459628,
            "audio": 1
        }, {
            "filename": "/content/sounds/plasticgrass2.wav",
            "start": 1459628,
            "end": 1478982,
            "audio": 1
        }, {
            "filename": "/content/sounds/woodice2.wav",
            "start": 1478982,
            "end": 1498332,
            "audio": 1
        }, {
            "filename": "/content/sounds/collide.wav",
            "start": 1498332,
            "end": 1536906,
            "audio": 1
        }, {
            "filename": "/content/sounds/action_swim.wav",
            "start": 1536906,
            "end": 1693316,
            "audio": 1
        }, {
            "filename": "/content/sounds/metalgrass2.mp3",
            "start": 1693316,
            "end": 1693322,
            "audio": 1
        }, {
            "filename": "/content/sounds/bfsl-minifigfoots2.mp3",
            "start": 1693322,
            "end": 1693328,
            "audio": 1
        }, {
            "filename": "/content/sounds/stone3.wav",
            "start": 1693328,
            "end": 1712676,
            "audio": 1
        }, {
            "filename": "/content/sounds/plasticstone2.mp3",
            "start": 1712676,
            "end": 1712682,
            "audio": 1
        }, {
            "filename": "/content/sounds/action_jump_land.wav",
            "start": 1712682,
            "end": 1721134,
            "audio": 1
        }, {
            "filename": "/content/sounds/woodmetal.wav",
            "start": 1721134,
            "end": 1740484,
            "audio": 1
        }, {
            "filename": "/content/sounds/impact_water.mp3",
            "start": 1740484,
            "end": 1740490,
            "audio": 1
        }, {
            "filename": "/content/sounds/unsheath.mp3",
            "start": 1740490,
            "end": 1740496,
            "audio": 1
        }, {
            "filename": "/content/sounds/icestone3.wav",
            "start": 1740496,
            "end": 1759846,
            "audio": 1
        }, {
            "filename": "/content/sounds/action_falling.wav",
            "start": 1759846,
            "end": 2025760,
            "audio": 1
        }, {
            "filename": "/content/sounds/woodmetal3.mp3",
            "start": 2025760,
            "end": 2025766,
            "audio": 1
        }, {
            "filename": "/content/sounds/icemetal3.mp3",
            "start": 2025766,
            "end": 2025772,
            "audio": 1
        }, {
            "filename": "/content/sounds/flashbulb.wav",
            "start": 2025772,
            "end": 2037414,
            "audio": 1
        }, {
            "filename": "/content/sounds/clickfast.mp3",
            "start": 2037414,
            "end": 2037420,
            "audio": 1
        }, {
            "filename": "/content/sounds/woodplastic3.mp3",
            "start": 2037420,
            "end": 2037426,
            "audio": 1
        }, {
            "filename": "/content/sounds/metalstone3.wav",
            "start": 2037426,
            "end": 2056778,
            "audio": 1
        }, {
            "filename": "/content/sounds/ice3.mp3",
            "start": 2056778,
            "end": 2056784,
            "audio": 1
        }, {
            "filename": "/content/sounds/metalstone.mp3",
            "start": 2056784,
            "end": 2056790,
            "audio": 1
        }, {
            "filename": "/content/sounds/grassstone.wav",
            "start": 2056790,
            "end": 2076142,
            "audio": 1
        }, {
            "filename": "/content/sounds/woodmetal2.mp3",
            "start": 2076142,
            "end": 2076148,
            "audio": 1
        }, {
            "filename": "/content/sounds/icegrass.wav",
            "start": 2076148,
            "end": 2095498,
            "audio": 1
        }, {
            "filename": "/content/sounds/snap.mp3",
            "start": 2095498,
            "end": 2095504,
            "audio": 1
        }, {
            "filename": "/content/sounds/uuhhh.mp3",
            "start": 2095504,
            "end": 2095510,
            "audio": 1
        }, {
            "filename": "/content/sounds/action_get_up.wav",
            "start": 2095510,
            "end": 2113992,
            "audio": 1
        }, {
            "filename": "/content/sounds/metalgrass.mp3",
            "start": 2113992,
            "end": 2113998,
            "audio": 1
        }, {
            "filename": "/content/sounds/plasticplastic3.wav",
            "start": 2113998,
            "end": 2140874,
            "audio": 1
        }, {
            "filename": "/content/sounds/ice2.wav",
            "start": 2140874,
            "end": 2160220,
            "audio": 1
        }, {
            "filename": "/content/sounds/icegrass2.mp3",
            "start": 2160220,
            "end": 2160226,
            "audio": 1
        }, {
            "filename": "/content/sounds/woodgrass2.wav",
            "start": 2160226,
            "end": 2179578,
            "audio": 1
        }, {
            "filename": "/content/sounds/flashbulb.mp3",
            "start": 2179578,
            "end": 2179584,
            "audio": 1
        }, {
            "filename": "/content/sounds/splat.mp3",
            "start": 2179584,
            "end": 2179590,
            "audio": 1
        }, {
            "filename": "/content/sounds/metalgrass.wav",
            "start": 2179590,
            "end": 2198942,
            "audio": 1
        }, {
            "filename": "/content/sounds/grassstone3.mp3",
            "start": 2198942,
            "end": 2198948,
            "audio": 1
        }, {
            "filename": "/content/sounds/icegrass3.mp3",
            "start": 2198948,
            "end": 2198954,
            "audio": 1
        }, {
            "filename": "/content/sounds/impact_explosion_03.wav",
            "start": 2198954,
            "end": 2281802,
            "audio": 1
        }, {
            "filename": "/content/sounds/woodstone2.mp3",
            "start": 2281802,
            "end": 2281808,
            "audio": 1
        }, {
            "filename": "/content/sounds/plasticplastic3.mp3",
            "start": 2281808,
            "end": 2281814,
            "audio": 1
        }, {
            "filename": "/content/sounds/grass.wav",
            "start": 2281814,
            "end": 2301160,
            "audio": 1
        }, {
            "filename": "/content/sounds/icegrass3.wav",
            "start": 2301160,
            "end": 2320510,
            "audio": 1
        }, {
            "filename": "/content/sounds/woodwood.wav",
            "start": 2320510,
            "end": 2339860,
            "audio": 1
        }, {
            "filename": "/content/sounds/icemetal.mp3",
            "start": 2339860,
            "end": 2339866,
            "audio": 1
        }, {
            "filename": "/content/sounds/metal2.mp3",
            "start": 2339866,
            "end": 2339872,
            "audio": 1
        }, {
            "filename": "/content/sounds/grass2.wav",
            "start": 2339872,
            "end": 2359220,
            "audio": 1
        }, {
            "filename": "/content/sounds/plasticplastic.wav",
            "start": 2359220,
            "end": 2378576,
            "audio": 1
        }, {
            "filename": "/content/sounds/plasticstone.mp3",
            "start": 2378576,
            "end": 2378582,
            "audio": 1
        }, {
            "filename": "/content/sounds/woodwood2.mp3",
            "start": 2378582,
            "end": 2378588,
            "audio": 1
        }, {
            "filename": "/content/sounds/ice.wav",
            "start": 2378588,
            "end": 2397932,
            "audio": 1
        }, {
            "filename": "/content/sounds/woodice.mp3",
            "start": 2397932,
            "end": 2397938,
            "audio": 1
        }, {
            "filename": "/content/sounds/grassstone3.wav",
            "start": 2397938,
            "end": 2417290,
            "audio": 1
        }, {
            "filename": "/content/sounds/woodice3.mp3",
            "start": 2417290,
            "end": 2417296,
            "audio": 1
        }, {
            "filename": "/content/sounds/woodstone3.wav",
            "start": 2417296,
            "end": 2436648,
            "audio": 1
        }, {
            "filename": "/content/sounds/action_footsteps_plastic.wav",
            "start": 2436648,
            "end": 2516152,
            "audio": 1
        }, {
            "filename": "/content/sounds/impact_explosion_02.mp3",
            "start": 2516152,
            "end": 2516158,
            "audio": 1
        }, {
            "filename": "/content/sounds/plasticice3.mp3",
            "start": 2516158,
            "end": 2516164,
            "audio": 1
        }, {
            "filename": "/content/sounds/bass.mp3",
            "start": 2516164,
            "end": 2516170,
            "audio": 1
        }, {
            "filename": "/content/sounds/victory.mp3",
            "start": 2516170,
            "end": 2516176,
            "audio": 1
        }, {
            "filename": "/content/sounds/stone.mp3",
            "start": 2516176,
            "end": 2516182,
            "audio": 1
        }, {
            "filename": "/content/sounds/impact_explosion_03.mp3",
            "start": 2516182,
            "end": 2516188,
            "audio": 1
        }, {
            "filename": "/content/sounds/action_jump_land.mp3",
            "start": 2516188,
            "end": 2516194,
            "audio": 1
        }, {
            "filename": "/content/sounds/stone2.wav",
            "start": 2516194,
            "end": 2535542,
            "audio": 1
        }, {
            "filename": "/content/sounds/woodplastic3.wav",
            "start": 2535542,
            "end": 2554896,
            "audio": 1
        }, {
            "filename": "/content/sounds/plasticmetal3.wav",
            "start": 2554896,
            "end": 2574250,
            "audio": 1
        }, {
            "filename": "/content/sounds/woodgrass.wav",
            "start": 2574250,
            "end": 2593600,
            "audio": 1
        }, {
            "filename": "/content/sounds/switch.wav",
            "start": 2593600,
            "end": 2601244,
            "audio": 1
        }, {
            "filename": "/content/sounds/woodgrass3.wav",
            "start": 2601244,
            "end": 2620596,
            "audio": 1
        }, {
            "filename": "/content/sounds/impact_bodyfall.wav",
            "start": 2620596,
            "end": 2639078,
            "audio": 1
        }, {
            "filename": "/content/sounds/grass3.mp3",
            "start": 2639078,
            "end": 2639084,
            "audio": 1
        }, {
            "filename": "/content/sounds/metalstone2.mp3",
            "start": 2639084,
            "end": 2639090,
            "audio": 1
        }, {
            "filename": "/content/sounds/plasticgrass3.wav",
            "start": 2639090,
            "end": 2658444,
            "audio": 1
        }, {
            "filename": "/content/sky/null_plainsky512_rt.jpg",
            "start": 2658444,
            "end": 2708645
        }, {
            "filename": "/content/sky/lensflare.jpg",
            "start": 2708645,
            "end": 2717082
        }, {
            "filename": "/content/sky/null_plainsky512_bk.jpg",
            "start": 2717082,
            "end": 2766359
        }, {
            "filename": "/content/sky/sun-rays.jpg",
            "start": 2766359,
            "end": 2770938
        }, {
            "filename": "/content/sky/moon.jpg",
            "start": 2770938,
            "end": 2778332
        }, {
            "filename": "/content/sky/sun.jpg",
            "start": 2778332,
            "end": 2793105
        }, {
            "filename": "/content/sky/null_plainsky512_ft.jpg",
            "start": 2793105,
            "end": 2840796
        }, {
            "filename": "/content/sky/null_plainsky512_up.jpg",
            "start": 2840796,
            "end": 2876308
        }, {
            "filename": "/content/sky/null_plainsky512_lf.jpg",
            "start": 2876308,
            "end": 2919965
        }, {
            "filename": "/content/sky/null_plainsky512_dn.jpg",
            "start": 2919965,
            "end": 2953633
        }, {
            "filename": "/content/sky/skyspheremap.jpg",
            "start": 2953633,
            "end": 2964113
        }, {
            "filename": "/content/sky/moon-alpha.jpg",
            "start": 2964113,
            "end": 2969033
        }, {
            "filename": "/content/fonts/leftarm.mesh",
            "start": 2969033,
            "end": 2971098
        }, {
            "filename": "/content/fonts/CompositExtraSlot2.mesh",
            "start": 2971098,
            "end": 2971915
        }, {
            "filename": "/content/fonts/CompositRightArmBase.mesh",
            "start": 2971915,
            "end": 3000500
        }, {
            "filename": "/content/fonts/headN.mesh",
            "start": 3000500,
            "end": 3030009
        }, {
            "filename": "/content/fonts/headM.mesh",
            "start": 3030009,
            "end": 3033250
        }, {
            "filename": "/content/fonts/humanoidAnimateLocalKeyframe.rbxm",
            "start": 3033250,
            "end": 3055847
        }, {
            "filename": "/content/fonts/arialbd.ttf",
            "start": 3055847,
            "end": 3806063
        }, {
            "filename": "/content/fonts/CompositExtraSlot4.mesh",
            "start": 3806063,
            "end": 3806880
        }, {
            "filename": "/content/fonts/characterR15.rbxm",
            "start": 3806880,
            "end": 3896483
        }, {
            "filename": "/content/fonts/headC.mesh",
            "start": 3896483,
            "end": 3915444
        }, {
            "filename": "/content/fonts/head.mesh",
            "start": 3915444,
            "end": 3944233
        }, {
            "filename": "/content/fonts/CompositFullAtlasOverlayTexture.mesh",
            "start": 3944233,
            "end": 3944426
        }, {
            "filename": "/content/fonts/headO.mesh",
            "start": 3944426,
            "end": 3963531
        }, {
            "filename": "/content/fonts/character3.rbxm",
            "start": 3963531,
            "end": 3982498
        }, {
            "filename": "/content/fonts/CompositShirtTemplate.mesh",
            "start": 3982498,
            "end": 4025699
        }, {
            "filename": "/content/fonts/characterCameraScript.rbxmx",
            "start": 4025699,
            "end": 4158354
        }, {
            "filename": "/content/fonts/comics.fnt",
            "start": 4158354,
            "end": 4173602
        }, {
            "filename": "/content/fonts/SourceSansPro-Regular.ttf",
            "start": 4173602,
            "end": 4467562
        }, {
            "filename": "/content/fonts/CompositFullAtlasBaseTexture.mesh",
            "start": 4467562,
            "end": 4467755
        }, {
            "filename": "/content/fonts/OLD_humanoidAnimateR15.rbxm",
            "start": 4467755,
            "end": 4473604
        }, {
            "filename": "/content/fonts/diogenes.fnt",
            "start": 4473604,
            "end": 4476534
        }, {
            "filename": "/content/fonts/humanoidAnimate.rbxm",
            "start": 4476534,
            "end": 4483787
        }, {
            "filename": "/content/fonts/CompositPantsTemplate.mesh",
            "start": 4483787,
            "end": 4526988
        }, {
            "filename": "/content/fonts/characterR15_OLD.rbxm",
            "start": 4526988,
            "end": 4532539
        }, {
            "filename": "/content/fonts/headD.mesh",
            "start": 4532539,
            "end": 4562048
        }, {
            "filename": "/content/fonts/SourceSansPro-Bold.ttf",
            "start": 4562048,
            "end": 4853632
        }, {
            "filename": "/content/fonts/CompositTorsoBase.mesh",
            "start": 4853632,
            "end": 4882553
        }, {
            "filename": "/content/fonts/humanoidSoundNew.rbxm",
            "start": 4882553,
            "end": 4886898
        }, {
            "filename": "/content/fonts/humanoidAnimateLocalKeyframe2.rbxm",
            "start": 4886898,
            "end": 4906796
        }, {
            "filename": "/content/fonts/headA.mesh",
            "start": 4906796,
            "end": 4920357
        }, {
            "filename": "/content/fonts/Rocket.rbxm",
            "start": 4920357,
            "end": 4924857
        }, {
            "filename": "/content/fonts/headH.mesh",
            "start": 4924857,
            "end": 4953646
        }, {
            "filename": "/content/fonts/arial.ttf",
            "start": 4953646,
            "end": 5727498
        }, {
            "filename": "/content/fonts/CompositExtraSlot3.mesh",
            "start": 5727498,
            "end": 5728315
        }, {
            "filename": "/content/fonts/humanoidExtra.rbxm",
            "start": 5728315,
            "end": 5730961
        }, {
            "filename": "/content/fonts/character.rbxm",
            "start": 5730961,
            "end": 5747619
        }, {
            "filename": "/content/fonts/humanoidSound2.rbxm",
            "start": 5747619,
            "end": 5749419
        }, {
            "filename": "/content/fonts/torso.mesh",
            "start": 5749419,
            "end": 5751484
        }, {
            "filename": "/content/fonts/CompositTShirt.mesh",
            "start": 5751484,
            "end": 5751677
        }, {
            "filename": "/content/fonts/humanoidSound.rbxm",
            "start": 5751677,
            "end": 5753993
        }, {
            "filename": "/content/fonts/headP.mesh",
            "start": 5753993,
            "end": 5783502
        }, {
            "filename": "/content/fonts/headB.mesh",
            "start": 5783502,
            "end": 5784535
        }, {
            "filename": "/content/fonts/SourceSansPro-It.ttf",
            "start": 5784535,
            "end": 5888155
        }, {
            "filename": "/content/fonts/CompositExtraSlot0.mesh",
            "start": 5888155,
            "end": 5888972
        }, {
            "filename": "/content/fonts/headJ.mesh",
            "start": 5888972,
            "end": 5891637
        }, {
            "filename": "/content/fonts/headG.mesh",
            "start": 5891637,
            "end": 5913226
        }, {
            "filename": "/content/fonts/humanoidAnimateR15.rbxm",
            "start": 5913226,
            "end": 5933160
        }, {
            "filename": "/content/fonts/SourceSansPro-Light.ttf",
            "start": 5933160,
            "end": 6226464
        }, {
            "filename": "/content/fonts/characterControlScript.rbxmx",
            "start": 6226464,
            "end": 6297094
        }, {
            "filename": "/content/fonts/LoadingScript.lua",
            "start": 6297094,
            "end": 6321923
        }, {
            "filename": "/content/fonts/gamecontrollerdb.txt",
            "start": 6321923,
            "end": 6345989
        }, {
            "filename": "/content/fonts/CompositLeftArmBase.mesh",
            "start": 6345989,
            "end": 6374910
        }, {
            "filename": "/content/fonts/CompositLeftLegBase.mesh",
            "start": 6374910,
            "end": 6403831
        }, {
            "filename": "/content/fonts/headK.mesh",
            "start": 6403831,
            "end": 6432620
        }, {
            "filename": "/content/fonts/CompositExtraSlot1.mesh",
            "start": 6432620,
            "end": 6433437
        }, {
            "filename": "/content/fonts/humanoidSoundNewLocal.rbxmx",
            "start": 6433437,
            "end": 6442272
        }, {
            "filename": "/content/fonts/rightleg.mesh",
            "start": 6442272,
            "end": 6444337
        }, {
            "filename": "/content/fonts/headF.mesh",
            "start": 6444337,
            "end": 6453938
        }, {
            "filename": "/content/fonts/safechat.xml",
            "start": 6453938,
            "end": 6479430
        }, {
            "filename": "/content/fonts/humanoidStatic.rbxm",
            "start": 6479430,
            "end": 6480045
        }, {
            "filename": "/content/fonts/SlingshotPellet.rbxm",
            "start": 6480045,
            "end": 6483475
        }, {
            "filename": "/content/fonts/leftleg.mesh",
            "start": 6483475,
            "end": 6485540
        }, {
            "filename": "/content/fonts/CompositRightLegBase.mesh",
            "start": 6485540,
            "end": 6514125
        }, {
            "filename": "/content/fonts/headL.mesh",
            "start": 6514125,
            "end": 6528154
        }, {
            "filename": "/content/fonts/headE.mesh",
            "start": 6528154,
            "end": 6552659
        }, {
            "filename": "/content/fonts/headI.mesh",
            "start": 6552659,
            "end": 6555540
        }, {
            "filename": "/content/fonts/humanoidAnimateLocal.rbxm",
            "start": 6555540,
            "end": 6563947
        }, {
            "filename": "/content/fonts/rightarm.mesh",
            "start": 6563947,
            "end": 6566012
        }, {
            "filename": "/content/music/ufofly.wav",
            "start": 6566012,
            "end": 6600454,
            "audio": 1
        }, {
            "filename": "/content/music/bass.wav",
            "start": 6600454,
            "end": 6606834,
            "audio": 1
        }, {
            "filename": "/content/textures/UnAnchorCursor.png",
            "start": 6606834,
            "end": 6608670
        }, {
            "filename": "/content/textures/Roblox-loading-glow.png",
            "start": 6608670,
            "end": 6614582
        }, {
            "filename": "/content/textures/chatBubble_white_bkg.png",
            "start": 6614582,
            "end": 6618886
        }, {
            "filename": "/content/textures/FlagCursor.png",
            "start": 6618886,
            "end": 6619514
        }, {
            "filename": "/content/textures/chatBubble_bot_notify_bang.png",
            "start": 6619514,
            "end": 6620619
        }, {
            "filename": "/content/textures/ArrowCursorDecalDrag.png",
            "start": 6620619,
            "end": 6620902
        }, {
            "filename": "/content/textures/WhiteCircle.png",
            "start": 6620902,
            "end": 6627415
        }, {
            "filename": "/content/textures/WeldCursor.png",
            "start": 6627415,
            "end": 6627937
        }, {
            "filename": "/content/textures/LockCursor.png",
            "start": 6627937,
            "end": 6628725
        }, {
            "filename": "/content/textures/advancedMoveResize.png",
            "start": 6628725,
            "end": 6631767
        }, {
            "filename": "/content/textures/GunCursor.png",
            "start": 6631767,
            "end": 6632714
        }, {
            "filename": "/content/textures/Roblox-loading.png",
            "start": 6632714,
            "end": 6659842
        }, {
            "filename": "/content/textures/chatBubble_bot_notify_money.png",
            "start": 6659842,
            "end": 6661342
        }, {
            "filename": "/content/textures/GunWaitCursor.png",
            "start": 6661342,
            "end": 6663277
        }, {
            "filename": "/content/textures/SpawnCursor.png",
            "start": 6663277,
            "end": 6663932
        }, {
            "filename": "/content/textures/spark.png",
            "start": 6663932,
            "end": 6667509
        }, {
            "filename": "/content/textures/chatBubble_botRed_bkg.png",
            "start": 6667509,
            "end": 6670152
        }, {
            "filename": "/content/textures/water_Subsurface.dds",
            "start": 6670152,
            "end": 6692124
        }, {
            "filename": "/content/textures/chatBubble_botRed_notify_bkg.png",
            "start": 6692124,
            "end": 6695344
        }, {
            "filename": "/content/textures/chatBubble_botGreen_bkg.png",
            "start": 6695344,
            "end": 6697535
        }, {
            "filename": "/content/textures/Roblox-loading@2x.png",
            "start": 6697535,
            "end": 6760636
        }, {
            "filename": "/content/textures/blackBkg_round.png",
            "start": 6760636,
            "end": 6761079
        }, {
            "filename": "/content/textures/transformNinetyDegrees.png",
            "start": 6761079,
            "end": 6766595
        }, {
            "filename": "/content/textures/transformTwentyTwoDegrees.png",
            "start": 6766595,
            "end": 6770663
        }, {
            "filename": "/content/textures/chatBubble_botRed_tailRight.png",
            "start": 6770663,
            "end": 6774291
        }, {
            "filename": "/content/textures/Exit_dn.png",
            "start": 6774291,
            "end": 6777372
        }, {
            "filename": "/content/textures/AnchorCursor.png",
            "start": 6777372,
            "end": 6778631
        }, {
            "filename": "/content/textures/glow.png",
            "start": 6778631,
            "end": 6835236
        }, {
            "filename": "/content/textures/advancedMove_keysOnly.png",
            "start": 6835236,
            "end": 6839060
        }, {
            "filename": "/content/textures/blackBkg_square.png",
            "start": 6839060,
            "end": 6839214
        }, {
            "filename": "/content/textures/chatBubble_bot_notifyGray_dotDotDot.png",
            "start": 6839214,
            "end": 6842132
        }, {
            "filename": "/content/textures/ArrowFarCursor.png",
            "start": 6842132,
            "end": 6842419
        }, {
            "filename": "/content/textures/transformFiveDegrees.png",
            "start": 6842419,
            "end": 6847482
        }, {
            "filename": "/content/textures/chatBubble_white_notify_bkg.png",
            "start": 6847482,
            "end": 6851543
        }, {
            "filename": "/content/textures/chatBubble_botBlue_tailRight.png",
            "start": 6851543,
            "end": 6855824
        }, {
            "filename": "/content/textures/Roblox.bmp",
            "start": 6855824,
            "end": 6868168
        }, {
            "filename": "/content/textures/BWGradient.png",
            "start": 6868168,
            "end": 6918015
        }, {
            "filename": "/content/textures/HammerDownCursor.png",
            "start": 6918015,
            "end": 6922016
        }, {
            "filename": "/content/textures/FlatCursor.png",
            "start": 6922016,
            "end": 6922611
        }, {
            "filename": "/content/textures/chatBubble_botBlue_bkg.png",
            "start": 6922611,
            "end": 6925387
        }, {
            "filename": "/content/textures/advancedMove_joint.png",
            "start": 6925387,
            "end": 6929921
        }, {
            "filename": "/content/textures/Clone.png",
            "start": 6929921,
            "end": 6936190
        }, {
            "filename": "/content/textures/Exit_ovr.png",
            "start": 6936190,
            "end": 6939271
        }, {
            "filename": "/content/textures/advCursor-default.png",
            "start": 6939271,
            "end": 6940447
        }, {
            "filename": "/content/textures/Smoke.png",
            "start": 6940447,
            "end": 6996198
        }, {
            "filename": "/content/textures/chatBubble_bot_notify_question.png",
            "start": 6996198,
            "end": 6997468
        }, {
            "filename": "/content/textures/water_Wave.dds",
            "start": 6997468,
            "end": 7019440
        }, {
            "filename": "/content/textures/chatBubble_botBlue_notify_bkg.png",
            "start": 7019440,
            "end": 7023544
        }, {
            "filename": "/content/textures/advClosed-hand-no-weld.png",
            "start": 7023544,
            "end": 7024779
        }, {
            "filename": "/content/textures/DialogHelp.png",
            "start": 7024779,
            "end": 7025669
        }, {
            "filename": "/content/textures/CloneDownCursor.png",
            "start": 7025669,
            "end": 7030424
        }, {
            "filename": "/content/textures/sparkle.png",
            "start": 7030424,
            "end": 7034691
        }, {
            "filename": "/content/textures/RustGradient.png",
            "start": 7034691,
            "end": 7065481
        }, {
            "filename": "/content/textures/advCursor-white.png",
            "start": 7065481,
            "end": 7066643
        }, {
            "filename": "/content/textures/chatBubble_botGreen_tail.png",
            "start": 7066643,
            "end": 7071466
        }, {
            "filename": "/content/textures/FillCursor.png",
            "start": 7071466,
            "end": 7071899
        }, {
            "filename": "/content/textures/shadowmask.png",
            "start": 7071899,
            "end": 7075484
        }, {
            "filename": "/content/textures/script.png",
            "start": 7075484,
            "end": 7076232
        }, {
            "filename": "/content/textures/lua.png",
            "start": 7076232,
            "end": 7140810
        }, {
            "filename": "/content/textures/BackgroundImage.png",
            "start": 7140810,
            "end": 7143806
        }, {
            "filename": "/content/textures/SurfacesDefault.png",
            "start": 7143806,
            "end": 7143972
        }, {
            "filename": "/content/textures/CloneOverCursor.png",
            "start": 7143972,
            "end": 7147188
        }, {
            "filename": "/content/textures/DragCursor.png",
            "start": 7147188,
            "end": 7149251
        }, {
            "filename": "/content/textures/HammerCursor.png",
            "start": 7149251,
            "end": 7151694
        }, {
            "filename": "/content/textures/advClosed-hand.png",
            "start": 7151694,
            "end": 7152875
        }, {
            "filename": "/content/textures/DropperCursor.png",
            "start": 7152875,
            "end": 7153228
        }, {
            "filename": "/content/textures/CloneCursor.png",
            "start": 7153228,
            "end": 7156412
        }, {
            "filename": "/content/textures/transformOneDegree.png",
            "start": 7156412,
            "end": 7161165
        }, {
            "filename": "/content/textures/roblox-logo.png",
            "start": 7161165,
            "end": 7328647
        }, {
            "filename": "/content/textures/dirt.jpg",
            "start": 7328647,
            "end": 7502133
        }, {
            "filename": "/content/textures/HingeCursor.png",
            "start": 7502133,
            "end": 7502760
        }, {
            "filename": "/content/textures/fire_0.png",
            "start": 7502760,
            "end": 7528296
        }, {
            "filename": "/content/textures/MouseLockedCursor.png",
            "start": 7528296,
            "end": 7530626
        }, {
            "filename": "/content/textures/rotationArrow.png",
            "start": 7530626,
            "end": 7534695
        }, {
            "filename": "/content/textures/explosion.png",
            "start": 7534695,
            "end": 7547464
        }, {
            "filename": "/content/textures/Blank.png",
            "start": 7547464,
            "end": 7547651
        }, {
            "filename": "/content/textures/UnlockCursor.png",
            "start": 7547651,
            "end": 7548449
        }, {
            "filename": "/content/textures/advCursor-openedHand.png",
            "start": 7548449,
            "end": 7549686
        }, {
            "filename": "/content/textures/chatBubble_white_tail.png",
            "start": 7549686,
            "end": 7551265
        }, {
            "filename": "/content/textures/DialogQuest.png",
            "start": 7551265,
            "end": 7551824
        }, {
            "filename": "/content/textures/GrabRotateCursor.png",
            "start": 7551824,
            "end": 7554717
        }, {
            "filename": "/content/textures/chatBubble_botBlue_tail.png",
            "start": 7554717,
            "end": 7561114
        }, {
            "filename": "/content/textures/chatBubble_botGreen_notify_bkg.png",
            "start": 7561114,
            "end": 7564535
        }, {
            "filename": "/content/textures/chatBubble_botRed_tail.png",
            "start": 7564535,
            "end": 7568401
        }, {
            "filename": "/content/textures/chatBubble_botGreen_tailRight.png",
            "start": 7568401,
            "end": 7571982
        }, {
            "filename": "/content/textures/gradient.png",
            "start": 7571982,
            "end": 7775935
        }, {
            "filename": "/content/textures/ResizeCursor.png",
            "start": 7775935,
            "end": 7776487
        }, {
            "filename": "/content/textures/advancedMove.png",
            "start": 7776487,
            "end": 7779271
        }, {
            "filename": "/content/textures/advClosed-hand-weld.png",
            "start": 7779271,
            "end": 7780572
        }, {
            "filename": "/content/textures/chatBubble_bot_notify_dotDotDot.png",
            "start": 7780572,
            "end": 7781605
        }, {
            "filename": "/content/textures/wrench.png",
            "start": 7781605,
            "end": 7782215
        }, {
            "filename": "/content/textures/MotorCursor.png",
            "start": 7782215,
            "end": 7782875
        }, {
            "filename": "/content/textures/Roblox-loading-glow@2x.png",
            "start": 7782875,
            "end": 7796076
        }, {
            "filename": "/content/textures/DialogShop.png",
            "start": 7796076,
            "end": 7797275
        }, {
            "filename": "/content/textures/ArrowCursor.png",
            "start": 7797275,
            "end": 7797558
        }, {
            "filename": "/content/textures/SpawnLocation.png",
            "start": 7797558,
            "end": 7800230
        }, {
            "filename": "/content/textures/Exit.png",
            "start": 7800230,
            "end": 7803349
        }, {
            "filename": "/content/textures/HammerOverCursor.png",
            "start": 7803349,
            "end": 7806217
        }, {
            "filename": "/content/textures/advancedMove_noJoint.png",
            "start": 7806217,
            "end": 7811128
        }, {
            "filename": "/content/textures/GrabCursor.png",
            "start": 7811128,
            "end": 7813405
        }, {
            "filename": "/content/textures/face.png",
            "start": 7813405,
            "end": 7814454
        }, {
            "filename": "/content/textures/Grass_Texture.jpg",
            "start": 7814454,
            "end": 8055273
        }, {
            "filename": "/content/textures/loading/cancelButton.png",
            "start": 8055273,
            "end": 8058601
        }, {
            "filename": "/content/textures/loading/robloxlogo.png",
            "start": 8058601,
            "end": 8081976
        }, {
            "filename": "/content/textures/loading/darkLoadingTexture.png",
            "start": 8081976,
            "end": 8145081
        }, {
            "filename": "/content/textures/loading/loadingvignette.png",
            "start": 8145081,
            "end": 8165789
        }, {
            "filename": "/content/textures/loading/loadingTexture.png",
            "start": 8165789,
            "end": 8249663
        }, {
            "filename": "/content/textures/loading/loadingCircle.png",
            "start": 8249663,
            "end": 8262958
        }, {
            "filename": "/content/textures/Cursors/Gamepad/Pointer@2x.png",
            "start": 8262958,
            "end": 8264445
        }, {
            "filename": "/content/textures/Cursors/Gamepad/PointerOver.png",
            "start": 8264445,
            "end": 8265598
        }, {
            "filename": "/content/textures/Cursors/Gamepad/PointerOver@2x.png",
            "start": 8265598,
            "end": 8267559
        }, {
            "filename": "/content/textures/Cursors/Gamepad/Pointer.png",
            "start": 8267559,
            "end": 8268896
        }, {
            "filename": "/content/textures/ui/ButtonLeft.png",
            "start": 8268896,
            "end": 8284008
        }, {
            "filename": "/content/textures/ui/dropdown_arrow.png",
            "start": 8284008,
            "end": 8284326
        }, {
            "filename": "/content/textures/ui/ResetIcon.png",
            "start": 8284326,
            "end": 8286732
        }, {
            "filename": "/content/textures/ui/Slider-BKG-Right-Cap@2x.png",
            "start": 8286732,
            "end": 8287811
        }, {
            "filename": "/content/textures/ui/scroll-middle.png",
            "start": 8287811,
            "end": 8287926
        }, {
            "filename": "/content/textures/ui/Health-BKG-Left-Cap@2x.png",
            "start": 8287926,
            "end": 8289236
        }, {
            "filename": "/content/textures/ui/Slider-Fill-Right-Cap@2x.png",
            "start": 8289236,
            "end": 8290314
        }, {
            "filename": "/content/textures/ui/PlayerListFriendRequestReceivedIcon.png",
            "start": 8290314,
            "end": 8292764
        }, {
            "filename": "/content/textures/ui/PropertyButton_dn.png",
            "start": 8292764,
            "end": 8294451
        }, {
            "filename": "/content/textures/ui/RecordStop.png",
            "start": 8294451,
            "end": 8296438
        }, {
            "filename": "/content/textures/ui/DPadSheet.png",
            "start": 8296438,
            "end": 8314305
        }, {
            "filename": "/content/textures/ui/SettingsButton_ds.png",
            "start": 8314305,
            "end": 8316896
        }, {
            "filename": "/content/textures/ui/SingleButton.png",
            "start": 8316896,
            "end": 8318247
        }, {
            "filename": "/content/textures/ui/icon_placeowner.png",
            "start": 8318247,
            "end": 8319468
        }, {
            "filename": "/content/textures/ui/dialog_green.png",
            "start": 8319468,
            "end": 8319776
        }, {
            "filename": "/content/textures/ui/CloneButton.png",
            "start": 8319776,
            "end": 8321441
        }, {
            "filename": "/content/textures/ui/btn_greyTransp.png",
            "start": 8321441,
            "end": 8321869
        }, {
            "filename": "/content/textures/ui/slider_new_tab@2x.png",
            "start": 8321869,
            "end": 8324054
        }, {
            "filename": "/content/textures/ui/InsertButton_dn.png",
            "start": 8324054,
            "end": 8325724
        }, {
            "filename": "/content/textures/ui/btn_newWhiteGlow@2x.png",
            "start": 8325724,
            "end": 8341002
        }, {
            "filename": "/content/textures/ui/SingleButtonDown.png",
            "start": 8341002,
            "end": 8342334
        }, {
            "filename": "/content/textures/ui/Grass.png",
            "start": 8342334,
            "end": 8343720
        }, {
            "filename": "/content/textures/ui/icon_BC-16.png",
            "start": 8343720,
            "end": 8344835
        }, {
            "filename": "/content/textures/ui/ToolButton_dn.png",
            "start": 8344835,
            "end": 8346536
        }, {
            "filename": "/content/textures/ui/icon_mutualfollowing-16.png",
            "start": 8346536,
            "end": 8347638
        }, {
            "filename": "/content/textures/ui/PartMoveButton_dn.png",
            "start": 8347638,
            "end": 8349331
        }, {
            "filename": "/content/textures/ui/Slider-BKG-Left-Cap.png",
            "start": 8349331,
            "end": 8350313
        }, {
            "filename": "/content/textures/ui/btn_newWhite.png",
            "start": 8350313,
            "end": 8365143
        }, {
            "filename": "/content/textures/ui/TouchControlsSheet.png",
            "start": 8365143,
            "end": 8482063
        }, {
            "filename": "/content/textures/ui/Slider-Fill-Left-Cap@2x.png",
            "start": 8482063,
            "end": 8483123
        }, {
            "filename": "/content/textures/ui/scrollbar.png",
            "start": 8483123,
            "end": 8484064
        }, {
            "filename": "/content/textures/ui/btn_newBlue@2x.png",
            "start": 8484064,
            "end": 8499376
        }, {
            "filename": "/content/textures/ui/StampToolButton_dn.png",
            "start": 8499376,
            "end": 8501175
        }, {
            "filename": "/content/textures/ui/btn_newBlueGlow@2x.png",
            "start": 8501175,
            "end": 8516491
        }, {
            "filename": "/content/textures/ui/btn_newWhiteGlow.png",
            "start": 8516491,
            "end": 8531355
        }, {
            "filename": "/content/textures/ui/chatBubble_red_notify_bkg.png",
            "start": 8531355,
            "end": 8532174
        }, {
            "filename": "/content/textures/ui/btn_newWhite@2x.png",
            "start": 8532174,
            "end": 8547425
        }, {
            "filename": "/content/textures/ui/LoadingBKG.png",
            "start": 8547425,
            "end": 8553335
        }, {
            "filename": "/content/textures/ui/Universal.png",
            "start": 8553335,
            "end": 8556594
        }, {
            "filename": "/content/textures/ui/ErrorIcon.png",
            "start": 8556594,
            "end": 8559657
        }, {
            "filename": "/content/textures/ui/CloseButton.png",
            "start": 8559657,
            "end": 8561224
        }, {
            "filename": "/content/textures/ui/PropertyButton.png",
            "start": 8561224,
            "end": 8562873
        }, {
            "filename": "/content/textures/ui/Health-BKG-Center@2x.png",
            "start": 8562873,
            "end": 8563859
        }, {
            "filename": "/content/textures/ui/TinyBcIcon.png",
            "start": 8563859,
            "end": 8567211
        }, {
            "filename": "/content/textures/ui/dialog_tail.png",
            "start": 8567211,
            "end": 8567402
        }, {
            "filename": "/content/textures/ui/chatBubble_green_notify_bkg.png",
            "start": 8567402,
            "end": 8568301
        }, {
            "filename": "/content/textures/ui/mouseLock_on@2x.png",
            "start": 8568301,
            "end": 8573195
        }, {
            "filename": "/content/textures/ui/Slider-BKG-Center.png",
            "start": 8573195,
            "end": 8574127
        }, {
            "filename": "/content/textures/ui/MaterialButton.png",
            "start": 8574127,
            "end": 8576169
        }, {
            "filename": "/content/textures/ui/Slider-BKG-Right-Cap.png",
            "start": 8576169,
            "end": 8577160
        }, {
            "filename": "/content/textures/ui/CloneButton_dn.png",
            "start": 8577160,
            "end": 8578897
        }, {
            "filename": "/content/textures/ui/icon_friendrequestrecieved-16.png",
            "start": 8578897,
            "end": 8580047
        }, {
            "filename": "/content/textures/ui/RobuxIcon.png",
            "start": 8580047,
            "end": 8582211
        }, {
            "filename": "/content/textures/ui/dialog_ellipses.png",
            "start": 8582211,
            "end": 8582625
        }, {
            "filename": "/content/textures/ui/ButtonLeftDown.png",
            "start": 8582625,
            "end": 8597736
        }, {
            "filename": "/content/textures/ui/ScaleButton_dn.png",
            "start": 8597736,
            "end": 8599528
        }, {
            "filename": "/content/textures/ui/SurfaceMenu.png",
            "start": 8599528,
            "end": 8600971
        }, {
            "filename": "/content/textures/ui/btn_newGreyGlow@2x.png",
            "start": 8600971,
            "end": 8616273
        }, {
            "filename": "/content/textures/ui/scrollbuttonUp_ovr.png",
            "start": 8616273,
            "end": 8617363
        }, {
            "filename": "/content/textures/ui/icon_admin-16.png",
            "start": 8617363,
            "end": 8618952
        }, {
            "filename": "/content/textures/ui/SurfaceButton_dn.png",
            "start": 8618952,
            "end": 8620941
        }, {
            "filename": "/content/textures/ui/scroll-bottom@2x.png",
            "start": 8620941,
            "end": 8635609
        }, {
            "filename": "/content/textures/ui/Gear.png",
            "start": 8635609,
            "end": 8636847
        }, {
            "filename": "/content/textures/ui/GroupMoveButton_dn.png",
            "start": 8636847,
            "end": 8638696
        }, {
            "filename": "/content/textures/ui/Slider-Fill-Right-Cap.png",
            "start": 8638696,
            "end": 8639686
        }, {
            "filename": "/content/textures/ui/PartMoveButton.png",
            "start": 8639686,
            "end": 8641392
        }, {
            "filename": "/content/textures/ui/dialog_white.png",
            "start": 8641392,
            "end": 8641585
        }, {
            "filename": "/content/textures/ui/DiamondPlate.png",
            "start": 8641585,
            "end": 8643528
        }, {
            "filename": "/content/textures/ui/CloseButton_dn.png",
            "start": 8643528,
            "end": 8645034
        }, {
            "filename": "/content/textures/ui/Slider_dn.png",
            "start": 8645034,
            "end": 8646298
        }, {
            "filename": "/content/textures/ui/GroupMoveButton.png",
            "start": 8646298,
            "end": 8648111
        }, {
            "filename": "/content/textures/ui/chatBubble_white_notify_bkg.png",
            "start": 8648111,
            "end": 8648952
        }, {
            "filename": "/content/textures/ui/dropdown_arrow@2x.png",
            "start": 8648952,
            "end": 8649583
        }, {
            "filename": "/content/textures/ui/Plastic.png",
            "start": 8649583,
            "end": 8650756
        }, {
            "filename": "/content/textures/ui/Studs.png",
            "start": 8650756,
            "end": 8654077
        }, {
            "filename": "/content/textures/ui/Wood.png",
            "start": 8654077,
            "end": 8655052
        }, {
            "filename": "/content/textures/ui/chat_teamButton@2x.png",
            "start": 8655052,
            "end": 8655894
        }, {
            "filename": "/content/textures/ui/btn_newBlue.png",
            "start": 8655894,
            "end": 8670789
        }, {
            "filename": "/content/textures/ui/scrollbuttonUp_dn.png",
            "start": 8670789,
            "end": 8671879
        }, {
            "filename": "/content/textures/ui/Slider-Fill-Center.png",
            "start": 8671879,
            "end": 8672811
        }, {
            "filename": "/content/textures/ui/RecordDown.png",
            "start": 8672811,
            "end": 8675171
        }, {
            "filename": "/content/textures/ui/icon_friends_16.png",
            "start": 8675171,
            "end": 8676382
        }, {
            "filename": "/content/textures/ui/Slider.png",
            "start": 8676382,
            "end": 8677728
        }, {
            "filename": "/content/textures/ui/dialog_tail@2x.png",
            "start": 8677728,
            "end": 8678014
        }, {
            "filename": "/content/textures/ui/mouseLock_off@2x.png",
            "start": 8678014,
            "end": 8682233
        }, {
            "filename": "/content/textures/ui/ToolButton.png",
            "start": 8682233,
            "end": 8683934
        }, {
            "filename": "/content/textures/ui/Slider-Fill-Center@2x.png",
            "start": 8683934,
            "end": 8684866
        }, {
            "filename": "/content/textures/ui/mouseLock_off.png",
            "start": 8684866,
            "end": 8686434
        }, {
            "filename": "/content/textures/ui/Slider-Fill-Left-Cap.png",
            "start": 8686434,
            "end": 8687417
        }, {
            "filename": "/content/textures/ui/Health-BKG-Right-Cap.png",
            "start": 8687417,
            "end": 8688522
        }, {
            "filename": "/content/textures/ui/Weld.png",
            "start": 8688522,
            "end": 8691848
        }, {
            "filename": "/content/textures/ui/dialog_blue@2x.png",
            "start": 8691848,
            "end": 8692586
        }, {
            "filename": "/content/textures/ui/Hinge.png",
            "start": 8692586,
            "end": 8693453
        }, {
            "filename": "/content/textures/ui/ToolButton_ds.png",
            "start": 8693453,
            "end": 8696653
        }, {
            "filename": "/content/textures/ui/scrollbuttonDown_ovr.png",
            "start": 8696653,
            "end": 8697744
        }, {
            "filename": "/content/textures/ui/Ice.png",
            "start": 8697744,
            "end": 8699663
        }, {
            "filename": "/content/textures/ui/Backpack_Close@2x.png",
            "start": 8699663,
            "end": 8700116
        }, {
            "filename": "/content/textures/ui/ButtonRight.png",
            "start": 8700116,
            "end": 8715211
        }, {
            "filename": "/content/textures/ui/Gear_dn.png",
            "start": 8715211,
            "end": 8716414
        }, {
            "filename": "/content/textures/ui/ScaleButton.png",
            "start": 8716414,
            "end": 8718161
        }, {
            "filename": "/content/textures/ui/btn_newGrey.png",
            "start": 8718161,
            "end": 8733038
        }, {
            "filename": "/content/textures/ui/MaterialMenu.png",
            "start": 8733038,
            "end": 8734525
        }, {
            "filename": "/content/textures/ui/chatBubble_blue_notify_bkg.png",
            "start": 8734525,
            "end": 8735448
        }, {
            "filename": "/content/textures/ui/StampToolButton.png",
            "start": 8735448,
            "end": 8736942
        }, {
            "filename": "/content/textures/ui/btn_newBlueGlow.png",
            "start": 8736942,
            "end": 8751836
        }, {
            "filename": "/content/textures/ui/Glue.png",
            "start": 8751836,
            "end": 8754577
        }, {
            "filename": "/content/textures/ui/btn_newGreyGlow.png",
            "start": 8754577,
            "end": 8769455
        }, {
            "filename": "/content/textures/ui/Slider-BKG-Center@2x.png",
            "start": 8769455,
            "end": 8770387
        }, {
            "filename": "/content/textures/ui/Health-BKG-Center.png",
            "start": 8770387,
            "end": 8771346
        }, {
            "filename": "/content/textures/ui/Concrete.png",
            "start": 8771346,
            "end": 8773466
        }, {
            "filename": "/content/textures/ui/scrollbuttonUp.png",
            "start": 8773466,
            "end": 8774578
        }, {
            "filename": "/content/textures/ui/scroll-top@2x.png",
            "start": 8774578,
            "end": 8789257
        }, {
            "filename": "/content/textures/ui/TixIcon.png",
            "start": 8789257,
            "end": 8790350
        }, {
            "filename": "/content/textures/ui/CorrodedMetal.png",
            "start": 8790350,
            "end": 8792305
        }, {
            "filename": "/content/textures/ui/ButtonRightDown.png",
            "start": 8792305,
            "end": 8807413
        }, {
            "filename": "/content/textures/ui/SelectionBox.png",
            "start": 8807413,
            "end": 8811799
        }, {
            "filename": "/content/textures/ui/scroll-middle@2x.png",
            "start": 8811799,
            "end": 8811917
        }, {
            "filename": "/content/textures/ui/ErrorIconSmall.png",
            "start": 8811917,
            "end": 8815037
        }, {
            "filename": "/content/textures/ui/SurfaceButton.png",
            "start": 8815037,
            "end": 8816944
        }, {
            "filename": "/content/textures/ui/SelectionBox@2x.png",
            "start": 8816944,
            "end": 8822816
        }, {
            "filename": "/content/textures/ui/PlayerlistFriendIcon.png",
            "start": 8822816,
            "end": 8824910
        }, {
            "filename": "/content/textures/ui/expandPlayerList.png",
            "start": 8824910,
            "end": 8825119
        }, {
            "filename": "/content/textures/ui/expandPlayerList@2x.png",
            "start": 8825119,
            "end": 8825545
        }, {
            "filename": "/content/textures/ui/dialog_purpose_help.png",
            "start": 8825545,
            "end": 8826115
        }, {
            "filename": "/content/textures/ui/btn_white.png",
            "start": 8826115,
            "end": 8826481
        }, {
            "filename": "/content/textures/ui/Slider-BKG-Left-Cap@2x.png",
            "start": 8826481,
            "end": 8827562
        }, {
            "filename": "/content/textures/ui/Slider_sel.png",
            "start": 8827562,
            "end": 8828826
        }, {
            "filename": "/content/textures/ui/DeleteButton_dn.png",
            "start": 8828826,
            "end": 8830401
        }, {
            "filename": "/content/textures/ui/icon_OBC-16.png",
            "start": 8830401,
            "end": 8831561
        }, {
            "filename": "/content/textures/ui/scrollbuttonDown.png",
            "start": 8831561,
            "end": 8832679
        }, {
            "filename": "/content/textures/ui/Health-BKG-Right-Cap@2x.png",
            "start": 8832679,
            "end": 8834033
        }, {
            "filename": "/content/textures/ui/scroll-top.png",
            "start": 8834033,
            "end": 8834231
        }, {
            "filename": "/content/textures/ui/Inlets.png",
            "start": 8834231,
            "end": 8836490
        }, {
            "filename": "/content/textures/ui/btn_red.png",
            "start": 8836490,
            "end": 8836871
        }, {
            "filename": "/content/textures/ui/dialog_green@2x.png",
            "start": 8836871,
            "end": 8837581
        }, {
            "filename": "/content/textures/ui/SettingsButton_ovr.png",
            "start": 8837581,
            "end": 8840983
        }, {
            "filename": "/content/textures/ui/DeleteButton.png",
            "start": 8840983,
            "end": 8842539
        }, {
            "filename": "/content/textures/ui/SettingsButton.png",
            "start": 8842539,
            "end": 8846025
        }, {
            "filename": "/content/textures/ui/slider_new_tab.png",
            "start": 8846025,
            "end": 8846993
        }, {
            "filename": "/content/textures/ui/newBkg_square.png",
            "start": 8846993,
            "end": 8861805
        }, {
            "filename": "/content/textures/ui/icon_friendrequestsent_16.png",
            "start": 8861805,
            "end": 8862864
        }, {
            "filename": "/content/textures/ui/Smooth.png",
            "start": 8862864,
            "end": 8863051
        }, {
            "filename": "/content/textures/ui/dialog_purpose_quest.png",
            "start": 8863051,
            "end": 8863380
        }, {
            "filename": "/content/textures/ui/Health-BKG-Left-Cap.png",
            "start": 8863380,
            "end": 8864465
        }, {
            "filename": "/content/textures/ui/homeButton.png",
            "start": 8864465,
            "end": 8879148
        }, {
            "filename": "/content/textures/ui/dialog_red.png",
            "start": 8879148,
            "end": 8879470
        }, {
            "filename": "/content/textures/ui/Backpack_Open@2x.png",
            "start": 8879470,
            "end": 8879915
        }, {
            "filename": "/content/textures/ui/PaintButton_dn.png",
            "start": 8879915,
            "end": 8881528
        }, {
            "filename": "/content/textures/ui/SettingsButton_dn.png",
            "start": 8881528,
            "end": 8884930
        }, {
            "filename": "/content/textures/ui/icon_follower-16.png",
            "start": 8884930,
            "end": 8886091
        }, {
            "filename": "/content/textures/ui/scroll-bottom.png",
            "start": 8886091,
            "end": 8886273
        }, {
            "filename": "/content/textures/ui/PlayerListFriendRequestSentIcon.png",
            "start": 8886273,
            "end": 8888621
        }, {
            "filename": "/content/textures/ui/homeButton@2x.png",
            "start": 8888621,
            "end": 8889427
        }, {
            "filename": "/content/textures/ui/btn_newGrey@2x.png",
            "start": 8889427,
            "end": 8904723
        }, {
            "filename": "/content/textures/ui/btn_redGlow.png",
            "start": 8904723,
            "end": 8905246
        }, {
            "filename": "/content/textures/ui/TinyObcIcon.png",
            "start": 8905246,
            "end": 8908489
        }, {
            "filename": "/content/textures/ui/mouseLock_on.png",
            "start": 8908489,
            "end": 8910413
        }, {
            "filename": "/content/textures/ui/btn_grey.png",
            "start": 8910413,
            "end": 8910833
        }, {
            "filename": "/content/textures/ui/icon_following-16.png",
            "start": 8910833,
            "end": 8912060
        }, {
            "filename": "/content/textures/ui/TinyTbcIcon.png",
            "start": 8912060,
            "end": 8915406
        }, {
            "filename": "/content/textures/ui/dialog_blue.png",
            "start": 8915406,
            "end": 8915707
        }, {
            "filename": "/content/textures/ui/scrollbuttonDown_ds.png",
            "start": 8915707,
            "end": 8916825
        }, {
            "filename": "/content/textures/ui/Backpack_Open.png",
            "start": 8916825,
            "end": 8917069
        }, {
            "filename": "/content/textures/ui/MaterialButton_dn.png",
            "start": 8917069,
            "end": 8919164
        }, {
            "filename": "/content/textures/ui/InsertButton.png",
            "start": 8919164,
            "end": 8920802
        }, {
            "filename": "/content/textures/ui/SearchIcon.png",
            "start": 8920802,
            "end": 8922101
        }, {
            "filename": "/content/textures/ui/scrollbuttonDown_dn.png",
            "start": 8922101,
            "end": 8923192
        }, {
            "filename": "/content/textures/ui/Backpack_Close.png",
            "start": 8923192,
            "end": 8923426
        }, {
            "filename": "/content/textures/ui/newBkg_square@2x.png",
            "start": 8923426,
            "end": 8938567
        }, {
            "filename": "/content/textures/ui/dialog_purpose_shop.png",
            "start": 8938567,
            "end": 8939289
        }, {
            "filename": "/content/textures/ui/Modal.png",
            "start": 8939289,
            "end": 8955306
        }, {
            "filename": "/content/textures/ui/scrollbuttonUp_ds.png",
            "start": 8955306,
            "end": 8956416
        }, {
            "filename": "/content/textures/ui/Foil.png",
            "start": 8956416,
            "end": 8958499
        }, {
            "filename": "/content/textures/ui/dialog_white@2x.png",
            "start": 8958499,
            "end": 8958849
        }, {
            "filename": "/content/textures/ui/Motor.png",
            "start": 8958849,
            "end": 8959729
        }, {
            "filename": "/content/textures/ui/PaintButton.png",
            "start": 8959729,
            "end": 8961303
        }, {
            "filename": "/content/textures/ui/chat_teamButton.png",
            "start": 8961303,
            "end": 8961671
        }, {
            "filename": "/content/textures/ui/icon_TBC-16.png",
            "start": 8961671,
            "end": 8962838
        }, {
            "filename": "/content/textures/ui/Slate.png",
            "start": 8962838,
            "end": 8964582
        }, {
            "filename": "/content/textures/ui/dialog_red@2x.png",
            "start": 8964582,
            "end": 8965215
        }, {
            "filename": "/content/textures/ui/ToggleFullScreen_ds.png",
            "start": 8965215,
            "end": 8965681
        }, {
            "filename": "/content/textures/ui/Vehicle/SpeedBarBKG.png",
            "start": 8965681,
            "end": 8965960
        }, {
            "filename": "/content/textures/ui/Vehicle/SpeedBarEmpty.png",
            "start": 8965960,
            "end": 8966078
        }, {
            "filename": "/content/textures/ui/Vehicle/SpeedBarEmpty@2x.png",
            "start": 8966078,
            "end": 8966245
        }, {
            "filename": "/content/textures/ui/Vehicle/SpeedBar@2x.png",
            "start": 8966245,
            "end": 8966710
        }, {
            "filename": "/content/textures/ui/Vehicle/SpeedBarBKG@2x.png",
            "start": 8966710,
            "end": 8967311
        }, {
            "filename": "/content/textures/ui/Vehicle/SpeedBar.png",
            "start": 8967311,
            "end": 8967722
        }, {
            "filename": "/content/textures/ui/Settings/MenuBarIcons/GameSettingsTab.png",
            "start": 8967722,
            "end": 8970538
        }, {
            "filename": "/content/textures/ui/Settings/MenuBarIcons/RecordTab.png",
            "start": 8970538,
            "end": 8972442
        }, {
            "filename": "/content/textures/ui/Settings/MenuBarIcons/RecordTab@2x.png",
            "start": 8972442,
            "end": 8977016
        }, {
            "filename": "/content/textures/ui/Settings/MenuBarIcons/PlayersTabIcon.png",
            "start": 8977016,
            "end": 8977510
        }, {
            "filename": "/content/textures/ui/Settings/MenuBarIcons/PlayersTabIcon@2x.png",
            "start": 8977510,
            "end": 8979187
        }, {
            "filename": "/content/textures/ui/Settings/MenuBarIcons/GameSettingsTab@2x.png",
            "start": 8979187,
            "end": 8986587
        }, {
            "filename": "/content/textures/ui/Settings/MenuBarIcons/ReportAbuseTab.png",
            "start": 8986587,
            "end": 8987950
        }, {
            "filename": "/content/textures/ui/Settings/MenuBarIcons/HelpTab.png",
            "start": 8987950,
            "end": 8990616
        }, {
            "filename": "/content/textures/ui/Settings/MenuBarIcons/ReportAbuseTab@2x.png",
            "start": 8990616,
            "end": 8993259
        }, {
            "filename": "/content/textures/ui/Settings/MenuBarIcons/HomeTab.png",
            "start": 8993259,
            "end": 8994370
        }, {
            "filename": "/content/textures/ui/Settings/MenuBarIcons/HelpTab@2x.png",
            "start": 8994370,
            "end": 9001669
        }, {
            "filename": "/content/textures/ui/Settings/MenuBarIcons/HomeTab@2x.png",
            "start": 9001669,
            "end": 9004533
        }, {
            "filename": "/content/textures/ui/Settings/Help/ResetIcon.png",
            "start": 9004533,
            "end": 9005173
        }, {
            "filename": "/content/textures/ui/Settings/Help/YButtonDark.png",
            "start": 9005173,
            "end": 9010508
        }, {
            "filename": "/content/textures/ui/Settings/Help/BButtonLight@2x.png",
            "start": 9010508,
            "end": 9020835
        }, {
            "filename": "/content/textures/ui/Settings/Help/YButtonDark@2x.png",
            "start": 9020835,
            "end": 9034574
        }, {
            "filename": "/content/textures/ui/Settings/Help/BButtonLight.png",
            "start": 9034574,
            "end": 9038771
        }, {
            "filename": "/content/textures/ui/Settings/Help/XButtonDark@2x.png",
            "start": 9038771,
            "end": 9053216
        }, {
            "filename": "/content/textures/ui/Settings/Help/YButtonLight@2x.png",
            "start": 9053216,
            "end": 9062939
        }, {
            "filename": "/content/textures/ui/Settings/Help/XboxController.png",
            "start": 9062939,
            "end": 9156665
        }, {
            "filename": "/content/textures/ui/Settings/Help/GenericController.png",
            "start": 9156665,
            "end": 9188267
        }, {
            "filename": "/content/textures/ui/Settings/Help/XButtonDark.png",
            "start": 9188267,
            "end": 9193819
        }, {
            "filename": "/content/textures/ui/Settings/Help/UseToolGesture.png",
            "start": 9193819,
            "end": 9197617
        }, {
            "filename": "/content/textures/ui/Settings/Help/BButtonDark@2x.png",
            "start": 9197617,
            "end": 9211377
        }, {
            "filename": "/content/textures/ui/Settings/Help/AButtonDark@2x.png",
            "start": 9211377,
            "end": 9225275
        }, {
            "filename": "/content/textures/ui/Settings/Help/LeaveIcon.png",
            "start": 9225275,
            "end": 9225691
        }, {
            "filename": "/content/textures/ui/Settings/Help/AButtonLightSmall.png",
            "start": 9225691,
            "end": 9226936
        }, {
            "filename": "/content/textures/ui/Settings/Help/GenericController@2x.png",
            "start": 9226936,
            "end": 9306352
        }, {
            "filename": "/content/textures/ui/Settings/Help/ZoomGesture.png",
            "start": 9306352,
            "end": 9313161
        }, {
            "filename": "/content/textures/ui/Settings/Help/AButtonDark.png",
            "start": 9313161,
            "end": 9318489
        }, {
            "filename": "/content/textures/ui/Settings/Help/YButtonLight.png",
            "start": 9318489,
            "end": 9322293
        }, {
            "filename": "/content/textures/ui/Settings/Help/AButtonLight.png",
            "start": 9322293,
            "end": 9326333
        }, {
            "filename": "/content/textures/ui/Settings/Help/RotateCameraGesture.png",
            "start": 9326333,
            "end": 9334693
        }, {
            "filename": "/content/textures/ui/Settings/Help/XButtonLight.png",
            "start": 9334693,
            "end": 9338739
        }, {
            "filename": "/content/textures/ui/Settings/Help/AButtonLight@2x.png",
            "start": 9338739,
            "end": 9348804
        }, {
            "filename": "/content/textures/ui/Settings/Help/EscapeIcon.png",
            "start": 9348804,
            "end": 9349812
        }, {
            "filename": "/content/textures/ui/Settings/Help/XButtonLight@2x.png",
            "start": 9349812,
            "end": 9359860
        }, {
            "filename": "/content/textures/ui/Settings/Help/BButtonDark.png",
            "start": 9359860,
            "end": 9365129
        }, {
            "filename": "/content/textures/ui/Settings/DropDown/DropDown@2x.png",
            "start": 9365129,
            "end": 9368205
        }, {
            "filename": "/content/textures/ui/Settings/DropDown/DropDown.png",
            "start": 9368205,
            "end": 9371109
        }, {
            "filename": "/content/textures/ui/Settings/Radial/EmptyTopRight.png",
            "start": 9371109,
            "end": 9386061
        }, {
            "filename": "/content/textures/ui/Settings/Radial/Chat@2x.png",
            "start": 9386061,
            "end": 9391204
        }, {
            "filename": "/content/textures/ui/Settings/Radial/Leave@2x.png",
            "start": 9391204,
            "end": 9396678
        }, {
            "filename": "/content/textures/ui/Settings/Radial/TopSelected.png",
            "start": 9396678,
            "end": 9406844
        }, {
            "filename": "/content/textures/ui/Settings/Radial/BottomRightSelected.png",
            "start": 9406844,
            "end": 9417617
        }, {
            "filename": "/content/textures/ui/Settings/Radial/PlayerList@2x.png",
            "start": 9417617,
            "end": 9421431
        }, {
            "filename": "/content/textures/ui/Settings/Radial/Menu.png",
            "start": 9421431,
            "end": 9422545
        }, {
            "filename": "/content/textures/ui/Settings/Radial/Top.png",
            "start": 9422545,
            "end": 9433458
        }, {
            "filename": "/content/textures/ui/Settings/Radial/RadialLabel@2x.png",
            "start": 9433458,
            "end": 9437739
        }, {
            "filename": "/content/textures/ui/Settings/Radial/Alert@2x.png",
            "start": 9437739,
            "end": 9444430
        }, {
            "filename": "/content/textures/ui/Settings/Radial/EmptyBottom.png",
            "start": 9444430,
            "end": 9458483
        }, {
            "filename": "/content/textures/ui/Settings/Radial/EmptyTop.png",
            "start": 9458483,
            "end": 9472516
        }, {
            "filename": "/content/textures/ui/Settings/Radial/TopLeftSelected.png",
            "start": 9472516,
            "end": 9482846
        }, {
            "filename": "/content/textures/ui/Settings/Radial/BottomLeft.png",
            "start": 9482846,
            "end": 9494038
        }, {
            "filename": "/content/textures/ui/Settings/Radial/PlayerList.png",
            "start": 9494038,
            "end": 9495428
        }, {
            "filename": "/content/textures/ui/Settings/Radial/Leave.png",
            "start": 9495428,
            "end": 9497551
        }, {
            "filename": "/content/textures/ui/Settings/Radial/TopRight.png",
            "start": 9497551,
            "end": 9508992
        }, {
            "filename": "/content/textures/ui/Settings/Radial/EmptyTopLeft.png",
            "start": 9508992,
            "end": 9523618
        }, {
            "filename": "/content/textures/ui/Settings/Radial/TopLeft.png",
            "start": 9523618,
            "end": 9534842
        }, {
            "filename": "/content/textures/ui/Settings/Radial/EmptyBottomRight.png",
            "start": 9534842,
            "end": 9549523
        }, {
            "filename": "/content/textures/ui/Settings/Radial/Menu@2x.png",
            "start": 9549523,
            "end": 9552360
        }, {
            "filename": "/content/textures/ui/Settings/Radial/Alert.png",
            "start": 9552360,
            "end": 9554970
        }, {
            "filename": "/content/textures/ui/Settings/Radial/Bottom.png",
            "start": 9554970,
            "end": 9565851
        }, {
            "filename": "/content/textures/ui/Settings/Radial/TopRightSelected.png",
            "start": 9565851,
            "end": 9576511
        }, {
            "filename": "/content/textures/ui/Settings/Radial/RadialLabel.png",
            "start": 9576511,
            "end": 9579924
        }, {
            "filename": "/content/textures/ui/Settings/Radial/Chat.png",
            "start": 9579924,
            "end": 9582066
        }, {
            "filename": "/content/textures/ui/Settings/Radial/BottomRight.png",
            "start": 9582066,
            "end": 9593291
        }, {
            "filename": "/content/textures/ui/Settings/Radial/Backpack@2x.png",
            "start": 9593291,
            "end": 9598616
        }, {
            "filename": "/content/textures/ui/Settings/Radial/BottomLeftSelected.png",
            "start": 9598616,
            "end": 9609630
        }, {
            "filename": "/content/textures/ui/Settings/Radial/Backpack.png",
            "start": 9609630,
            "end": 9611824
        }, {
            "filename": "/content/textures/ui/Settings/Radial/BottomSelected.png",
            "start": 9611824,
            "end": 9621639
        }, {
            "filename": "/content/textures/ui/Settings/Radial/EmptyBottomLeft.png",
            "start": 9621639,
            "end": 9636214
        }, {
            "filename": "/content/textures/ui/Settings/MenuBarAssets/MenuButtonSelected.png",
            "start": 9636214,
            "end": 9636977
        }, {
            "filename": "/content/textures/ui/Settings/MenuBarAssets/MenuSelection@2x.png",
            "start": 9636977,
            "end": 9639917
        }, {
            "filename": "/content/textures/ui/Settings/MenuBarAssets/MenuButtonSelected@2x.png",
            "start": 9639917,
            "end": 9641872
        }, {
            "filename": "/content/textures/ui/Settings/MenuBarAssets/MenuSelection.png",
            "start": 9641872,
            "end": 9644732
        }, {
            "filename": "/content/textures/ui/Settings/MenuBarAssets/MenuButton@2x.png",
            "start": 9644732,
            "end": 9646685
        }, {
            "filename": "/content/textures/ui/Settings/MenuBarAssets/MenuButton.png",
            "start": 9646685,
            "end": 9647433
        }, {
            "filename": "/content/textures/ui/Settings/MenuBarAssets/MenuBackground.png",
            "start": 9647433,
            "end": 9650365
        }, {
            "filename": "/content/textures/ui/Settings/Slider/BarLeft.png",
            "start": 9650365,
            "end": 9650576
        }, {
            "filename": "/content/textures/ui/Settings/Slider/BarLeft@2x.png",
            "start": 9650576,
            "end": 9650938
        }, {
            "filename": "/content/textures/ui/Settings/Slider/Left@2x.png",
            "start": 9650938,
            "end": 9651619
        }, {
            "filename": "/content/textures/ui/Settings/Slider/SelectedBarLeft.png",
            "start": 9651619,
            "end": 9651816
        }, {
            "filename": "/content/textures/ui/Settings/Slider/Right.png",
            "start": 9651816,
            "end": 9652154
        }, {
            "filename": "/content/textures/ui/Settings/Slider/SelectedBarRight@2x.png",
            "start": 9652154,
            "end": 9652466
        }, {
            "filename": "/content/textures/ui/Settings/Slider/Right@2x.png",
            "start": 9652466,
            "end": 9653200
        }, {
            "filename": "/content/textures/ui/Settings/Slider/SelectedBarRight.png",
            "start": 9653200,
            "end": 9653388
        }, {
            "filename": "/content/textures/ui/Settings/Slider/Left.png",
            "start": 9653388,
            "end": 9653753
        }, {
            "filename": "/content/textures/ui/Settings/Slider/SelectedBarLeft@2x.png",
            "start": 9653753,
            "end": 9654115
        }, {
            "filename": "/content/textures/ui/Settings/Slider/BarRight.png",
            "start": 9654115,
            "end": 9654307
        }, {
            "filename": "/content/textures/ui/Settings/Slider/BarRight@2x.png",
            "start": 9654307,
            "end": 9654650
        }, {
            "filename": "/content/textures/ui/PlayerList/TileShadowMissingTop.png",
            "start": 9654650,
            "end": 9655146
        }, {
            "filename": "/content/textures/ui/PlayerList/CharacterImageBackground.png",
            "start": 9655146,
            "end": 9655726
        }, {
            "filename": "/content/textures/ui/PlayerList/BlockedIcon.png",
            "start": 9655726,
            "end": 9656071
        }, {
            "filename": "/content/textures/ui/Chat/Chat@2x.png",
            "start": 9656071,
            "end": 9658192
        }, {
            "filename": "/content/textures/ui/Chat/MessageCounter.png",
            "start": 9658192,
            "end": 9658789
        }, {
            "filename": "/content/textures/ui/Chat/ToggleChat.png",
            "start": 9658789,
            "end": 9659859
        }, {
            "filename": "/content/textures/ui/Chat/ChatDown.png",
            "start": 9659859,
            "end": 9660663
        }, {
            "filename": "/content/textures/ui/Chat/ChatDown@2x.png",
            "start": 9660663,
            "end": 9662499
        }, {
            "filename": "/content/textures/ui/Chat/ToggleChat@2x.png",
            "start": 9662499,
            "end": 9665184
        }, {
            "filename": "/content/textures/ui/Chat/ToggleChatDown@2x.png",
            "start": 9665184,
            "end": 9667925
        }, {
            "filename": "/content/textures/ui/Chat/ToggleChatDown.png",
            "start": 9667925,
            "end": 9669083
        }, {
            "filename": "/content/textures/ui/Chat/MessageCounter@2x.png",
            "start": 9669083,
            "end": 9670393
        }, {
            "filename": "/content/textures/ui/Chat/Chat.png",
            "start": 9670393,
            "end": 9671248
        }, {
            "filename": "/content/textures/ui/Backpack/Backpack_Down@2x.png",
            "start": 9671248,
            "end": 9673500
        }, {
            "filename": "/content/textures/ui/Backpack/Backpack_Down.png",
            "start": 9673500,
            "end": 9674480
        }, {
            "filename": "/content/textures/ui/Backpack/Backpack@2x.png",
            "start": 9674480,
            "end": 9676656
        }, {
            "filename": "/content/textures/ui/Backpack/Backpack.png",
            "start": 9676656,
            "end": 9677479
        }, {
            "filename": "/content/textures/ui/TopBar/dropshadow.png",
            "start": 9677479,
            "end": 9677642
        }, {
            "filename": "/content/textures/ui/TopBar/dropshadow@2x.png",
            "start": 9677642,
            "end": 9677844
        }, {
            "filename": "/content/textures/ui/Scroll/scroll-middle.png",
            "start": 9677844,
            "end": 9678774
        }, {
            "filename": "/content/textures/ui/Scroll/scroll-bottom@2x.png",
            "start": 9678774,
            "end": 9679863
        }, {
            "filename": "/content/textures/ui/Scroll/scroll-top@2x.png",
            "start": 9679863,
            "end": 9680971
        }, {
            "filename": "/content/textures/ui/Scroll/scroll-middle@2x.png",
            "start": 9680971,
            "end": 9681904
        }, {
            "filename": "/content/textures/ui/Scroll/scroll-top.png",
            "start": 9681904,
            "end": 9682910
        }, {
            "filename": "/content/textures/ui/Scroll/scroll-bottom.png",
            "start": 9682910,
            "end": 9683911
        }, {
            "filename": "/content/textures/ui/Menu/HamburgerDown@2x.png",
            "start": 9683911,
            "end": 9684556
        }, {
            "filename": "/content/textures/ui/Menu/HamburgerDown.png",
            "start": 9684556,
            "end": 9684818
        }, {
            "filename": "/content/textures/ui/Menu/Hamburger.png",
            "start": 9684818,
            "end": 9685065
        }, {
            "filename": "/content/textures/ui/Menu/Hamburger@2x.png",
            "start": 9685065,
            "end": 9685699
        }, {
            "filename": "/content/textures/particles/forcefield_glow_color.dds",
            "start": 9685699,
            "end": 9691347
        }, {
            "filename": "/content/textures/particles/explosion01_smoke_alpha.dds",
            "start": 9691347,
            "end": 9694235
        }, {
            "filename": "/content/textures/particles/fire_sparks_color.dds",
            "start": 9694235,
            "end": 9699883
        }, {
            "filename": "/content/textures/particles/explosion01_core_alpha.png",
            "start": 9699883,
            "end": 9728831
        }, {
            "filename": "/content/textures/particles/forcefield_vortex_color.dds",
            "start": 9728831,
            "end": 9734479
        }, {
            "filename": "/content/textures/particles/fire_main.dds",
            "start": 9734479,
            "end": 9822015
        }, {
            "filename": "/content/textures/particles/forcefield_vortex_main.dds",
            "start": 9822015,
            "end": 9844015
        }, {
            "filename": "/content/textures/particles/fire_alpha.dds",
            "start": 9844015,
            "end": 9849663
        }, {
            "filename": "/content/textures/particles/explosion01_smoke_color_new.dds",
            "start": 9849663,
            "end": 9852551
        }, {
            "filename": "/content/textures/particles/explosion01_core_main.dds",
            "start": 9852551,
            "end": 9940087
        }, {
            "filename": "/content/textures/particles/common_alpha.dds",
            "start": 9940087,
            "end": 9944311
        }, {
            "filename": "/content/textures/particles/forcefield_glow_alpha.dds",
            "start": 9944311,
            "end": 9949959
        }, {
            "filename": "/content/textures/particles/fire_sparks_main.dds",
            "start": 9949959,
            "end": 9955575
        }, {
            "filename": "/content/textures/particles/smoke_color.dds",
            "start": 9955575,
            "end": 9961223
        }, {
            "filename": "/content/textures/particles/explosion01_shockwave_main.dds",
            "start": 9961223,
            "end": 10048759
        }, {
            "filename": "/content/textures/particles/legacy_fire_alpha_color.dds",
            "start": 10048759,
            "end": 10051647
        }, {
            "filename": "/content/textures/particles/explosion01_implosion_main.dds",
            "start": 10051647,
            "end": 10139183
        }, {
            "filename": "/content/textures/particles/explosion01_implosion_color.png",
            "start": 10139183,
            "end": 10147961
        }, {
            "filename": "/content/textures/particles/explosion01_smoke_main.dds",
            "start": 10147961,
            "end": 10235497
        }, {
            "filename": "/content/textures/particles/explosion_color.dds",
            "start": 10235497,
            "end": 10241145
        }, {
            "filename": "/content/textures/particles/smoke_main.dds",
            "start": 10241145,
            "end": 10263145
        }, {
            "filename": "/content/textures/particles/explosion_alpha.dds",
            "start": 10263145,
            "end": 10266033
        }, {
            "filename": "/content/textures/particles/forcefield_glow_main.dds",
            "start": 10266033,
            "end": 10353569
        }, {
            "filename": "/content/textures/particles/sparkles_color.dds",
            "start": 10353569,
            "end": 10359217
        }, {
            "filename": "/content/textures/particles/forcefield_alpha.dds",
            "start": 10359217,
            "end": 10364865
        }, {
            "filename": "/content/textures/particles/sparkles_main.dds",
            "start": 10364865,
            "end": 10386865
        }, {
            "filename": "/content/textures/particles/fire_color.dds",
            "start": 10386865,
            "end": 10392513
        }, {
            "filename": "/shaders/shaders_glsl.pack",
            "start": 10392513,
            "end": 10725262
        }, {
            "filename": "/shaders/shaders_glsles3.pack",
            "start": 10725262,
            "end": 11101713
        }, {
            "filename": "/shaders/shaders_glsles.pack",
            "start": 11101713,
            "end": 11322395
        }, {
            "filename": "/shaders/shaders.json",
            "start": 11322395,
            "end": 11340532
        }, {
            "filename": "/shaders/shaders_glsl3.pack",
            "start": 11340532,
            "end": 11671741
        }, {
            "filename": "/shaders/source/pebble.hlsl",
            "start": 11671741,
            "end": 11672318
        }, {
            "filename": "/shaders/source/smoothcluster.hlsl",
            "start": 11672318,
            "end": 11677556
        }, {
            "filename": "/shaders/source/brick.hlsl",
            "start": 11677556,
            "end": 11678163
        }, {
            "filename": "/shaders/source/sand.hlsl",
            "start": 11678163,
            "end": 11678736
        }, {
            "filename": "/shaders/source/water.hlsl",
            "start": 11678736,
            "end": 11684344
        }, {
            "filename": "/shaders/source/diamondplate.hlsl",
            "start": 11684344,
            "end": 11684921
        }, {
            "filename": "/shaders/source/plastic.hlsl",
            "start": 11684921,
            "end": 11686151
        }, {
            "filename": "/shaders/source/common.h",
            "start": 11686151,
            "end": 11694774
        }, {
            "filename": "/shaders/source/material.hlsl",
            "start": 11694774,
            "end": 11697693
        }, {
            "filename": "/shaders/source/rust.hlsl",
            "start": 11697693,
            "end": 11698304
        }, {
            "filename": "/shaders/source/default.hlsl",
            "start": 11698304,
            "end": 11708321
        }, {
            "filename": "/shaders/source/particle.hlsl",
            "start": 11708321,
            "end": 11715127
        }, {
            "filename": "/shaders/source/shadow.hlsl",
            "start": 11715127,
            "end": 11716244
        }, {
            "filename": "/shaders/source/smoothwater.hlsl",
            "start": 11716244,
            "end": 11725290
        }, {
            "filename": "/shaders/source/woodplanks.hlsl",
            "start": 11725290,
            "end": 11725896
        }, {
            "filename": "/shaders/source/profiler.hlsl",
            "start": 11725896,
            "end": 11726695
        }, {
            "filename": "/shaders/source/grass.hlsl",
            "start": 11726695,
            "end": 11727306
        }, {
            "filename": "/shaders/source/texcomp.hlsl",
            "start": 11727306,
            "end": 11728080
        }, {
            "filename": "/shaders/source/screenspace.hlsl",
            "start": 11728080,
            "end": 11733069
        }, {
            "filename": "/shaders/source/ice.hlsl",
            "start": 11733069,
            "end": 11733685
        }, {
            "filename": "/shaders/source/marble.hlsl",
            "start": 11733685,
            "end": 11734295
        }, {
            "filename": "/shaders/source/concrete.hlsl",
            "start": 11734295,
            "end": 11734909
        }, {
            "filename": "/shaders/source/ssao.hlsl",
            "start": 11734909,
            "end": 11744438
        }, {
            "filename": "/shaders/source/megacluster.hlsl",
            "start": 11744438,
            "end": 11749700
        }, {
            "filename": "/shaders/source/globals.h",
            "start": 11749700,
            "end": 11750481
        }, {
            "filename": "/shaders/source/cobblestone.hlsl",
            "start": 11750481,
            "end": 11751015
        }, {
            "filename": "/shaders/source/ui.hlsl",
            "start": 11751015,
            "end": 11752234
        }, {
            "filename": "/shaders/source/wood.hlsl",
            "start": 11752234,
            "end": 11752811
        }, {
            "filename": "/shaders/source/smoothplastic.hlsl",
            "start": 11752811,
            "end": 11752857
        }, {
            "filename": "/shaders/source/metal.hlsl",
            "start": 11752857,
            "end": 11753438
        }, {
            "filename": "/shaders/source/granite.hlsl",
            "start": 11753438,
            "end": 11754054
        }, {
            "filename": "/shaders/source/gbuffer.hlsl",
            "start": 11754054,
            "end": 11754897
        }, {
            "filename": "/shaders/source/slate.hlsl",
            "start": 11754897,
            "end": 11755480
        }, {
            "filename": "/shaders/source/aluminum.hlsl",
            "start": 11755480,
            "end": 11756095
        }, {
            "filename": "/shaders/source/neon.hlsl",
            "start": 11756095,
            "end": 11756159
        }, {
            "filename": "/shaders/source/sky.hlsl",
            "start": 11756159,
            "end": 11757357
        }, {
            "filename": "/shaders/source/adorn.hlsl",
            "start": 11757357,
            "end": 11764298
        }, {
            "filename": "/shaders/source/fabric.hlsl",
            "start": 11764298,
            "end": 11764906
        }, {
            "filename": "/PlatformContent/pc/terrain/materials.json",
            "start": 11764906,
            "end": 11767951
        }, {
            "filename": "/PlatformContent/pc/textures/wangIndex.dds",
            "start": 11767951,
            "end": 11800847
        }, {
            "filename": "/PlatformContent/pc/textures/studs.dds",
            "start": 11800847,
            "end": 11975831
        }, {
            "filename": "/PlatformContent/pc/textures/sky/sky512_up.tex",
            "start": 11975831,
            "end": 12675023
        }, {
            "filename": "/PlatformContent/pc/textures/sky/sky512_dn.tex",
            "start": 12675023,
            "end": 13374215
        }, {
            "filename": "/PlatformContent/pc/textures/sky/sky512_bk.tex",
            "start": 13374215,
            "end": 14073407
        }, {
            "filename": "/PlatformContent/pc/textures/sky/sky512_rt.tex",
            "start": 14073407,
            "end": 14772599
        }, {
            "filename": "/PlatformContent/pc/textures/sky/sky512_ft.tex",
            "start": 14772599,
            "end": 15471791
        }, {
            "filename": "/PlatformContent/pc/textures/sky/sky512_lf.tex",
            "start": 15471791,
            "end": 16170983
        }],
        "remote_package_size": 16170983
    })
})();
var moduleOverrides = Object.assign({}, Module);
var arguments_ = [];
var thisProgram = "./this.program";
var quit_ = (status, toThrow) => {
    throw toThrow
};
var ENVIRONMENT_IS_WEB = typeof window == "object";
var ENVIRONMENT_IS_WORKER = typeof importScripts == "function";
var ENVIRONMENT_IS_NODE = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string";
var ENVIRONMENT_IS_PTHREAD = Module["ENVIRONMENT_IS_PTHREAD"] || false;
var _scriptDir = typeof document != "undefined" && document.currentScript ? document.currentScript.src : undefined;
if (ENVIRONMENT_IS_WORKER) {
    _scriptDir = self.location.href
}
var scriptDirectory = "";

function locateFile(path) {
    if (Module["locateFile"]) {
        return Module["locateFile"](path, scriptDirectory)
    }
    return scriptDirectory + path
}
var read_, readAsync, readBinary, setWindowTitle;
if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
    if (ENVIRONMENT_IS_WORKER) {
        scriptDirectory = self.location.href
    } else if (typeof document != "undefined" && document.currentScript) {
        scriptDirectory = document.currentScript.src
    }
    if (scriptDirectory.indexOf("blob:") !== 0) {
        scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1)
    } else {
        scriptDirectory = ""
    } {
        read_ = url => {
            var xhr = new XMLHttpRequest;
            xhr.open("GET", url, false);
            xhr.send(null);
            return xhr.responseText
        };
        if (ENVIRONMENT_IS_WORKER) {
            readBinary = url => {
                var xhr = new XMLHttpRequest;
                xhr.open("GET", url, false);
                xhr.responseType = "arraybuffer";
                xhr.send(null);
                return new Uint8Array(xhr.response)
            }
        }
        readAsync = (url, onload, onerror) => {
            var xhr = new XMLHttpRequest;
            xhr.open("GET", url, true);
            xhr.responseType = "arraybuffer";
            xhr.onload = () => {
                if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
                    onload(xhr.response);
                    return
                }
                onerror()
            };
            xhr.onerror = onerror;
            xhr.send(null)
        }
    }
    setWindowTitle = title => document.title = title
} else {}
var out = Module["print"] || console.log.bind(console);
var err = Module["printErr"] || console.warn.bind(console);
Object.assign(Module, moduleOverrides);
moduleOverrides = null;
if (Module["arguments"]) arguments_ = Module["arguments"];
if (Module["thisProgram"]) thisProgram = Module["thisProgram"];
if (Module["quit"]) quit_ = Module["quit"];
var tempRet0 = 0;
var setTempRet0 = value => {
    tempRet0 = value
};
var getTempRet0 = () => tempRet0;
var Atomics_load = Atomics.load;
var Atomics_store = Atomics.store;
var Atomics_compareExchange = Atomics.compareExchange;
var wasmBinary;
if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];
var noExitRuntime = Module["noExitRuntime"] || true;
if (typeof WebAssembly != "object") {
    abort("no native wasm support detected")
}
var wasmMemory;
var wasmModule;
var ABORT = false;
var EXITSTATUS;

function assert(condition, text) {
    if (!condition) {
        abort(text)
    }
}
var UTF8Decoder = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : undefined;

function UTF8ArrayToString(heapOrArray, idx, maxBytesToRead) {
    var endIdx = idx + maxBytesToRead;
    var endPtr = idx;
    while (heapOrArray[endPtr] && !(endPtr >= endIdx)) ++endPtr;
    if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
        return UTF8Decoder.decode(heapOrArray.buffer instanceof SharedArrayBuffer ? heapOrArray.slice(idx, endPtr) : heapOrArray.subarray(idx, endPtr))
    }
    var str = "";
    while (idx < endPtr) {
        var u0 = heapOrArray[idx++];
        if (!(u0 & 128)) {
            str += String.fromCharCode(u0);
            continue
        }
        var u1 = heapOrArray[idx++] & 63;
        if ((u0 & 224) == 192) {
            str += String.fromCharCode((u0 & 31) << 6 | u1);
            continue
        }
        var u2 = heapOrArray[idx++] & 63;
        if ((u0 & 240) == 224) {
            u0 = (u0 & 15) << 12 | u1 << 6 | u2
        } else {
            u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heapOrArray[idx++] & 63
        }
        if (u0 < 65536) {
            str += String.fromCharCode(u0)
        } else {
            var ch = u0 - 65536;
            str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023)
        }
    }
    return str
}

function UTF8ToString(ptr, maxBytesToRead) {
    return ptr ? UTF8ArrayToString(GROWABLE_HEAP_U8(), ptr, maxBytesToRead) : ""
}

function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
    if (!(maxBytesToWrite > 0)) return 0;
    var startIdx = outIdx;
    var endIdx = outIdx + maxBytesToWrite - 1;
    for (var i = 0; i < str.length; ++i) {
        var u = str.charCodeAt(i);
        if (u >= 55296 && u <= 57343) {
            var u1 = str.charCodeAt(++i);
            u = 65536 + ((u & 1023) << 10) | u1 & 1023
        }
        if (u <= 127) {
            if (outIdx >= endIdx) break;
            heap[outIdx++] = u
        } else if (u <= 2047) {
            if (outIdx + 1 >= endIdx) break;
            heap[outIdx++] = 192 | u >> 6;
            heap[outIdx++] = 128 | u & 63
        } else if (u <= 65535) {
            if (outIdx + 2 >= endIdx) break;
            heap[outIdx++] = 224 | u >> 12;
            heap[outIdx++] = 128 | u >> 6 & 63;
            heap[outIdx++] = 128 | u & 63
        } else {
            if (outIdx + 3 >= endIdx) break;
            heap[outIdx++] = 240 | u >> 18;
            heap[outIdx++] = 128 | u >> 12 & 63;
            heap[outIdx++] = 128 | u >> 6 & 63;
            heap[outIdx++] = 128 | u & 63
        }
    }
    heap[outIdx] = 0;
    return outIdx - startIdx
}

function stringToUTF8(str, outPtr, maxBytesToWrite) {
    return stringToUTF8Array(str, GROWABLE_HEAP_U8(), outPtr, maxBytesToWrite)
}

function lengthBytesUTF8(str) {
    var len = 0;
    for (var i = 0; i < str.length; ++i) {
        var c = str.charCodeAt(i);
        if (c <= 127) {
            len++
        } else if (c <= 2047) {
            len += 2
        } else if (c >= 55296 && c <= 57343) {
            len += 4;
            ++i
        } else {
            len += 3
        }
    }
    return len
}
var buffer, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
if (ENVIRONMENT_IS_PTHREAD) {
    buffer = Module["buffer"]
}

function updateGlobalBufferAndViews(buf) {
    buffer = buf;
    Module["HEAP8"] = HEAP8 = new Int8Array(buf);
    Module["HEAP16"] = HEAP16 = new Int16Array(buf);
    Module["HEAP32"] = HEAP32 = new Int32Array(buf);
    Module["HEAPU8"] = HEAPU8 = new Uint8Array(buf);
    Module["HEAPU16"] = HEAPU16 = new Uint16Array(buf);
    Module["HEAPU32"] = HEAPU32 = new Uint32Array(buf);
    Module["HEAPF32"] = HEAPF32 = new Float32Array(buf);
    Module["HEAPF64"] = HEAPF64 = new Float64Array(buf)
}
var INITIAL_MEMORY = Module["INITIAL_MEMORY"] || 134217728;
if (ENVIRONMENT_IS_PTHREAD) {
    wasmMemory = Module["wasmMemory"];
    buffer = Module["buffer"]
} else {
    if (Module["wasmMemory"]) {
        wasmMemory = Module["wasmMemory"]
    } else {
        wasmMemory = new WebAssembly.Memory({
            "initial": INITIAL_MEMORY / 65536,
            "maximum": 2147483648 / 65536,
            "shared": true
        });
        if (!(wasmMemory.buffer instanceof SharedArrayBuffer)) {
            err("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag");
            if (ENVIRONMENT_IS_NODE) {
                console.log("(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and also use a recent version)")
            }
            throw Error("bad memory")
        }
    }
}
if (wasmMemory) {
    buffer = wasmMemory.buffer
}
INITIAL_MEMORY = buffer.byteLength;
updateGlobalBufferAndViews(buffer);
var wasmTable;
var __ATPRERUN__ = [];
var __ATINIT__ = [];
var __ATMAIN__ = [];
var __ATEXIT__ = [];
var __ATPOSTRUN__ = [];
var runtimeInitialized = false;

function keepRuntimeAlive() {
    return noExitRuntime
}

function preRun() {
    if (Module["preRun"]) {
        if (typeof Module["preRun"] == "function") Module["preRun"] = [Module["preRun"]];
        while (Module["preRun"].length) {
            addOnPreRun(Module["preRun"].shift())
        }
    }
    callRuntimeCallbacks(__ATPRERUN__)
}

function initRuntime() {
    runtimeInitialized = true;
    if (ENVIRONMENT_IS_PTHREAD) return;
    if (!Module["noFSInit"] && !FS.init.initialized) FS.init();
    FS.ignorePermissions = false;
    TTY.init();
    callRuntimeCallbacks(__ATINIT__)
}

function preMain() {
    if (ENVIRONMENT_IS_PTHREAD) return;
    callRuntimeCallbacks(__ATMAIN__)
}

function postRun() {
    if (ENVIRONMENT_IS_PTHREAD) return;
    if (Module["postRun"]) {
        if (typeof Module["postRun"] == "function") Module["postRun"] = [Module["postRun"]];
        while (Module["postRun"].length) {
            addOnPostRun(Module["postRun"].shift())
        }
    }
    callRuntimeCallbacks(__ATPOSTRUN__)
}

function addOnPreRun(cb) {
    __ATPRERUN__.unshift(cb)
}

function addOnInit(cb) {
    __ATINIT__.unshift(cb)
}

function addOnPostRun(cb) {
    __ATPOSTRUN__.unshift(cb)
}
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null;

function getUniqueRunDependency(id) {
    return id
}

function addRunDependency(id) {
    runDependencies++;
    if (Module["monitorRunDependencies"]) {
        Module["monitorRunDependencies"](runDependencies)
    }
}

function removeRunDependency(id) {
    runDependencies--;
    if (Module["monitorRunDependencies"]) {
        Module["monitorRunDependencies"](runDependencies)
    }
    if (runDependencies == 0) {
        if (runDependencyWatcher !== null) {
            clearInterval(runDependencyWatcher);
            runDependencyWatcher = null
        }
        if (dependenciesFulfilled) {
            var callback = dependenciesFulfilled;
            dependenciesFulfilled = null;
            callback()
        }
    }
}

function abort(what) {
    if (ENVIRONMENT_IS_PTHREAD) {
        postMessage({
            "cmd": "onAbort",
            "arg": what
        })
    } else {
        if (Module["onAbort"]) {
            Module["onAbort"](what)
        }
    }
    what = "Aborted(" + what + ")";
    err(what);
    ABORT = true;
    EXITSTATUS = 1;
    what += ". Build with -sASSERTIONS for more info.";
    var e = new WebAssembly.RuntimeError(what);
    throw e
}
var dataURIPrefix = "data:application/octet-stream;base64,";

function isDataURI(filename) {
    return filename.startsWith(dataURIPrefix)
}
var wasmBinaryFile;
wasmBinaryFile = "WebPlayer.wasm";
if (!isDataURI(wasmBinaryFile)) {
    wasmBinaryFile = locateFile(wasmBinaryFile)
}

function getBinary(file) {
    try {
        if (file == wasmBinaryFile && wasmBinary) {
            return new Uint8Array(wasmBinary)
        }
        if (readBinary) {
            return readBinary(file)
        }
        throw "both async and sync fetching of the wasm failed"
    } catch (err) {
        abort(err)
    }
}

function getBinaryPromise() {
    if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
        if (typeof fetch == "function") {
            return fetch(wasmBinaryFile, {
                credentials: "same-origin"
            }).then(function(response) {
                if (!response["ok"]) {
                    throw "failed to load wasm binary file at '" + wasmBinaryFile + "'"
                }
                return response["arrayBuffer"]()
            }).catch(function() {
                return getBinary(wasmBinaryFile)
            })
        }
    }
    return Promise.resolve().then(function() {
        return getBinary(wasmBinaryFile)
    })
}

function createWasm() {
    var info = {
        "a": asmLibraryArg
    };

    function receiveInstance(instance, module) {
        var exports = instance.exports;
        Module["asm"] = exports;
        registerTLSInit(Module["asm"]["Il"]);
        wasmTable = Module["asm"]["Ol"];
        addOnInit(Module["asm"]["Al"]);
        wasmModule = module;
        if (!ENVIRONMENT_IS_PTHREAD) {
            var numWorkersToLoad = PThread.unusedWorkers.length;
            PThread.unusedWorkers.forEach(function(w) {
                PThread.loadWasmModuleToWorker(w, function() {
                    if (!--numWorkersToLoad) removeRunDependency("wasm-instantiate")
                })
            })
        }
    }
    if (!ENVIRONMENT_IS_PTHREAD) {
        addRunDependency("wasm-instantiate")
    }

    function receiveInstantiationResult(result) {
        receiveInstance(result["instance"], result["module"])
    }

    function instantiateArrayBuffer(receiver) {
        return getBinaryPromise().then(function(binary) {
            return WebAssembly.instantiate(binary, info)
        }).then(function(instance) {
            return instance
        }).then(receiver, function(reason) {
            err("failed to asynchronously prepare wasm: " + reason);
            abort(reason)
        })
    }

    function instantiateAsync() {
        if (!wasmBinary && typeof WebAssembly.instantiateStreaming == "function" && !isDataURI(wasmBinaryFile) && typeof fetch == "function") {
            return fetch(wasmBinaryFile, {
                credentials: "same-origin"
            }).then(function(response) {
                var result = WebAssembly.instantiateStreaming(response, info);
                return result.then(receiveInstantiationResult, function(reason) {
                    err("wasm streaming compile failed: " + reason);
                    err("falling back to ArrayBuffer instantiation");
                    return instantiateArrayBuffer(receiveInstantiationResult)
                })
            })
        } else {
            return instantiateArrayBuffer(receiveInstantiationResult)
        }
    }
    if (Module["instantiateWasm"]) {
        try {
            var exports = Module["instantiateWasm"](info, receiveInstance);
            return exports
        } catch (e) {
            err("Module.instantiateWasm callback failed with error: " + e);
            return false
        }
    }
    instantiateAsync();
    return {}
}
var tempDouble;
var tempI64;
var ASM_CONSTS = {
    3338356: () => {
        window.RBXModule.showKeyboard()
    },
    3338393: () => {
        window.RBXModule.hideKeyboard()
    },
    3338430: () => {
        return window.innerWidth * window.devicePixelRatio
    },
    3338486: () => {
        return window.innerHeight * window.devicePixelRatio
    },
    3338543: () => {
        return parseInt(window.localStorage.getItem("rbx_msaa"), 10) || 0
    },
    3338614: () => {
        if (typeof AudioContext !== "undefined") {
            return true
        } else if (typeof webkitAudioContext !== "undefined") {
            return true
        }
        return false
    },
    3338761: () => {
        if (typeof navigator.mediaDevices !== "undefined" && typeof navigator.mediaDevices.getUserMedia !== "undefined") {
            return true
        } else if (typeof navigator.webkitGetUserMedia !== "undefined") {
            return true
        }
        return false
    },
    3338995: $0 => {
        if (typeof Module["SDL2"] === "undefined") {
            Module["SDL2"] = {}
        }
        var SDL2 = Module["SDL2"];
        if (!$0) {
            SDL2.audio = {}
        } else {
            SDL2.capture = {}
        }
        if (!SDL2.audioContext) {
            if (typeof AudioContext !== "undefined") {
                SDL2.audioContext = new AudioContext
            } else if (typeof webkitAudioContext !== "undefined") {
                SDL2.audioContext = new webkitAudioContext
            }
            if (SDL2.audioContext) {
                autoResumeAudioContext(SDL2.audioContext)
            }
        }
        return SDL2.audioContext === undefined ? -1 : 0
    },
    3339488: () => {
        var SDL2 = Module["SDL2"];
        return SDL2.audioContext.sampleRate
    },
    3339556: ($0, $1, $2, $3) => {
        var SDL2 = Module["SDL2"];
        var have_microphone = function(stream) {
            if (SDL2.capture.silenceTimer !== undefined) {
                clearTimeout(SDL2.capture.silenceTimer);
                SDL2.capture.silenceTimer = undefined
            }
            SDL2.capture.mediaStreamNode = SDL2.audioContext.createMediaStreamSource(stream);
            SDL2.capture.scriptProcessorNode = SDL2.audioContext.createScriptProcessor($1, $0, 1);
            SDL2.capture.scriptProcessorNode.onaudioprocess = function(audioProcessingEvent) {
                if (SDL2 === undefined || SDL2.capture === undefined) {
                    return
                }
                audioProcessingEvent.outputBuffer.getChannelData(0).fill(0);
                SDL2.capture.currentCaptureBuffer = audioProcessingEvent.inputBuffer;
                dynCall("vi", $2, [$3])
            };
            SDL2.capture.mediaStreamNode.connect(SDL2.capture.scriptProcessorNode);
            SDL2.capture.scriptProcessorNode.connect(SDL2.audioContext.destination);
            SDL2.capture.stream = stream
        };
        var no_microphone = function(error) {};
        SDL2.capture.silenceBuffer = SDL2.audioContext.createBuffer($0, $1, SDL2.audioContext.sampleRate);
        SDL2.capture.silenceBuffer.getChannelData(0).fill(0);
        var silence_callback = function() {
            SDL2.capture.currentCaptureBuffer = SDL2.capture.silenceBuffer;
            dynCall("vi", $2, [$3])
        };
        SDL2.capture.silenceTimer = setTimeout(silence_callback, $1 / SDL2.audioContext.sampleRate * 1e3);
        if (navigator.mediaDevices !== undefined && navigator.mediaDevices.getUserMedia !== undefined) {
            navigator.mediaDevices.getUserMedia({
                audio: true,
                video: false
            }).then(have_microphone).catch(no_microphone)
        } else if (navigator.webkitGetUserMedia !== undefined) {
            navigator.webkitGetUserMedia({
                audio: true,
                video: false
            }, have_microphone, no_microphone)
        }
    },
    3341208: ($0, $1, $2, $3) => {
        var SDL2 = Module["SDL2"];
        SDL2.audio.scriptProcessorNode = SDL2.audioContext["createScriptProcessor"]($1, 0, $0);
        SDL2.audio.scriptProcessorNode["onaudioprocess"] = function(e) {
            if (SDL2 === undefined || SDL2.audio === undefined) {
                return
            }
            SDL2.audio.currentOutputBuffer = e["outputBuffer"];
            dynCall("vi", $2, [$3])
        };
        SDL2.audio.scriptProcessorNode["connect"](SDL2.audioContext["destination"])
    },
    3341618: ($0, $1) => {
        var SDL2 = Module["SDL2"];
        var numChannels = SDL2.capture.currentCaptureBuffer.numberOfChannels;
        for (var c = 0; c < numChannels; ++c) {
            var channelData = SDL2.capture.currentCaptureBuffer.getChannelData(c);
            if (channelData.length != $1) {
                throw "Web Audio capture buffer length mismatch! Destination size: " + channelData.length + " samples vs expected " + $1 + " samples!"
            }
            if (numChannels == 1) {
                for (var j = 0; j < $1; ++j) {
                    setValue($0 + j * 4, channelData[j], "float")
                }
            } else {
                for (var j = 0; j < $1; ++j) {
                    setValue($0 + (j * numChannels + c) * 4, channelData[j], "float")
                }
            }
        }
    },
    3342223: ($0, $1) => {
        var SDL2 = Module["SDL2"];
        var numChannels = SDL2.audio.currentOutputBuffer["numberOfChannels"];
        for (var c = 0; c < numChannels; ++c) {
            var channelData = SDL2.audio.currentOutputBuffer["getChannelData"](c);
            if (channelData.length != $1) {
                throw "Web Audio output buffer length mismatch! Destination size: " + channelData.length + " samples vs expected " + $1 + " samples!"
            }
            for (var j = 0; j < $1; ++j) {
                channelData[j] = GROWABLE_HEAP_F32()[$0 + (j * numChannels + c << 2) >> 2]
            }
        }
    },
    3342703: $0 => {
        var SDL2 = Module["SDL2"];
        if ($0) {
            if (SDL2.capture.silenceTimer !== undefined) {
                clearTimeout(SDL2.capture.silenceTimer)
            }
            if (SDL2.capture.stream !== undefined) {
                var tracks = SDL2.capture.stream.getAudioTracks();
                for (var i = 0; i < tracks.length; i++) {
                    SDL2.capture.stream.removeTrack(tracks[i])
                }
                SDL2.capture.stream = undefined
            }
            if (SDL2.capture.scriptProcessorNode !== undefined) {
                SDL2.capture.scriptProcessorNode.onaudioprocess = function(audioProcessingEvent) {};
                SDL2.capture.scriptProcessorNode.disconnect();
                SDL2.capture.scriptProcessorNode = undefined
            }
            if (SDL2.capture.mediaStreamNode !== undefined) {
                SDL2.capture.mediaStreamNode.disconnect();
                SDL2.capture.mediaStreamNode = undefined
            }
            if (SDL2.capture.silenceBuffer !== undefined) {
                SDL2.capture.silenceBuffer = undefined
            }
            SDL2.capture = undefined
        } else {
            if (SDL2.audio.scriptProcessorNode != undefined) {
                SDL2.audio.scriptProcessorNode.disconnect();
                SDL2.audio.scriptProcessorNode = undefined
            }
            SDL2.audio = undefined
        }
        if (SDL2.audioContext !== undefined && SDL2.audio === undefined && SDL2.capture === undefined) {
            SDL2.audioContext.close();
            SDL2.audioContext = undefined
        }
    },
    3343875: ($0, $1, $2) => {
        var w = $0;
        var h = $1;
        var pixels = $2;
        if (!Module["SDL2"]) Module["SDL2"] = {};
        var SDL2 = Module["SDL2"];
        if (SDL2.ctxCanvas !== Module["canvas"]) {
            SDL2.ctx = Module["createContext"](Module["canvas"], false, true);
            SDL2.ctxCanvas = Module["canvas"]
        }
        if (SDL2.w !== w || SDL2.h !== h || SDL2.imageCtx !== SDL2.ctx) {
            SDL2.image = SDL2.ctx.createImageData(w, h);
            SDL2.w = w;
            SDL2.h = h;
            SDL2.imageCtx = SDL2.ctx
        }
        var data = SDL2.image.data;
        var src = pixels >> 2;
        var dst = 0;
        var num;
        if (typeof CanvasPixelArray !== "undefined" && data instanceof CanvasPixelArray) {
            num = data.length;
            while (dst < num) {
                var val = GROWABLE_HEAP_I32()[src];
                data[dst] = val & 255;
                data[dst + 1] = val >> 8 & 255;
                data[dst + 2] = val >> 16 & 255;
                data[dst + 3] = 255;
                src++;
                dst += 4
            }
        } else {
            if (SDL2.data32Data !== data) {
                SDL2.data32 = new Int32Array(data.buffer);
                SDL2.data8 = new Uint8Array(data.buffer);
                SDL2.data32Data = data
            }
            var data32 = SDL2.data32;
            num = data32.length;
            data32.set(GROWABLE_HEAP_I32().subarray(src, src + num));
            var data8 = SDL2.data8;
            var i = 3;
            var j = i + 4 * num;
            if (num % 8 == 0) {
                while (i < j) {
                    data8[i] = 255;
                    i = i + 4 | 0;
                    data8[i] = 255;
                    i = i + 4 | 0;
                    data8[i] = 255;
                    i = i + 4 | 0;
                    data8[i] = 255;
                    i = i + 4 | 0;
                    data8[i] = 255;
                    i = i + 4 | 0;
                    data8[i] = 255;
                    i = i + 4 | 0;
                    data8[i] = 255;
                    i = i + 4 | 0;
                    data8[i] = 255;
                    i = i + 4 | 0
                }
            } else {
                while (i < j) {
                    data8[i] = 255;
                    i = i + 4 | 0
                }
            }
        }
        SDL2.ctx.putImageData(SDL2.image, 0, 0)
    },
    3345344: ($0, $1, $2, $3, $4) => {
        var w = $0;
        var h = $1;
        var hot_x = $2;
        var hot_y = $3;
        var pixels = $4;
        var canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        var ctx = canvas.getContext("2d");
        var image = ctx.createImageData(w, h);
        var data = image.data;
        var src = pixels >> 2;
        var dst = 0;
        var num;
        if (typeof CanvasPixelArray !== "undefined" && data instanceof CanvasPixelArray) {
            num = data.length;
            while (dst < num) {
                var val = GROWABLE_HEAP_I32()[src];
                data[dst] = val & 255;
                data[dst + 1] = val >> 8 & 255;
                data[dst + 2] = val >> 16 & 255;
                data[dst + 3] = val >> 24 & 255;
                src++;
                dst += 4
            }
        } else {
            var data32 = new Int32Array(data.buffer);
            num = data32.length;
            data32.set(GROWABLE_HEAP_I32().subarray(src, src + num))
        }
        ctx.putImageData(image, 0, 0);
        var url = hot_x === 0 && hot_y === 0 ? "url(" + canvas.toDataURL() + "), auto" : "url(" + canvas.toDataURL() + ") " + hot_x + " " + hot_y + ", auto";
        var urlBuf = _malloc(url.length + 1);
        stringToUTF8(url, urlBuf, url.length + 1);
        return urlBuf
    },
    3346333: $0 => {
        if (Module["canvas"]) {
            Module["canvas"].style["cursor"] = UTF8ToString($0)
        }
    },
    3346416: () => {
        if (Module["canvas"]) {
            Module["canvas"].style["cursor"] = "none"
        }
    },
    3346485: () => {
        return window.innerWidth
    },
    3346515: () => {
        return window.innerHeight
    },
    3346546: ($0, $1) => {
        alert(UTF8ToString($0) + "\n\n" + UTF8ToString($1))
    }
};

function ExitStatus(status) {
    this.name = "ExitStatus";
    this.message = "Program terminated with exit(" + status + ")";
    this.status = status
}

function killThread(pthread_ptr) {
    var worker = PThread.pthreads[pthread_ptr];
    delete PThread.pthreads[pthread_ptr];
    worker.terminate();
    __emscripten_thread_free_data(pthread_ptr);
    PThread.runningWorkers.splice(PThread.runningWorkers.indexOf(worker), 1);
    worker.pthread_ptr = 0
}

function cancelThread(pthread_ptr) {
    var worker = PThread.pthreads[pthread_ptr];
    worker.postMessage({
        "cmd": "cancel"
    })
}

function cleanupThread(pthread_ptr) {
    var worker = PThread.pthreads[pthread_ptr];
    assert(worker);
    PThread.returnWorkerToPool(worker)
}

function zeroMemory(address, size) {
    GROWABLE_HEAP_U8().fill(0, address, address + size)
}

function spawnThread(threadParams) {
    var worker = PThread.getNewWorker();
    if (!worker) {
        return 6
    }
    PThread.runningWorkers.push(worker);
    PThread.pthreads[threadParams.pthread_ptr] = worker;
    worker.pthread_ptr = threadParams.pthread_ptr;
    var msg = {
        "cmd": "run",
        "start_routine": threadParams.startRoutine,
        "arg": threadParams.arg,
        "pthread_ptr": threadParams.pthread_ptr
    };
    worker.runPthread = () => {
        msg.time = performance.now();
        worker.postMessage(msg, threadParams.transferList)
    };
    if (worker.loaded) {
        worker.runPthread();
        delete worker.runPthread
    }
    return 0
}
var PATH = {
    isAbs: path => path.charAt(0) === "/",
    splitPath: filename => {
        var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return splitPathRe.exec(filename).slice(1)
    },
    normalizeArray: (parts, allowAboveRoot) => {
        var up = 0;
        for (var i = parts.length - 1; i >= 0; i--) {
            var last = parts[i];
            if (last === ".") {
                parts.splice(i, 1)
            } else if (last === "..") {
                parts.splice(i, 1);
                up++
            } else if (up) {
                parts.splice(i, 1);
                up--
            }
        }
        if (allowAboveRoot) {
            for (; up; up--) {
                parts.unshift("..")
            }
        }
        return parts
    },
    normalize: path => {
        var isAbsolute = PATH.isAbs(path),
            trailingSlash = path.substr(-1) === "/";
        path = PATH.normalizeArray(path.split("/").filter(p => !!p), !isAbsolute).join("/");
        if (!path && !isAbsolute) {
            path = "."
        }
        if (path && trailingSlash) {
            path += "/"
        }
        return (isAbsolute ? "/" : "") + path
    },
    dirname: path => {
        var result = PATH.splitPath(path),
            root = result[0],
            dir = result[1];
        if (!root && !dir) {
            return "."
        }
        if (dir) {
            dir = dir.substr(0, dir.length - 1)
        }
        return root + dir
    },
    basename: path => {
        if (path === "/") return "/";
        path = PATH.normalize(path);
        path = path.replace(/\/$/, "");
        var lastSlash = path.lastIndexOf("/");
        if (lastSlash === -1) return path;
        return path.substr(lastSlash + 1)
    },
    join: function() {
        var paths = Array.prototype.slice.call(arguments, 0);
        return PATH.normalize(paths.join("/"))
    },
    join2: (l, r) => {
        return PATH.normalize(l + "/" + r)
    }
};

function getRandomDevice() {
    if (typeof crypto == "object" && typeof crypto["getRandomValues"] == "function") {
        var randomBuffer = new Uint8Array(1);
        return () => {
            crypto.getRandomValues(randomBuffer);
            return randomBuffer[0]
        }
    } else return () => abort("randomDevice")
}
var PATH_FS = {
    resolve: function() {
        var resolvedPath = "",
            resolvedAbsolute = false;
        for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
            var path = i >= 0 ? arguments[i] : FS.cwd();
            if (typeof path != "string") {
                throw new TypeError("Arguments to path.resolve must be strings")
            } else if (!path) {
                return ""
            }
            resolvedPath = path + "/" + resolvedPath;
            resolvedAbsolute = PATH.isAbs(path)
        }
        resolvedPath = PATH.normalizeArray(resolvedPath.split("/").filter(p => !!p), !resolvedAbsolute).join("/");
        return (resolvedAbsolute ? "/" : "") + resolvedPath || "."
    },
    relative: (from, to) => {
        from = PATH_FS.resolve(from).substr(1);
        to = PATH_FS.resolve(to).substr(1);

        function trim(arr) {
            var start = 0;
            for (; start < arr.length; start++) {
                if (arr[start] !== "") break
            }
            var end = arr.length - 1;
            for (; end >= 0; end--) {
                if (arr[end] !== "") break
            }
            if (start > end) return [];
            return arr.slice(start, end - start + 1)
        }
        var fromParts = trim(from.split("/"));
        var toParts = trim(to.split("/"));
        var length = Math.min(fromParts.length, toParts.length);
        var samePartsLength = length;
        for (var i = 0; i < length; i++) {
            if (fromParts[i] !== toParts[i]) {
                samePartsLength = i;
                break
            }
        }
        var outputParts = [];
        for (var i = samePartsLength; i < fromParts.length; i++) {
            outputParts.push("..")
        }
        outputParts = outputParts.concat(toParts.slice(samePartsLength));
        return outputParts.join("/")
    }
};

function intArrayFromString(stringy, dontAddNull, length) {
    var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
    var u8array = new Array(len);
    var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
    if (dontAddNull) u8array.length = numBytesWritten;
    return u8array
}
var TTY = {
    ttys: [],
    init: function() {},
    shutdown: function() {},
    register: function(dev, ops) {
        TTY.ttys[dev] = {
            input: [],
            output: [],
            ops: ops
        };
        FS.registerDevice(dev, TTY.stream_ops)
    },
    stream_ops: {
        open: function(stream) {
            var tty = TTY.ttys[stream.node.rdev];
            if (!tty) {
                throw new FS.ErrnoError(43)
            }
            stream.tty = tty;
            stream.seekable = false
        },
        close: function(stream) {
            stream.tty.ops.flush(stream.tty)
        },
        flush: function(stream) {
            stream.tty.ops.flush(stream.tty)
        },
        read: function(stream, buffer, offset, length, pos) {
            if (!stream.tty || !stream.tty.ops.get_char) {
                throw new FS.ErrnoError(60)
            }
            var bytesRead = 0;
            for (var i = 0; i < length; i++) {
                var result;
                try {
                    result = stream.tty.ops.get_char(stream.tty)
                } catch (e) {
                    throw new FS.ErrnoError(29)
                }
                if (result === undefined && bytesRead === 0) {
                    throw new FS.ErrnoError(6)
                }
                if (result === null || result === undefined) break;
                bytesRead++;
                buffer[offset + i] = result
            }
            if (bytesRead) {
                stream.node.timestamp = Date.now()
            }
            return bytesRead
        },
        write: function(stream, buffer, offset, length, pos) {
            if (!stream.tty || !stream.tty.ops.put_char) {
                throw new FS.ErrnoError(60)
            }
            try {
                for (var i = 0; i < length; i++) {
                    stream.tty.ops.put_char(stream.tty, buffer[offset + i])
                }
            } catch (e) {
                throw new FS.ErrnoError(29)
            }
            if (length) {
                stream.node.timestamp = Date.now()
            }
            return i
        }
    },
    default_tty_ops: {
        get_char: function(tty) {
            if (!tty.input.length) {
                var result = null;
                if (typeof window != "undefined" && typeof window.prompt == "function") {
                    result = window.prompt("Input: ");
                    if (result !== null) {
                        result += "\n"
                    }
                } else if (typeof readline == "function") {
                    result = readline();
                    if (result !== null) {
                        result += "\n"
                    }
                }
                if (!result) {
                    return null
                }
                tty.input = intArrayFromString(result, true)
            }
            return tty.input.shift()
        },
        put_char: function(tty, val) {
            if (val === null || val === 10) {
                out(UTF8ArrayToString(tty.output, 0));
                tty.output = []
            } else {
                if (val != 0) tty.output.push(val)
            }
        },
        flush: function(tty) {
            if (tty.output && tty.output.length > 0) {
                out(UTF8ArrayToString(tty.output, 0));
                tty.output = []
            }
        }
    },
    default_tty1_ops: {
        put_char: function(tty, val) {
            if (val === null || val === 10) {
                err(UTF8ArrayToString(tty.output, 0));
                tty.output = []
            } else {
                if (val != 0) tty.output.push(val)
            }
        },
        flush: function(tty) {
            if (tty.output && tty.output.length > 0) {
                err(UTF8ArrayToString(tty.output, 0));
                tty.output = []
            }
        }
    }
};

function alignMemory(size, alignment) {
    return Math.ceil(size / alignment) * alignment
}

function mmapAlloc(size) {
    size = alignMemory(size, 65536);
    var ptr = _emscripten_builtin_memalign(65536, size);
    if (!ptr) return 0;
    zeroMemory(ptr, size);
    return ptr
}
var MEMFS = {
    ops_table: null,
    mount: function(mount) {
        return MEMFS.createNode(null, "/", 16384 | 511, 0)
    },
    createNode: function(parent, name, mode, dev) {
        if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
            throw new FS.ErrnoError(63)
        }
        if (!MEMFS.ops_table) {
            MEMFS.ops_table = {
                dir: {
                    node: {
                        getattr: MEMFS.node_ops.getattr,
                        setattr: MEMFS.node_ops.setattr,
                        lookup: MEMFS.node_ops.lookup,
                        mknod: MEMFS.node_ops.mknod,
                        rename: MEMFS.node_ops.rename,
                        unlink: MEMFS.node_ops.unlink,
                        rmdir: MEMFS.node_ops.rmdir,
                        readdir: MEMFS.node_ops.readdir,
                        symlink: MEMFS.node_ops.symlink
                    },
                    stream: {
                        llseek: MEMFS.stream_ops.llseek
                    }
                },
                file: {
                    node: {
                        getattr: MEMFS.node_ops.getattr,
                        setattr: MEMFS.node_ops.setattr
                    },
                    stream: {
                        llseek: MEMFS.stream_ops.llseek,
                        read: MEMFS.stream_ops.read,
                        write: MEMFS.stream_ops.write,
                        allocate: MEMFS.stream_ops.allocate,
                        mmap: MEMFS.stream_ops.mmap,
                        msync: MEMFS.stream_ops.msync
                    }
                },
                link: {
                    node: {
                        getattr: MEMFS.node_ops.getattr,
                        setattr: MEMFS.node_ops.setattr,
                        readlink: MEMFS.node_ops.readlink
                    },
                    stream: {}
                },
                chrdev: {
                    node: {
                        getattr: MEMFS.node_ops.getattr,
                        setattr: MEMFS.node_ops.setattr
                    },
                    stream: FS.chrdev_stream_ops
                }
            }
        }
        var node = FS.createNode(parent, name, mode, dev);
        if (FS.isDir(node.mode)) {
            node.node_ops = MEMFS.ops_table.dir.node;
            node.stream_ops = MEMFS.ops_table.dir.stream;
            node.contents = {}
        } else if (FS.isFile(node.mode)) {
            node.node_ops = MEMFS.ops_table.file.node;
            node.stream_ops = MEMFS.ops_table.file.stream;
            node.usedBytes = 0;
            node.contents = null
        } else if (FS.isLink(node.mode)) {
            node.node_ops = MEMFS.ops_table.link.node;
            node.stream_ops = MEMFS.ops_table.link.stream
        } else if (FS.isChrdev(node.mode)) {
            node.node_ops = MEMFS.ops_table.chrdev.node;
            node.stream_ops = MEMFS.ops_table.chrdev.stream
        }
        node.timestamp = Date.now();
        if (parent) {
            parent.contents[name] = node;
            parent.timestamp = node.timestamp
        }
        return node
    },
    getFileDataAsTypedArray: function(node) {
        if (!node.contents) return new Uint8Array(0);
        if (node.contents.subarray) return node.contents.subarray(0, node.usedBytes);
        return new Uint8Array(node.contents)
    },
    expandFileStorage: function(node, newCapacity) {
        var prevCapacity = node.contents ? node.contents.length : 0;
        if (prevCapacity >= newCapacity) return;
        var CAPACITY_DOUBLING_MAX = 1024 * 1024;
        newCapacity = Math.max(newCapacity, prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2 : 1.125) >>> 0);
        if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256);
        var oldContents = node.contents;
        node.contents = new Uint8Array(newCapacity);
        if (node.usedBytes > 0) node.contents.set(oldContents.subarray(0, node.usedBytes), 0)
    },
    resizeFileStorage: function(node, newSize) {
        if (node.usedBytes == newSize) return;
        if (newSize == 0) {
            node.contents = null;
            node.usedBytes = 0
        } else {
            var oldContents = node.contents;
            node.contents = new Uint8Array(newSize);
            if (oldContents) {
                node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes)))
            }
            node.usedBytes = newSize
        }
    },
    node_ops: {
        getattr: function(node) {
            var attr = {};
            attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
            attr.ino = node.id;
            attr.mode = node.mode;
            attr.nlink = 1;
            attr.uid = 0;
            attr.gid = 0;
            attr.rdev = node.rdev;
            if (FS.isDir(node.mode)) {
                attr.size = 4096
            } else if (FS.isFile(node.mode)) {
                attr.size = node.usedBytes
            } else if (FS.isLink(node.mode)) {
                attr.size = node.link.length
            } else {
                attr.size = 0
            }
            attr.atime = new Date(node.timestamp);
            attr.mtime = new Date(node.timestamp);
            attr.ctime = new Date(node.timestamp);
            attr.blksize = 4096;
            attr.blocks = Math.ceil(attr.size / attr.blksize);
            return attr
        },
        setattr: function(node, attr) {
            if (attr.mode !== undefined) {
                node.mode = attr.mode
            }
            if (attr.timestamp !== undefined) {
                node.timestamp = attr.timestamp
            }
            if (attr.size !== undefined) {
                MEMFS.resizeFileStorage(node, attr.size)
            }
        },
        lookup: function(parent, name) {
            throw FS.genericErrors[44]
        },
        mknod: function(parent, name, mode, dev) {
            return MEMFS.createNode(parent, name, mode, dev)
        },
        rename: function(old_node, new_dir, new_name) {
            if (FS.isDir(old_node.mode)) {
                var new_node;
                try {
                    new_node = FS.lookupNode(new_dir, new_name)
                } catch (e) {}
                if (new_node) {
                    for (var i in new_node.contents) {
                        throw new FS.ErrnoError(55)
                    }
                }
            }
            delete old_node.parent.contents[old_node.name];
            old_node.parent.timestamp = Date.now();
            old_node.name = new_name;
            new_dir.contents[new_name] = old_node;
            new_dir.timestamp = old_node.parent.timestamp;
            old_node.parent = new_dir
        },
        unlink: function(parent, name) {
            delete parent.contents[name];
            parent.timestamp = Date.now()
        },
        rmdir: function(parent, name) {
            var node = FS.lookupNode(parent, name);
            for (var i in node.contents) {
                throw new FS.ErrnoError(55)
            }
            delete parent.contents[name];
            parent.timestamp = Date.now()
        },
        readdir: function(node) {
            var entries = [".", ".."];
            for (var key in node.contents) {
                if (!node.contents.hasOwnProperty(key)) {
                    continue
                }
                entries.push(key)
            }
            return entries
        },
        symlink: function(parent, newname, oldpath) {
            var node = MEMFS.createNode(parent, newname, 511 | 40960, 0);
            node.link = oldpath;
            return node
        },
        readlink: function(node) {
            if (!FS.isLink(node.mode)) {
                throw new FS.ErrnoError(28)
            }
            return node.link
        }
    },
    stream_ops: {
        read: function(stream, buffer, offset, length, position) {
            var contents = stream.node.contents;
            if (position >= stream.node.usedBytes) return 0;
            var size = Math.min(stream.node.usedBytes - position, length);
            if (size > 8 && contents.subarray) {
                buffer.set(contents.subarray(position, position + size), offset)
            } else {
                for (var i = 0; i < size; i++) buffer[offset + i] = contents[position + i]
            }
            return size
        },
        write: function(stream, buffer, offset, length, position, canOwn) {
            if (buffer.buffer === GROWABLE_HEAP_I8().buffer) {
                canOwn = false
            }
            if (!length) return 0;
            var node = stream.node;
            node.timestamp = Date.now();
            if (buffer.subarray && (!node.contents || node.contents.subarray)) {
                if (canOwn) {
                    node.contents = buffer.subarray(offset, offset + length);
                    node.usedBytes = length;
                    return length
                } else if (node.usedBytes === 0 && position === 0) {
                    node.contents = buffer.slice(offset, offset + length);
                    node.usedBytes = length;
                    return length
                } else if (position + length <= node.usedBytes) {
                    node.contents.set(buffer.subarray(offset, offset + length), position);
                    return length
                }
            }
            MEMFS.expandFileStorage(node, position + length);
            if (node.contents.subarray && buffer.subarray) {
                node.contents.set(buffer.subarray(offset, offset + length), position)
            } else {
                for (var i = 0; i < length; i++) {
                    node.contents[position + i] = buffer[offset + i]
                }
            }
            node.usedBytes = Math.max(node.usedBytes, position + length);
            return length
        },
        llseek: function(stream, offset, whence) {
            var position = offset;
            if (whence === 1) {
                position += stream.position
            } else if (whence === 2) {
                if (FS.isFile(stream.node.mode)) {
                    position += stream.node.usedBytes
                }
            }
            if (position < 0) {
                throw new FS.ErrnoError(28)
            }
            return position
        },
        allocate: function(stream, offset, length) {
            MEMFS.expandFileStorage(stream.node, offset + length);
            stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length)
        },
        mmap: function(stream, length, position, prot, flags) {
            if (!FS.isFile(stream.node.mode)) {
                throw new FS.ErrnoError(43)
            }
            var ptr;
            var allocated;
            var contents = stream.node.contents;
            if (!(flags & 2) && contents.buffer === buffer) {
                allocated = false;
                ptr = contents.byteOffset
            } else {
                if (position > 0 || position + length < contents.length) {
                    if (contents.subarray) {
                        contents = contents.subarray(position, position + length)
                    } else {
                        contents = Array.prototype.slice.call(contents, position, position + length)
                    }
                }
                allocated = true;
                ptr = mmapAlloc(length);
                if (!ptr) {
                    throw new FS.ErrnoError(48)
                }
                GROWABLE_HEAP_I8().set(contents, ptr)
            }
            return {
                ptr: ptr,
                allocated: allocated
            }
        },
        msync: function(stream, buffer, offset, length, mmapFlags) {
            if (!FS.isFile(stream.node.mode)) {
                throw new FS.ErrnoError(43)
            }
            if (mmapFlags & 2) {
                return 0
            }
            var bytesWritten = MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
            return 0
        }
    }
};

function asyncLoad(url, onload, onerror, noRunDep) {
    var dep = !noRunDep ? getUniqueRunDependency("al " + url) : "";
    readAsync(url, arrayBuffer => {
        assert(arrayBuffer, 'Loading data file "' + url + '" failed (no arrayBuffer).');
        onload(new Uint8Array(arrayBuffer));
        if (dep) removeRunDependency(dep)
    }, event => {
        if (onerror) {
            onerror()
        } else {
            throw 'Loading data file "' + url + '" failed.'
        }
    });
    if (dep) addRunDependency(dep)
}
var FS = {
    root: null,
    mounts: [],
    devices: {},
    streams: [],
    nextInode: 1,
    nameTable: null,
    currentPath: "/",
    initialized: false,
    ignorePermissions: true,
    ErrnoError: null,
    genericErrors: {},
    filesystems: null,
    syncFSRequests: 0,
    lookupPath: (path, opts = {}) => {
        path = PATH_FS.resolve(FS.cwd(), path);
        if (!path) return {
            path: "",
            node: null
        };
        var defaults = {
            follow_mount: true,
            recurse_count: 0
        };
        opts = Object.assign(defaults, opts);
        if (opts.recurse_count > 8) {
            throw new FS.ErrnoError(32)
        }
        var parts = PATH.normalizeArray(path.split("/").filter(p => !!p), false);
        var current = FS.root;
        var current_path = "/";
        for (var i = 0; i < parts.length; i++) {
            var islast = i === parts.length - 1;
            if (islast && opts.parent) {
                break
            }
            current = FS.lookupNode(current, parts[i]);
            current_path = PATH.join2(current_path, parts[i]);
            if (FS.isMountpoint(current)) {
                if (!islast || islast && opts.follow_mount) {
                    current = current.mounted.root
                }
            }
            if (!islast || opts.follow) {
                var count = 0;
                while (FS.isLink(current.mode)) {
                    var link = FS.readlink(current_path);
                    current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
                    var lookup = FS.lookupPath(current_path, {
                        recurse_count: opts.recurse_count + 1
                    });
                    current = lookup.node;
                    if (count++ > 40) {
                        throw new FS.ErrnoError(32)
                    }
                }
            }
        }
        return {
            path: current_path,
            node: current
        }
    },
    getPath: node => {
        var path;
        while (true) {
            if (FS.isRoot(node)) {
                var mount = node.mount.mountpoint;
                if (!path) return mount;
                return mount[mount.length - 1] !== "/" ? mount + "/" + path : mount + path
            }
            path = path ? node.name + "/" + path : node.name;
            node = node.parent
        }
    },
    hashName: (parentid, name) => {
        var hash = 0;
        for (var i = 0; i < name.length; i++) {
            hash = (hash << 5) - hash + name.charCodeAt(i) | 0
        }
        return (parentid + hash >>> 0) % FS.nameTable.length
    },
    hashAddNode: node => {
        var hash = FS.hashName(node.parent.id, node.name);
        node.name_next = FS.nameTable[hash];
        FS.nameTable[hash] = node
    },
    hashRemoveNode: node => {
        var hash = FS.hashName(node.parent.id, node.name);
        if (FS.nameTable[hash] === node) {
            FS.nameTable[hash] = node.name_next
        } else {
            var current = FS.nameTable[hash];
            while (current) {
                if (current.name_next === node) {
                    current.name_next = node.name_next;
                    break
                }
                current = current.name_next
            }
        }
    },
    lookupNode: (parent, name) => {
        var errCode = FS.mayLookup(parent);
        if (errCode) {
            throw new FS.ErrnoError(errCode, parent)
        }
        var hash = FS.hashName(parent.id, name);
        for (var node = FS.nameTable[hash]; node; node = node.name_next) {
            var nodeName = node.name;
            if (node.parent.id === parent.id && nodeName === name) {
                return node
            }
        }
        return FS.lookup(parent, name)
    },
    createNode: (parent, name, mode, rdev) => {
        var node = new FS.FSNode(parent, name, mode, rdev);
        FS.hashAddNode(node);
        return node
    },
    destroyNode: node => {
        FS.hashRemoveNode(node)
    },
    isRoot: node => {
        return node === node.parent
    },
    isMountpoint: node => {
        return !!node.mounted
    },
    isFile: mode => {
        return (mode & 61440) === 32768
    },
    isDir: mode => {
        return (mode & 61440) === 16384
    },
    isLink: mode => {
        return (mode & 61440) === 40960
    },
    isChrdev: mode => {
        return (mode & 61440) === 8192
    },
    isBlkdev: mode => {
        return (mode & 61440) === 24576
    },
    isFIFO: mode => {
        return (mode & 61440) === 4096
    },
    isSocket: mode => {
        return (mode & 49152) === 49152
    },
    flagModes: {
        "r": 0,
        "r+": 2,
        "w": 577,
        "w+": 578,
        "a": 1089,
        "a+": 1090
    },
    modeStringToFlags: str => {
        var flags = FS.flagModes[str];
        if (typeof flags == "undefined") {
            throw new Error("Unknown file open mode: " + str)
        }
        return flags
    },
    flagsToPermissionString: flag => {
        var perms = ["r", "w", "rw"][flag & 3];
        if (flag & 512) {
            perms += "w"
        }
        return perms
    },
    nodePermissions: (node, perms) => {
        if (FS.ignorePermissions) {
            return 0
        }
        if (perms.includes("r") && !(node.mode & 292)) {
            return 2
        } else if (perms.includes("w") && !(node.mode & 146)) {
            return 2
        } else if (perms.includes("x") && !(node.mode & 73)) {
            return 2
        }
        return 0
    },
    mayLookup: dir => {
        var errCode = FS.nodePermissions(dir, "x");
        if (errCode) return errCode;
        if (!dir.node_ops.lookup) return 2;
        return 0
    },
    mayCreate: (dir, name) => {
        try {
            var node = FS.lookupNode(dir, name);
            return 20
        } catch (e) {}
        return FS.nodePermissions(dir, "wx")
    },
    mayDelete: (dir, name, isdir) => {
        var node;
        try {
            node = FS.lookupNode(dir, name)
        } catch (e) {
            return e.errno
        }
        var errCode = FS.nodePermissions(dir, "wx");
        if (errCode) {
            return errCode
        }
        if (isdir) {
            if (!FS.isDir(node.mode)) {
                return 54
            }
            if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
                return 10
            }
        } else {
            if (FS.isDir(node.mode)) {
                return 31
            }
        }
        return 0
    },
    mayOpen: (node, flags) => {
        if (!node) {
            return 44
        }
        if (FS.isLink(node.mode)) {
            return 32
        } else if (FS.isDir(node.mode)) {
            if (FS.flagsToPermissionString(flags) !== "r" || flags & 512) {
                return 31
            }
        }
        return FS.nodePermissions(node, FS.flagsToPermissionString(flags))
    },
    MAX_OPEN_FDS: 4096,
    nextfd: (fd_start = 0, fd_end = FS.MAX_OPEN_FDS) => {
        for (var fd = fd_start; fd <= fd_end; fd++) {
            if (!FS.streams[fd]) {
                return fd
            }
        }
        throw new FS.ErrnoError(33)
    },
    getStream: fd => FS.streams[fd],
    createStream: (stream, fd_start, fd_end) => {
        if (!FS.FSStream) {
            FS.FSStream = function() {
                this.shared = {}
            };
            FS.FSStream.prototype = {};
            Object.defineProperties(FS.FSStream.prototype, {
                object: {
                    get: function() {
                        return this.node
                    },
                    set: function(val) {
                        this.node = val
                    }
                },
                isRead: {
                    get: function() {
                        return (this.flags & 2097155) !== 1
                    }
                },
                isWrite: {
                    get: function() {
                        return (this.flags & 2097155) !== 0
                    }
                },
                isAppend: {
                    get: function() {
                        return this.flags & 1024
                    }
                },
                flags: {
                    get: function() {
                        return this.shared.flags
                    },
                    set: function(val) {
                        this.shared.flags = val
                    }
                },
                position: {
                    get: function() {
                        return this.shared.position
                    },
                    set: function(val) {
                        this.shared.position = val
                    }
                }
            })
        }
        stream = Object.assign(new FS.FSStream, stream);
        var fd = FS.nextfd(fd_start, fd_end);
        stream.fd = fd;
        FS.streams[fd] = stream;
        return stream
    },
    closeStream: fd => {
        FS.streams[fd] = null
    },
    chrdev_stream_ops: {
        open: stream => {
            var device = FS.getDevice(stream.node.rdev);
            stream.stream_ops = device.stream_ops;
            if (stream.stream_ops.open) {
                stream.stream_ops.open(stream)
            }
        },
        llseek: () => {
            throw new FS.ErrnoError(70)
        }
    },
    major: dev => dev >> 8,
    minor: dev => dev & 255,
    makedev: (ma, mi) => ma << 8 | mi,
    registerDevice: (dev, ops) => {
        FS.devices[dev] = {
            stream_ops: ops
        }
    },
    getDevice: dev => FS.devices[dev],
    getMounts: mount => {
        var mounts = [];
        var check = [mount];
        while (check.length) {
            var m = check.pop();
            mounts.push(m);
            check.push.apply(check, m.mounts)
        }
        return mounts
    },
    syncfs: (populate, callback) => {
        if (typeof populate == "function") {
            callback = populate;
            populate = false
        }
        FS.syncFSRequests++;
        if (FS.syncFSRequests > 1) {
            err("warning: " + FS.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work")
        }
        var mounts = FS.getMounts(FS.root.mount);
        var completed = 0;

        function doCallback(errCode) {
            FS.syncFSRequests--;
            return callback(errCode)
        }

        function done(errCode) {
            if (errCode) {
                if (!done.errored) {
                    done.errored = true;
                    return doCallback(errCode)
                }
                return
            }
            if (++completed >= mounts.length) {
                doCallback(null)
            }
        }
        mounts.forEach(mount => {
            if (!mount.type.syncfs) {
                return done(null)
            }
            mount.type.syncfs(mount, populate, done)
        })
    },
    mount: (type, opts, mountpoint) => {
        var root = mountpoint === "/";
        var pseudo = !mountpoint;
        var node;
        if (root && FS.root) {
            throw new FS.ErrnoError(10)
        } else if (!root && !pseudo) {
            var lookup = FS.lookupPath(mountpoint, {
                follow_mount: false
            });
            mountpoint = lookup.path;
            node = lookup.node;
            if (FS.isMountpoint(node)) {
                throw new FS.ErrnoError(10)
            }
            if (!FS.isDir(node.mode)) {
                throw new FS.ErrnoError(54)
            }
        }
        var mount = {
            type: type,
            opts: opts,
            mountpoint: mountpoint,
            mounts: []
        };
        var mountRoot = type.mount(mount);
        mountRoot.mount = mount;
        mount.root = mountRoot;
        if (root) {
            FS.root = mountRoot
        } else if (node) {
            node.mounted = mount;
            if (node.mount) {
                node.mount.mounts.push(mount)
            }
        }
        return mountRoot
    },
    unmount: mountpoint => {
        var lookup = FS.lookupPath(mountpoint, {
            follow_mount: false
        });
        if (!FS.isMountpoint(lookup.node)) {
            throw new FS.ErrnoError(28)
        }
        var node = lookup.node;
        var mount = node.mounted;
        var mounts = FS.getMounts(mount);
        Object.keys(FS.nameTable).forEach(hash => {
            var current = FS.nameTable[hash];
            while (current) {
                var next = current.name_next;
                if (mounts.includes(current.mount)) {
                    FS.destroyNode(current)
                }
                current = next
            }
        });
        node.mounted = null;
        var idx = node.mount.mounts.indexOf(mount);
        node.mount.mounts.splice(idx, 1)
    },
    lookup: (parent, name) => {
        return parent.node_ops.lookup(parent, name)
    },
    mknod: (path, mode, dev) => {
        var lookup = FS.lookupPath(path, {
            parent: true
        });
        var parent = lookup.node;
        var name = PATH.basename(path);
        if (!name || name === "." || name === "..") {
            throw new FS.ErrnoError(28)
        }
        var errCode = FS.mayCreate(parent, name);
        if (errCode) {
            throw new FS.ErrnoError(errCode)
        }
        if (!parent.node_ops.mknod) {
            throw new FS.ErrnoError(63)
        }
        return parent.node_ops.mknod(parent, name, mode, dev)
    },
    create: (path, mode) => {
        mode = mode !== undefined ? mode : 438;
        mode &= 4095;
        mode |= 32768;
        return FS.mknod(path, mode, 0)
    },
    mkdir: (path, mode) => {
        mode = mode !== undefined ? mode : 511;
        mode &= 511 | 512;
        mode |= 16384;
        return FS.mknod(path, mode, 0)
    },
    mkdirTree: (path, mode) => {
        var dirs = path.split("/");
        var d = "";
        for (var i = 0; i < dirs.length; ++i) {
            if (!dirs[i]) continue;
            d += "/" + dirs[i];
            try {
                FS.mkdir(d, mode)
            } catch (e) {
                if (e.errno != 20) throw e
            }
        }
    },
    mkdev: (path, mode, dev) => {
        if (typeof dev == "undefined") {
            dev = mode;
            mode = 438
        }
        mode |= 8192;
        return FS.mknod(path, mode, dev)
    },
    symlink: (oldpath, newpath) => {
        if (!PATH_FS.resolve(oldpath)) {
            throw new FS.ErrnoError(44)
        }
        var lookup = FS.lookupPath(newpath, {
            parent: true
        });
        var parent = lookup.node;
        if (!parent) {
            throw new FS.ErrnoError(44)
        }
        var newname = PATH.basename(newpath);
        var errCode = FS.mayCreate(parent, newname);
        if (errCode) {
            throw new FS.ErrnoError(errCode)
        }
        if (!parent.node_ops.symlink) {
            throw new FS.ErrnoError(63)
        }
        return parent.node_ops.symlink(parent, newname, oldpath)
    },
    rename: (old_path, new_path) => {
        var old_dirname = PATH.dirname(old_path);
        var new_dirname = PATH.dirname(new_path);
        var old_name = PATH.basename(old_path);
        var new_name = PATH.basename(new_path);
        var lookup, old_dir, new_dir;
        lookup = FS.lookupPath(old_path, {
            parent: true
        });
        old_dir = lookup.node;
        lookup = FS.lookupPath(new_path, {
            parent: true
        });
        new_dir = lookup.node;
        if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
        if (old_dir.mount !== new_dir.mount) {
            throw new FS.ErrnoError(75)
        }
        var old_node = FS.lookupNode(old_dir, old_name);
        var relative = PATH_FS.relative(old_path, new_dirname);
        if (relative.charAt(0) !== ".") {
            throw new FS.ErrnoError(28)
        }
        relative = PATH_FS.relative(new_path, old_dirname);
        if (relative.charAt(0) !== ".") {
            throw new FS.ErrnoError(55)
        }
        var new_node;
        try {
            new_node = FS.lookupNode(new_dir, new_name)
        } catch (e) {}
        if (old_node === new_node) {
            return
        }
        var isdir = FS.isDir(old_node.mode);
        var errCode = FS.mayDelete(old_dir, old_name, isdir);
        if (errCode) {
            throw new FS.ErrnoError(errCode)
        }
        errCode = new_node ? FS.mayDelete(new_dir, new_name, isdir) : FS.mayCreate(new_dir, new_name);
        if (errCode) {
            throw new FS.ErrnoError(errCode)
        }
        if (!old_dir.node_ops.rename) {
            throw new FS.ErrnoError(63)
        }
        if (FS.isMountpoint(old_node) || new_node && FS.isMountpoint(new_node)) {
            throw new FS.ErrnoError(10)
        }
        if (new_dir !== old_dir) {
            errCode = FS.nodePermissions(old_dir, "w");
            if (errCode) {
                throw new FS.ErrnoError(errCode)
            }
        }
        FS.hashRemoveNode(old_node);
        try {
            old_dir.node_ops.rename(old_node, new_dir, new_name)
        } catch (e) {
            throw e
        } finally {
            FS.hashAddNode(old_node)
        }
    },
    rmdir: path => {
        var lookup = FS.lookupPath(path, {
            parent: true
        });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, true);
        if (errCode) {
            throw new FS.ErrnoError(errCode)
        }
        if (!parent.node_ops.rmdir) {
            throw new FS.ErrnoError(63)
        }
        if (FS.isMountpoint(node)) {
            throw new FS.ErrnoError(10)
        }
        parent.node_ops.rmdir(parent, name);
        FS.destroyNode(node)
    },
    readdir: path => {
        var lookup = FS.lookupPath(path, {
            follow: true
        });
        var node = lookup.node;
        if (!node.node_ops.readdir) {
            throw new FS.ErrnoError(54)
        }
        return node.node_ops.readdir(node)
    },
    unlink: path => {
        var lookup = FS.lookupPath(path, {
            parent: true
        });
        var parent = lookup.node;
        if (!parent) {
            throw new FS.ErrnoError(44)
        }
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, false);
        if (errCode) {
            throw new FS.ErrnoError(errCode)
        }
        if (!parent.node_ops.unlink) {
            throw new FS.ErrnoError(63)
        }
        if (FS.isMountpoint(node)) {
            throw new FS.ErrnoError(10)
        }
        parent.node_ops.unlink(parent, name);
        FS.destroyNode(node)
    },
    readlink: path => {
        var lookup = FS.lookupPath(path);
        var link = lookup.node;
        if (!link) {
            throw new FS.ErrnoError(44)
        }
        if (!link.node_ops.readlink) {
            throw new FS.ErrnoError(28)
        }
        return PATH_FS.resolve(FS.getPath(link.parent), link.node_ops.readlink(link))
    },
    stat: (path, dontFollow) => {
        var lookup = FS.lookupPath(path, {
            follow: !dontFollow
        });
        var node = lookup.node;
        if (!node) {
            throw new FS.ErrnoError(44)
        }
        if (!node.node_ops.getattr) {
            throw new FS.ErrnoError(63)
        }
        return node.node_ops.getattr(node)
    },
    lstat: path => {
        return FS.stat(path, true)
    },
    chmod: (path, mode, dontFollow) => {
        var node;
        if (typeof path == "string") {
            var lookup = FS.lookupPath(path, {
                follow: !dontFollow
            });
            node = lookup.node
        } else {
            node = path
        }
        if (!node.node_ops.setattr) {
            throw new FS.ErrnoError(63)
        }
        node.node_ops.setattr(node, {
            mode: mode & 4095 | node.mode & ~4095,
            timestamp: Date.now()
        })
    },
    lchmod: (path, mode) => {
        FS.chmod(path, mode, true)
    },
    fchmod: (fd, mode) => {
        var stream = FS.getStream(fd);
        if (!stream) {
            throw new FS.ErrnoError(8)
        }
        FS.chmod(stream.node, mode)
    },
    chown: (path, uid, gid, dontFollow) => {
        var node;
        if (typeof path == "string") {
            var lookup = FS.lookupPath(path, {
                follow: !dontFollow
            });
            node = lookup.node
        } else {
            node = path
        }
        if (!node.node_ops.setattr) {
            throw new FS.ErrnoError(63)
        }
        node.node_ops.setattr(node, {
            timestamp: Date.now()
        })
    },
    lchown: (path, uid, gid) => {
        FS.chown(path, uid, gid, true)
    },
    fchown: (fd, uid, gid) => {
        var stream = FS.getStream(fd);
        if (!stream) {
            throw new FS.ErrnoError(8)
        }
        FS.chown(stream.node, uid, gid)
    },
    truncate: (path, len) => {
        if (len < 0) {
            throw new FS.ErrnoError(28)
        }
        var node;
        if (typeof path == "string") {
            var lookup = FS.lookupPath(path, {
                follow: true
            });
            node = lookup.node
        } else {
            node = path
        }
        if (!node.node_ops.setattr) {
            throw new FS.ErrnoError(63)
        }
        if (FS.isDir(node.mode)) {
            throw new FS.ErrnoError(31)
        }
        if (!FS.isFile(node.mode)) {
            throw new FS.ErrnoError(28)
        }
        var errCode = FS.nodePermissions(node, "w");
        if (errCode) {
            throw new FS.ErrnoError(errCode)
        }
        node.node_ops.setattr(node, {
            size: len,
            timestamp: Date.now()
        })
    },
    ftruncate: (fd, len) => {
        var stream = FS.getStream(fd);
        if (!stream) {
            throw new FS.ErrnoError(8)
        }
        if ((stream.flags & 2097155) === 0) {
            throw new FS.ErrnoError(28)
        }
        FS.truncate(stream.node, len)
    },
    utime: (path, atime, mtime) => {
        var lookup = FS.lookupPath(path, {
            follow: true
        });
        var node = lookup.node;
        node.node_ops.setattr(node, {
            timestamp: Math.max(atime, mtime)
        })
    },
    open: (path, flags, mode) => {
        if (path === "") {
            throw new FS.ErrnoError(44)
        }
        flags = typeof flags == "string" ? FS.modeStringToFlags(flags) : flags;
        mode = typeof mode == "undefined" ? 438 : mode;
        if (flags & 64) {
            mode = mode & 4095 | 32768
        } else {
            mode = 0
        }
        var node;
        if (typeof path == "object") {
            node = path
        } else {
            path = PATH.normalize(path);
            try {
                var lookup = FS.lookupPath(path, {
                    follow: !(flags & 131072)
                });
                node = lookup.node
            } catch (e) {}
        }
        var created = false;
        if (flags & 64) {
            if (node) {
                if (flags & 128) {
                    throw new FS.ErrnoError(20)
                }
            } else {
                node = FS.mknod(path, mode, 0);
                created = true
            }
        }
        if (!node) {
            throw new FS.ErrnoError(44)
        }
        if (FS.isChrdev(node.mode)) {
            flags &= ~512
        }
        if (flags & 65536 && !FS.isDir(node.mode)) {
            throw new FS.ErrnoError(54)
        }
        if (!created) {
            var errCode = FS.mayOpen(node, flags);
            if (errCode) {
                throw new FS.ErrnoError(errCode)
            }
        }
        if (flags & 512 && !created) {
            FS.truncate(node, 0)
        }
        flags &= ~(128 | 512 | 131072);
        var stream = FS.createStream({
            node: node,
            path: FS.getPath(node),
            flags: flags,
            seekable: true,
            position: 0,
            stream_ops: node.stream_ops,
            ungotten: [],
            error: false
        });
        if (stream.stream_ops.open) {
            stream.stream_ops.open(stream)
        }
        if (Module["logReadFiles"] && !(flags & 1)) {
            if (!FS.readFiles) FS.readFiles = {};
            if (!(path in FS.readFiles)) {
                FS.readFiles[path] = 1
            }
        }
        return stream
    },
    close: stream => {
        if (FS.isClosed(stream)) {
            throw new FS.ErrnoError(8)
        }
        if (stream.getdents) stream.getdents = null;
        try {
            if (stream.stream_ops.close) {
                stream.stream_ops.close(stream)
            }
        } catch (e) {
            throw e
        } finally {
            FS.closeStream(stream.fd)
        }
        stream.fd = null
    },
    isClosed: stream => {
        return stream.fd === null
    },
    llseek: (stream, offset, whence) => {
        if (FS.isClosed(stream)) {
            throw new FS.ErrnoError(8)
        }
        if (!stream.seekable || !stream.stream_ops.llseek) {
            throw new FS.ErrnoError(70)
        }
        if (whence != 0 && whence != 1 && whence != 2) {
            throw new FS.ErrnoError(28)
        }
        stream.position = stream.stream_ops.llseek(stream, offset, whence);
        stream.ungotten = [];
        return stream.position
    },
    read: (stream, buffer, offset, length, position) => {
        if (length < 0 || position < 0) {
            throw new FS.ErrnoError(28)
        }
        if (FS.isClosed(stream)) {
            throw new FS.ErrnoError(8)
        }
        if ((stream.flags & 2097155) === 1) {
            throw new FS.ErrnoError(8)
        }
        if (FS.isDir(stream.node.mode)) {
            throw new FS.ErrnoError(31)
        }
        if (!stream.stream_ops.read) {
            throw new FS.ErrnoError(28)
        }
        var seeking = typeof position != "undefined";
        if (!seeking) {
            position = stream.position
        } else if (!stream.seekable) {
            throw new FS.ErrnoError(70)
        }
        var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
        if (!seeking) stream.position += bytesRead;
        return bytesRead
    },
    write: (stream, buffer, offset, length, position, canOwn) => {
        if (length < 0 || position < 0) {
            throw new FS.ErrnoError(28)
        }
        if (FS.isClosed(stream)) {
            throw new FS.ErrnoError(8)
        }
        if ((stream.flags & 2097155) === 0) {
            throw new FS.ErrnoError(8)
        }
        if (FS.isDir(stream.node.mode)) {
            throw new FS.ErrnoError(31)
        }
        if (!stream.stream_ops.write) {
            throw new FS.ErrnoError(28)
        }
        if (stream.seekable && stream.flags & 1024) {
            FS.llseek(stream, 0, 2)
        }
        var seeking = typeof position != "undefined";
        if (!seeking) {
            position = stream.position
        } else if (!stream.seekable) {
            throw new FS.ErrnoError(70)
        }
        var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
        if (!seeking) stream.position += bytesWritten;
        return bytesWritten
    },
    allocate: (stream, offset, length) => {
        if (FS.isClosed(stream)) {
            throw new FS.ErrnoError(8)
        }
        if (offset < 0 || length <= 0) {
            throw new FS.ErrnoError(28)
        }
        if ((stream.flags & 2097155) === 0) {
            throw new FS.ErrnoError(8)
        }
        if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
            throw new FS.ErrnoError(43)
        }
        if (!stream.stream_ops.allocate) {
            throw new FS.ErrnoError(138)
        }
        stream.stream_ops.allocate(stream, offset, length)
    },
    mmap: (stream, length, position, prot, flags) => {
        if ((prot & 2) !== 0 && (flags & 2) === 0 && (stream.flags & 2097155) !== 2) {
            throw new FS.ErrnoError(2)
        }
        if ((stream.flags & 2097155) === 1) {
            throw new FS.ErrnoError(2)
        }
        if (!stream.stream_ops.mmap) {
            throw new FS.ErrnoError(43)
        }
        return stream.stream_ops.mmap(stream, length, position, prot, flags)
    },
    msync: (stream, buffer, offset, length, mmapFlags) => {
        if (!stream || !stream.stream_ops.msync) {
            return 0
        }
        return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags)
    },
    munmap: stream => 0,
    ioctl: (stream, cmd, arg) => {
        if (!stream.stream_ops.ioctl) {
            throw new FS.ErrnoError(59)
        }
        return stream.stream_ops.ioctl(stream, cmd, arg)
    },
    readFile: (path, opts = {}) => {
        opts.flags = opts.flags || 0;
        opts.encoding = opts.encoding || "binary";
        if (opts.encoding !== "utf8" && opts.encoding !== "binary") {
            throw new Error('Invalid encoding type "' + opts.encoding + '"')
        }
        var ret;
        var stream = FS.open(path, opts.flags);
        var stat = FS.stat(path);
        var length = stat.size;
        var buf = new Uint8Array(length);
        FS.read(stream, buf, 0, length, 0);
        if (opts.encoding === "utf8") {
            ret = UTF8ArrayToString(buf, 0)
        } else if (opts.encoding === "binary") {
            ret = buf
        }
        FS.close(stream);
        return ret
    },
    writeFile: (path, data, opts = {}) => {
        opts.flags = opts.flags || 577;
        var stream = FS.open(path, opts.flags, opts.mode);
        if (typeof data == "string") {
            var buf = new Uint8Array(lengthBytesUTF8(data) + 1);
            var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
            FS.write(stream, buf, 0, actualNumBytes, undefined, opts.canOwn)
        } else if (ArrayBuffer.isView(data)) {
            FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn)
        } else {
            throw new Error("Unsupported data type")
        }
        FS.close(stream)
    },
    cwd: () => FS.currentPath,
    chdir: path => {
        var lookup = FS.lookupPath(path, {
            follow: true
        });
        if (lookup.node === null) {
            throw new FS.ErrnoError(44)
        }
        if (!FS.isDir(lookup.node.mode)) {
            throw new FS.ErrnoError(54)
        }
        var errCode = FS.nodePermissions(lookup.node, "x");
        if (errCode) {
            throw new FS.ErrnoError(errCode)
        }
        FS.currentPath = lookup.path
    },
    createDefaultDirectories: () => {
        FS.mkdir("/tmp");
        FS.mkdir("/home");
        FS.mkdir("/home/web_user")
    },
    createDefaultDevices: () => {
        FS.mkdir("/dev");
        FS.registerDevice(FS.makedev(1, 3), {
            read: () => 0,
            write: (stream, buffer, offset, length, pos) => length
        });
        FS.mkdev("/dev/null", FS.makedev(1, 3));
        TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
        TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
        FS.mkdev("/dev/tty", FS.makedev(5, 0));
        FS.mkdev("/dev/tty1", FS.makedev(6, 0));
        var random_device = getRandomDevice();
        FS.createDevice("/dev", "random", random_device);
        FS.createDevice("/dev", "urandom", random_device);
        FS.mkdir("/dev/shm");
        FS.mkdir("/dev/shm/tmp")
    },
    createSpecialDirectories: () => {
        FS.mkdir("/proc");
        var proc_self = FS.mkdir("/proc/self");
        FS.mkdir("/proc/self/fd");
        FS.mount({
            mount: () => {
                var node = FS.createNode(proc_self, "fd", 16384 | 511, 73);
                node.node_ops = {
                    lookup: (parent, name) => {
                        var fd = +name;
                        var stream = FS.getStream(fd);
                        if (!stream) throw new FS.ErrnoError(8);
                        var ret = {
                            parent: null,
                            mount: {
                                mountpoint: "fake"
                            },
                            node_ops: {
                                readlink: () => stream.path
                            }
                        };
                        ret.parent = ret;
                        return ret
                    }
                };
                return node
            }
        }, {}, "/proc/self/fd")
    },
    createStandardStreams: () => {
        if (Module["stdin"]) {
            FS.createDevice("/dev", "stdin", Module["stdin"])
        } else {
            FS.symlink("/dev/tty", "/dev/stdin")
        }
        if (Module["stdout"]) {
            FS.createDevice("/dev", "stdout", null, Module["stdout"])
        } else {
            FS.symlink("/dev/tty", "/dev/stdout")
        }
        if (Module["stderr"]) {
            FS.createDevice("/dev", "stderr", null, Module["stderr"])
        } else {
            FS.symlink("/dev/tty1", "/dev/stderr")
        }
        var stdin = FS.open("/dev/stdin", 0);
        var stdout = FS.open("/dev/stdout", 1);
        var stderr = FS.open("/dev/stderr", 1)
    },
    ensureErrnoError: () => {
        if (FS.ErrnoError) return;
        FS.ErrnoError = function ErrnoError(errno, node) {
            this.node = node;
            this.setErrno = function(errno) {
                this.errno = errno
            };
            this.setErrno(errno);
            this.message = "FS error"
        };
        FS.ErrnoError.prototype = new Error;
        FS.ErrnoError.prototype.constructor = FS.ErrnoError;
        [44].forEach(code => {
            FS.genericErrors[code] = new FS.ErrnoError(code);
            FS.genericErrors[code].stack = "<generic error, no stack>"
        })
    },
    staticInit: () => {
        FS.ensureErrnoError();
        FS.nameTable = new Array(4096);
        FS.mount(MEMFS, {}, "/");
        FS.createDefaultDirectories();
        FS.createDefaultDevices();
        FS.createSpecialDirectories();
        FS.filesystems = {
            "MEMFS": MEMFS
        }
    },
    init: (input, output, error) => {
        FS.init.initialized = true;
        FS.ensureErrnoError();
        Module["stdin"] = input || Module["stdin"];
        Module["stdout"] = output || Module["stdout"];
        Module["stderr"] = error || Module["stderr"];
        FS.createStandardStreams()
    },
    quit: () => {
        FS.init.initialized = false;
        for (var i = 0; i < FS.streams.length; i++) {
            var stream = FS.streams[i];
            if (!stream) {
                continue
            }
            FS.close(stream)
        }
    },
    getMode: (canRead, canWrite) => {
        var mode = 0;
        if (canRead) mode |= 292 | 73;
        if (canWrite) mode |= 146;
        return mode
    },
    findObject: (path, dontResolveLastLink) => {
        var ret = FS.analyzePath(path, dontResolveLastLink);
        if (!ret.exists) {
            return null
        }
        return ret.object
    },
    analyzePath: (path, dontResolveLastLink) => {
        try {
            var lookup = FS.lookupPath(path, {
                follow: !dontResolveLastLink
            });
            path = lookup.path
        } catch (e) {}
        var ret = {
            isRoot: false,
            exists: false,
            error: 0,
            name: null,
            path: null,
            object: null,
            parentExists: false,
            parentPath: null,
            parentObject: null
        };
        try {
            var lookup = FS.lookupPath(path, {
                parent: true
            });
            ret.parentExists = true;
            ret.parentPath = lookup.path;
            ret.parentObject = lookup.node;
            ret.name = PATH.basename(path);
            lookup = FS.lookupPath(path, {
                follow: !dontResolveLastLink
            });
            ret.exists = true;
            ret.path = lookup.path;
            ret.object = lookup.node;
            ret.name = lookup.node.name;
            ret.isRoot = lookup.path === "/"
        } catch (e) {
            ret.error = e.errno
        }
        return ret
    },
    createPath: (parent, path, canRead, canWrite) => {
        parent = typeof parent == "string" ? parent : FS.getPath(parent);
        var parts = path.split("/").reverse();
        while (parts.length) {
            var part = parts.pop();
            if (!part) continue;
            var current = PATH.join2(parent, part);
            try {
                FS.mkdir(current)
            } catch (e) {}
            parent = current
        }
        return current
    },
    createFile: (parent, name, properties, canRead, canWrite) => {
        var path = PATH.join2(typeof parent == "string" ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(canRead, canWrite);
        return FS.create(path, mode)
    },
    createDataFile: (parent, name, data, canRead, canWrite, canOwn) => {
        var path = name;
        if (parent) {
            parent = typeof parent == "string" ? parent : FS.getPath(parent);
            path = name ? PATH.join2(parent, name) : parent
        }
        var mode = FS.getMode(canRead, canWrite);
        var node = FS.create(path, mode);
        if (data) {
            if (typeof data == "string") {
                var arr = new Array(data.length);
                for (var i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
                data = arr
            }
            FS.chmod(node, mode | 146);
            var stream = FS.open(node, 577);
            FS.write(stream, data, 0, data.length, 0, canOwn);
            FS.close(stream);
            FS.chmod(node, mode)
        }
        return node
    },
    createDevice: (parent, name, input, output) => {
        var path = PATH.join2(typeof parent == "string" ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(!!input, !!output);
        if (!FS.createDevice.major) FS.createDevice.major = 64;
        var dev = FS.makedev(FS.createDevice.major++, 0);
        FS.registerDevice(dev, {
            open: stream => {
                stream.seekable = false
            },
            close: stream => {
                if (output && output.buffer && output.buffer.length) {
                    output(10)
                }
            },
            read: (stream, buffer, offset, length, pos) => {
                var bytesRead = 0;
                for (var i = 0; i < length; i++) {
                    var result;
                    try {
                        result = input()
                    } catch (e) {
                        throw new FS.ErrnoError(29)
                    }
                    if (result === undefined && bytesRead === 0) {
                        throw new FS.ErrnoError(6)
                    }
                    if (result === null || result === undefined) break;
                    bytesRead++;
                    buffer[offset + i] = result
                }
                if (bytesRead) {
                    stream.node.timestamp = Date.now()
                }
                return bytesRead
            },
            write: (stream, buffer, offset, length, pos) => {
                for (var i = 0; i < length; i++) {
                    try {
                        output(buffer[offset + i])
                    } catch (e) {
                        throw new FS.ErrnoError(29)
                    }
                }
                if (length) {
                    stream.node.timestamp = Date.now()
                }
                return i
            }
        });
        return FS.mkdev(path, mode, dev)
    },
    forceLoadFile: obj => {
        if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
        if (typeof XMLHttpRequest != "undefined") {
            throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.")
        } else if (read_) {
            try {
                obj.contents = intArrayFromString(read_(obj.url), true);
                obj.usedBytes = obj.contents.length
            } catch (e) {
                throw new FS.ErrnoError(29)
            }
        } else {
            throw new Error("Cannot load without read() or XMLHttpRequest.")
        }
    },
    createLazyFile: (parent, name, url, canRead, canWrite) => {
        function LazyUint8Array() {
            this.lengthKnown = false;
            this.chunks = []
        }
        LazyUint8Array.prototype.get = function LazyUint8Array_get(idx) {
            if (idx > this.length - 1 || idx < 0) {
                return undefined
            }
            var chunkOffset = idx % this.chunkSize;
            var chunkNum = idx / this.chunkSize | 0;
            return this.getter(chunkNum)[chunkOffset]
        };
        LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) {
            this.getter = getter
        };
        LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() {
            var xhr = new XMLHttpRequest;
            xhr.open("HEAD", url, false);
            xhr.send(null);
            if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
            var datalength = Number(xhr.getResponseHeader("Content-length"));
            var header;
            var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
            var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
            var chunkSize = 1024 * 1024;
            if (!hasByteServing) chunkSize = datalength;
            var doXHR = (from, to) => {
                if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
                if (to > datalength - 1) throw new Error("only " + datalength + " bytes available! programmer error!");
                var xhr = new XMLHttpRequest;
                xhr.open("GET", url, false);
                if (datalength !== chunkSize) xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);
                xhr.responseType = "arraybuffer";
                if (xhr.overrideMimeType) {
                    xhr.overrideMimeType("text/plain; charset=x-user-defined")
                }
                xhr.send(null);
                if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
                if (xhr.response !== undefined) {
                    return new Uint8Array(xhr.response || [])
                }
                return intArrayFromString(xhr.responseText || "", true)
            };
            var lazyArray = this;
            lazyArray.setDataGetter(chunkNum => {
                var start = chunkNum * chunkSize;
                var end = (chunkNum + 1) * chunkSize - 1;
                end = Math.min(end, datalength - 1);
                if (typeof lazyArray.chunks[chunkNum] == "undefined") {
                    lazyArray.chunks[chunkNum] = doXHR(start, end)
                }
                if (typeof lazyArray.chunks[chunkNum] == "undefined") throw new Error("doXHR failed!");
                return lazyArray.chunks[chunkNum]
            });
            if (usesGzip || !datalength) {
                chunkSize = datalength = 1;
                datalength = this.getter(0).length;
                chunkSize = datalength;
                out("LazyFiles on gzip forces download of the whole file when length is accessed")
            }
            this._length = datalength;
            this._chunkSize = chunkSize;
            this.lengthKnown = true
        };
        if (typeof XMLHttpRequest != "undefined") {
            if (!ENVIRONMENT_IS_WORKER) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
            var lazyArray = new LazyUint8Array;
            Object.defineProperties(lazyArray, {
                length: {
                    get: function() {
                        if (!this.lengthKnown) {
                            this.cacheLength()
                        }
                        return this._length
                    }
                },
                chunkSize: {
                    get: function() {
                        if (!this.lengthKnown) {
                            this.cacheLength()
                        }
                        return this._chunkSize
                    }
                }
            });
            var properties = {
                isDevice: false,
                contents: lazyArray
            }
        } else {
            var properties = {
                isDevice: false,
                url: url
            }
        }
        var node = FS.createFile(parent, name, properties, canRead, canWrite);
        if (properties.contents) {
            node.contents = properties.contents
        } else if (properties.url) {
            node.contents = null;
            node.url = properties.url
        }
        Object.defineProperties(node, {
            usedBytes: {
                get: function() {
                    return this.contents.length
                }
            }
        });
        var stream_ops = {};
        var keys = Object.keys(node.stream_ops);
        keys.forEach(key => {
            var fn = node.stream_ops[key];
            stream_ops[key] = function forceLoadLazyFile() {
                FS.forceLoadFile(node);
                return fn.apply(null, arguments)
            }
        });

        function writeChunks(stream, buffer, offset, length, position) {
            var contents = stream.node.contents;
            if (position >= contents.length) return 0;
            var size = Math.min(contents.length - position, length);
            if (contents.slice) {
                for (var i = 0; i < size; i++) {
                    buffer[offset + i] = contents[position + i]
                }
            } else {
                for (var i = 0; i < size; i++) {
                    buffer[offset + i] = contents.get(position + i)
                }
            }
            return size
        }
        stream_ops.read = (stream, buffer, offset, length, position) => {
            FS.forceLoadFile(node);
            return writeChunks(stream, buffer, offset, length, position)
        };
        stream_ops.mmap = (stream, length, position, prot, flags) => {
            FS.forceLoadFile(node);
            var ptr = mmapAlloc(length);
            if (!ptr) {
                throw new FS.ErrnoError(48)
            }
            writeChunks(stream, GROWABLE_HEAP_I8(), ptr, length, position);
            return {
                ptr: ptr,
                allocated: true
            }
        };
        node.stream_ops = stream_ops;
        return node
    },
    createPreloadedFile: (parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) => {
        var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
        var dep = getUniqueRunDependency("cp " + fullname);

        function processData(byteArray) {
            function finish(byteArray) {
                if (preFinish) preFinish();
                if (!dontCreateFile) {
                    FS.createDataFile(parent, name, byteArray, canRead, canWrite, canOwn)
                }
                if (onload) onload();
                removeRunDependency(dep)
            }
            if (Browser.handledByPreloadPlugin(byteArray, fullname, finish, () => {
                    if (onerror) onerror();
                    removeRunDependency(dep)
                })) {
                return
            }
            finish(byteArray)
        }
        addRunDependency(dep);
        if (typeof url == "string") {
            asyncLoad(url, byteArray => processData(byteArray), onerror)
        } else {
            processData(url)
        }
    },
    indexedDB: () => {
        return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB
    },
    DB_NAME: () => {
        return "EM_FS_" + window.location.pathname
    },
    DB_VERSION: 20,
    DB_STORE_NAME: "FILE_DATA",
    saveFilesToDB: (paths, onload, onerror) => {
        onload = onload || (() => {});
        onerror = onerror || (() => {});
        var indexedDB = FS.indexedDB();
        try {
            var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION)
        } catch (e) {
            return onerror(e)
        }
        openRequest.onupgradeneeded = () => {
            out("creating db");
            var db = openRequest.result;
            db.createObjectStore(FS.DB_STORE_NAME)
        };
        openRequest.onsuccess = () => {
            var db = openRequest.result;
            var transaction = db.transaction([FS.DB_STORE_NAME], "readwrite");
            var files = transaction.objectStore(FS.DB_STORE_NAME);
            var ok = 0,
                fail = 0,
                total = paths.length;

            function finish() {
                if (fail == 0) onload();
                else onerror()
            }
            paths.forEach(path => {
                var putRequest = files.put(FS.analyzePath(path).object.contents, path);
                putRequest.onsuccess = () => {
                    ok++;
                    if (ok + fail == total) finish()
                };
                putRequest.onerror = () => {
                    fail++;
                    if (ok + fail == total) finish()
                }
            });
            transaction.onerror = onerror
        };
        openRequest.onerror = onerror
    },
    loadFilesFromDB: (paths, onload, onerror) => {
        onload = onload || (() => {});
        onerror = onerror || (() => {});
        var indexedDB = FS.indexedDB();
        try {
            var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION)
        } catch (e) {
            return onerror(e)
        }
        openRequest.onupgradeneeded = onerror;
        openRequest.onsuccess = () => {
            var db = openRequest.result;
            try {
                var transaction = db.transaction([FS.DB_STORE_NAME], "readonly")
            } catch (e) {
                onerror(e);
                return
            }
            var files = transaction.objectStore(FS.DB_STORE_NAME);
            var ok = 0,
                fail = 0,
                total = paths.length;

            function finish() {
                if (fail == 0) onload();
                else onerror()
            }
            paths.forEach(path => {
                var getRequest = files.get(path);
                getRequest.onsuccess = () => {
                    if (FS.analyzePath(path).exists) {
                        FS.unlink(path)
                    }
                    FS.createDataFile(PATH.dirname(path), PATH.basename(path), getRequest.result, true, true, true);
                    ok++;
                    if (ok + fail == total) finish()
                };
                getRequest.onerror = () => {
                    fail++;
                    if (ok + fail == total) finish()
                }
            });
            transaction.onerror = onerror
        };
        openRequest.onerror = onerror
    }
};
var SYSCALLS = {
    DEFAULT_POLLMASK: 5,
    calculateAt: function(dirfd, path, allowEmpty) {
        if (PATH.isAbs(path)) {
            return path
        }
        var dir;
        if (dirfd === -100) {
            dir = FS.cwd()
        } else {
            var dirstream = FS.getStream(dirfd);
            if (!dirstream) throw new FS.ErrnoError(8);
            dir = dirstream.path
        }
        if (path.length == 0) {
            if (!allowEmpty) {
                throw new FS.ErrnoError(44)
            }
            return dir
        }
        return PATH.join2(dir, path)
    },
    doStat: function(func, path, buf) {
        try {
            var stat = func(path)
        } catch (e) {
            if (e && e.node && PATH.normalize(path) !== PATH.normalize(FS.getPath(e.node))) {
                return -54
            }
            throw e
        }
        GROWABLE_HEAP_I32()[buf >> 2] = stat.dev;
        GROWABLE_HEAP_I32()[buf + 4 >> 2] = 0;
        GROWABLE_HEAP_I32()[buf + 8 >> 2] = stat.ino;
        GROWABLE_HEAP_I32()[buf + 12 >> 2] = stat.mode;
        GROWABLE_HEAP_I32()[buf + 16 >> 2] = stat.nlink;
        GROWABLE_HEAP_I32()[buf + 20 >> 2] = stat.uid;
        GROWABLE_HEAP_I32()[buf + 24 >> 2] = stat.gid;
        GROWABLE_HEAP_I32()[buf + 28 >> 2] = stat.rdev;
        GROWABLE_HEAP_I32()[buf + 32 >> 2] = 0;
        tempI64 = [stat.size >>> 0, (tempDouble = stat.size, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], GROWABLE_HEAP_I32()[buf + 40 >> 2] = tempI64[0], GROWABLE_HEAP_I32()[buf + 44 >> 2] = tempI64[1];
        GROWABLE_HEAP_I32()[buf + 48 >> 2] = 4096;
        GROWABLE_HEAP_I32()[buf + 52 >> 2] = stat.blocks;
        tempI64 = [Math.floor(stat.atime.getTime() / 1e3) >>> 0, (tempDouble = Math.floor(stat.atime.getTime() / 1e3), +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], GROWABLE_HEAP_I32()[buf + 56 >> 2] = tempI64[0], GROWABLE_HEAP_I32()[buf + 60 >> 2] = tempI64[1];
        GROWABLE_HEAP_I32()[buf + 64 >> 2] = 0;
        tempI64 = [Math.floor(stat.mtime.getTime() / 1e3) >>> 0, (tempDouble = Math.floor(stat.mtime.getTime() / 1e3), +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], GROWABLE_HEAP_I32()[buf + 72 >> 2] = tempI64[0], GROWABLE_HEAP_I32()[buf + 76 >> 2] = tempI64[1];
        GROWABLE_HEAP_I32()[buf + 80 >> 2] = 0;
        tempI64 = [Math.floor(stat.ctime.getTime() / 1e3) >>> 0, (tempDouble = Math.floor(stat.ctime.getTime() / 1e3), +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], GROWABLE_HEAP_I32()[buf + 88 >> 2] = tempI64[0], GROWABLE_HEAP_I32()[buf + 92 >> 2] = tempI64[1];
        GROWABLE_HEAP_I32()[buf + 96 >> 2] = 0;
        tempI64 = [stat.ino >>> 0, (tempDouble = stat.ino, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], GROWABLE_HEAP_I32()[buf + 104 >> 2] = tempI64[0], GROWABLE_HEAP_I32()[buf + 108 >> 2] = tempI64[1];
        return 0
    },
    doMsync: function(addr, stream, len, flags, offset) {
        var buffer = GROWABLE_HEAP_U8().slice(addr, addr + len);
        FS.msync(stream, buffer, offset, len, flags)
    },
    varargs: undefined,
    get: function() {
        SYSCALLS.varargs += 4;
        var ret = GROWABLE_HEAP_I32()[SYSCALLS.varargs - 4 >> 2];
        return ret
    },
    getStr: function(ptr) {
        var ret = UTF8ToString(ptr);
        return ret
    },
    getStreamFromFD: function(fd) {
        var stream = FS.getStream(fd);
        if (!stream) throw new FS.ErrnoError(8);
        return stream
    }
};

function _proc_exit(code) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(1, 1, code);
    EXITSTATUS = code;
    if (!keepRuntimeAlive()) {
        PThread.terminateAllThreads();
        if (Module["onExit"]) Module["onExit"](code);
        ABORT = true
    }
    quit_(code, new ExitStatus(code))
}

function exitJS(status, implicit) {
    EXITSTATUS = status;
    if (!implicit) {
        if (ENVIRONMENT_IS_PTHREAD) {
            exitOnMainThread(status);
            throw "unwind"
        } else {}
    }
    _proc_exit(status)
}
var _exit = exitJS;

function handleException(e) {
    if (e instanceof ExitStatus || e == "unwind") {
        return EXITSTATUS
    }
    quit_(1, e)
}
var PThread = {
    unusedWorkers: [],
    runningWorkers: [],
    tlsInitFunctions: [],
    pthreads: {},
    init: function() {
        if (ENVIRONMENT_IS_PTHREAD) {
            PThread.initWorker()
        } else {
            PThread.initMainThread()
        }
    },
    initMainThread: function() {
        var pthreadPoolSize = 64;
        for (var i = 0; i < pthreadPoolSize; ++i) {
            PThread.allocateUnusedWorker()
        }
    },
    initWorker: function() {
        noExitRuntime = false
    },
    setExitStatus: function(status) {
        EXITSTATUS = status
    },
    terminateAllThreads: function() {
        for (var t in PThread.pthreads) {
            var worker = PThread.pthreads[t];
            if (worker) {
                PThread.returnWorkerToPool(worker)
            }
        }
        for (var i = 0; i < PThread.unusedWorkers.length; ++i) {
            var worker = PThread.unusedWorkers[i];
            worker.terminate()
        }
        PThread.unusedWorkers = []
    },
    returnWorkerToPool: function(worker) {
        var pthread_ptr = worker.pthread_ptr;
        delete PThread.pthreads[pthread_ptr];
        PThread.unusedWorkers.push(worker);
        PThread.runningWorkers.splice(PThread.runningWorkers.indexOf(worker), 1);
        worker.pthread_ptr = 0;
        __emscripten_thread_free_data(pthread_ptr)
    },
    receiveObjectTransfer: function(data) {},
    threadInitTLS: function() {
        for (var i in PThread.tlsInitFunctions) {
            if (PThread.tlsInitFunctions.hasOwnProperty(i)) PThread.tlsInitFunctions[i]()
        }
    },
    loadWasmModuleToWorker: function(worker, onFinishedLoading) {
        worker.onmessage = e => {
            var d = e["data"];
            var cmd = d["cmd"];
            if (worker.pthread_ptr) PThread.currentProxiedOperationCallerThread = worker.pthread_ptr;
            if (d["targetThread"] && d["targetThread"] != _pthread_self()) {
                var targetWorker = PThread.pthreads[d.targetThread];
                if (targetWorker) {
                    targetWorker.postMessage(d, d["transferList"])
                } else {
                    err('Internal error! Worker sent a message "' + cmd + '" to target pthread ' + d["targetThread"] + ", but that thread no longer exists!")
                }
                PThread.currentProxiedOperationCallerThread = undefined;
                return
            }
            if (cmd === "processProxyingQueue") {
                executeNotifiedProxyingQueue(d["queue"])
            } else if (cmd === "spawnThread") {
                spawnThread(d)
            } else if (cmd === "cleanupThread") {
                cleanupThread(d["thread"])
            } else if (cmd === "killThread") {
                killThread(d["thread"])
            } else if (cmd === "cancelThread") {
                cancelThread(d["thread"])
            } else if (cmd === "loaded") {
                worker.loaded = true;
                if (onFinishedLoading) onFinishedLoading(worker);
                if (worker.runPthread) {
                    worker.runPthread();
                    delete worker.runPthread
                }
            } else if (cmd === "print") {
                out("Thread " + d["threadId"] + ": " + d["text"])
            } else if (cmd === "printErr") {
                err("Thread " + d["threadId"] + ": " + d["text"])
            } else if (cmd === "alert") {
                alert("Thread " + d["threadId"] + ": " + d["text"])
            } else if (d.target === "setimmediate") {
                worker.postMessage(d)
            } else if (cmd === "onAbort") {
                if (Module["onAbort"]) {
                    Module["onAbort"](d["arg"])
                }
            } else if (cmd) {
                err("worker sent an unknown command " + cmd)
            }
            PThread.currentProxiedOperationCallerThread = undefined
            };
            worker.onerror = e => {
                var message = "worker sent an error!";
                var filename = e.filename || "undefined";
                var lineno = e.lineno || "undefined";
                var errorMessage = e.message || "undefined";
                err(`${message} ${filename}:${lineno}: ${errorMessage}`);
                console.error("Worker error event:", e); // Log the entire event for debugging
                throw e;
            };
            worker.postMessage({
                "cmd": "load",
                "urlOrBlob": Module["mainScriptUrlOrBlob"] || _scriptDir,
                "wasmMemory": wasmMemory,
                "wasmModule": wasmModule
            })
    },
    allocateUnusedWorker: function() {
        var pthreadMainJs = locateFile("WebPlayer.worker.js");
        PThread.unusedWorkers.push(new Worker(pthreadMainJs))
    },
    getNewWorker: function() {
        if (PThread.unusedWorkers.length == 0) {
            PThread.allocateUnusedWorker();
            PThread.loadWasmModuleToWorker(PThread.unusedWorkers[0])
        }
        return PThread.unusedWorkers.pop()
    }
};
Module["PThread"] = PThread;

function listenOnce(object, event, func) {
    object.addEventListener(event, func, {
        "once": true
    })
}

function autoResumeAudioContext(ctx, elements) {
    if (!elements) {
        elements = [document, document.getElementById("canvas")]
    } ["keydown", "mousedown", "touchstart"].forEach(function(event) {
        elements.forEach(function(element) {
            if (element) {
                listenOnce(element, event, () => {
                    if (ctx.state === "suspended") ctx.resume()
                })
            }
        })
    })
}

function callRuntimeCallbacks(callbacks) {
    while (callbacks.length > 0) {
        callbacks.shift()(Module)
    }
}

function withStackSave(f) {
    var stack = stackSave();
    var ret = f();
    stackRestore(stack);
    return ret
}

function dynCallLegacy(sig, ptr, args) {
    var f = Module["dynCall_" + sig];
    return args && args.length ? f.apply(null, [ptr].concat(args)) : f.call(null, ptr)
}
var wasmTableMirror = [];

function getWasmTableEntry(funcPtr) {
    var func = wasmTableMirror[funcPtr];
    if (!func) {
        if (funcPtr >= wasmTableMirror.length) wasmTableMirror.length = funcPtr + 1;
        wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr)
    }
    return func
}

function dynCall(sig, ptr, args) {
    if (sig.includes("j")) {
        return dynCallLegacy(sig, ptr, args)
    }
    var rtn = getWasmTableEntry(ptr).apply(null, args);
    return rtn
}

function establishStackSpace() {
    var pthread_ptr = _pthread_self();
    var stackTop = GROWABLE_HEAP_I32()[pthread_ptr + 44 >> 2];
    var stackSize = GROWABLE_HEAP_I32()[pthread_ptr + 48 >> 2];
    var stackMax = stackTop - stackSize;
    _emscripten_stack_set_limits(stackTop, stackMax);
    stackRestore(stackTop)
}
Module["establishStackSpace"] = establishStackSpace;

function exitOnMainThread(returnCode) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(2, 0, returnCode);
    try {
        _exit(returnCode)
    } catch (e) {
        handleException(e)
    }
}

function getValue(ptr, type = "i8") {
    if (type.endsWith("*")) type = "*";
    switch (type) {
        case "i1":
            return GROWABLE_HEAP_I8()[ptr >> 0];
        case "i8":
            return GROWABLE_HEAP_I8()[ptr >> 0];
        case "i16":
            return GROWABLE_HEAP_I16()[ptr >> 1];
        case "i32":
            return GROWABLE_HEAP_I32()[ptr >> 2];
        case "i64":
            return GROWABLE_HEAP_I32()[ptr >> 2];
        case "float":
            return GROWABLE_HEAP_F32()[ptr >> 2];
        case "double":
            return GROWABLE_HEAP_F64()[ptr >> 3];
        case "*":
            return GROWABLE_HEAP_U32()[ptr >> 2];
        default:
            abort("invalid type for getValue: " + type)
    }
    return null
}

function invokeEntryPoint(ptr, arg) {
    var result = getWasmTableEntry(ptr)(arg);
    if (keepRuntimeAlive()) {
        PThread.setExitStatus(result)
    } else {
        __emscripten_thread_exit(result)
    }
}
Module["invokeEntryPoint"] = invokeEntryPoint;

function registerTLSInit(tlsInitFunc) {
    PThread.tlsInitFunctions.push(tlsInitFunc)
}

function setValue(ptr, value, type = "i8") {
    if (type.endsWith("*")) type = "*";
    switch (type) {
        case "i1":
            GROWABLE_HEAP_I8()[ptr >> 0] = value;
            break;
        case "i8":
            GROWABLE_HEAP_I8()[ptr >> 0] = value;
            break;
        case "i16":
            GROWABLE_HEAP_I16()[ptr >> 1] = value;
            break;
        case "i32":
            GROWABLE_HEAP_I32()[ptr >> 2] = value;
            break;
        case "i64":
            tempI64 = [value >>> 0, (tempDouble = value, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], GROWABLE_HEAP_I32()[ptr >> 2] = tempI64[0], GROWABLE_HEAP_I32()[ptr + 4 >> 2] = tempI64[1];
            break;
        case "float":
            GROWABLE_HEAP_F32()[ptr >> 2] = value;
            break;
        case "double":
            GROWABLE_HEAP_F64()[ptr >> 3] = value;
            break;
        case "*":
            GROWABLE_HEAP_U32()[ptr >> 2] = value;
            break;
        default:
            abort("invalid type for setValue: " + type)
    }
}

function writeArrayToMemory(array, buffer) {
    GROWABLE_HEAP_I8().set(array, buffer)
}

function ___call_sighandler(fp, sig) {
    getWasmTableEntry(fp)(sig)
}

function ___cxa_allocate_exception(size) {
    return _malloc(size + 24) + 24
}
var exceptionCaught = [];

function exception_addRef(info) {
    info.add_ref()
}
var uncaughtExceptionCount = 0;

function ___cxa_begin_catch(ptr) {
    var info = new ExceptionInfo(ptr);
    if (!info.get_caught()) {
        info.set_caught(true);
        uncaughtExceptionCount--
    }
    info.set_rethrown(false);
    exceptionCaught.push(info);
    exception_addRef(info);
    return info.get_exception_ptr()
}

function ___cxa_call_unexpected(exception) {
    err("Unexpected exception thrown, this is not properly supported - aborting");
    ABORT = true;
    throw exception
}

function ___cxa_current_primary_exception() {
    if (!exceptionCaught.length) {
        return 0
    }
    var info = exceptionCaught[exceptionCaught.length - 1];
    exception_addRef(info);
    return info.excPtr
}

function ExceptionInfo(excPtr) {
    this.excPtr = excPtr;
    this.ptr = excPtr - 24;
    this.set_type = function(type) {
        GROWABLE_HEAP_U32()[this.ptr + 4 >> 2] = type
    };
    this.get_type = function() {
        return GROWABLE_HEAP_U32()[this.ptr + 4 >> 2]
    };
    this.set_destructor = function(destructor) {
        GROWABLE_HEAP_U32()[this.ptr + 8 >> 2] = destructor
    };
    this.get_destructor = function() {
        return GROWABLE_HEAP_U32()[this.ptr + 8 >> 2]
    };
    this.set_refcount = function(refcount) {
        GROWABLE_HEAP_I32()[this.ptr >> 2] = refcount
    };
    this.set_caught = function(caught) {
        caught = caught ? 1 : 0;
        GROWABLE_HEAP_I8()[this.ptr + 12 >> 0] = caught
    };
    this.get_caught = function() {
        return GROWABLE_HEAP_I8()[this.ptr + 12 >> 0] != 0
    };
    this.set_rethrown = function(rethrown) {
        rethrown = rethrown ? 1 : 0;
        GROWABLE_HEAP_I8()[this.ptr + 13 >> 0] = rethrown
    };
    this.get_rethrown = function() {
        return GROWABLE_HEAP_I8()[this.ptr + 13 >> 0] != 0
    };
    this.init = function(type, destructor) {
        this.set_adjusted_ptr(0);
        this.set_type(type);
        this.set_destructor(destructor);
        this.set_refcount(0);
        this.set_caught(false);
        this.set_rethrown(false)
    };
    this.add_ref = function() {
        Atomics.add(GROWABLE_HEAP_I32(), this.ptr + 0 >> 2, 1)
    };
    this.release_ref = function() {
        var prev = Atomics.sub(GROWABLE_HEAP_I32(), this.ptr + 0 >> 2, 1);
        return prev === 1
    };
    this.set_adjusted_ptr = function(adjustedPtr) {
        GROWABLE_HEAP_U32()[this.ptr + 16 >> 2] = adjustedPtr
    };
    this.get_adjusted_ptr = function() {
        return GROWABLE_HEAP_U32()[this.ptr + 16 >> 2]
    };
    this.get_exception_ptr = function() {
        var isPointer = ___cxa_is_pointer_type(this.get_type());
        if (isPointer) {
            return GROWABLE_HEAP_U32()[this.excPtr >> 2]
        }
        var adjusted = this.get_adjusted_ptr();
        if (adjusted !== 0) return adjusted;
        return this.excPtr
    }
}

function ___cxa_free_exception(ptr) {
    return _free(new ExceptionInfo(ptr).ptr)
}

function exception_decRef(info) {
    if (info.release_ref() && !info.get_rethrown()) {
        var destructor = info.get_destructor();
        if (destructor) {
            getWasmTableEntry(destructor)(info.excPtr)
        }
        ___cxa_free_exception(info.excPtr)
    }
}

function ___cxa_decrement_exception_refcount(ptr) {
    if (!ptr) return;
    exception_decRef(new ExceptionInfo(ptr))
}
var exceptionLast = 0;

function ___cxa_end_catch() {
    _setThrew(0);
    var info = exceptionCaught.pop();
    exception_decRef(info);
    exceptionLast = 0
}

function ___resumeException(ptr) {
    if (!exceptionLast) {
        exceptionLast = ptr
    }
    throw ptr
}

function ___cxa_find_matching_catch_2() {
    var thrown = exceptionLast;
    if (!thrown) {
        setTempRet0(0);
        return 0
    }
    var info = new ExceptionInfo(thrown);
    info.set_adjusted_ptr(thrown);
    var thrownType = info.get_type();
    if (!thrownType) {
        setTempRet0(0);
        return thrown
    }
    var typeArray = Array.prototype.slice.call(arguments);
    for (var i = 0; i < typeArray.length; i++) {
        var caughtType = typeArray[i];
        if (caughtType === 0 || caughtType === thrownType) {
            break
        }
        var adjusted_ptr_addr = info.ptr + 16;
        if (___cxa_can_catch(caughtType, thrownType, adjusted_ptr_addr)) {
            setTempRet0(caughtType);
            return thrown
        }
    }
    setTempRet0(thrownType);
    return thrown
}

function ___cxa_find_matching_catch_20() {
    var thrown = exceptionLast;
    if (!thrown) {
        setTempRet0(0);
        return 0
    }
    var info = new ExceptionInfo(thrown);
    info.set_adjusted_ptr(thrown);
    var thrownType = info.get_type();
    if (!thrownType) {
        setTempRet0(0);
        return thrown
    }
    var typeArray = Array.prototype.slice.call(arguments);
    for (var i = 0; i < typeArray.length; i++) {
        var caughtType = typeArray[i];
        if (caughtType === 0 || caughtType === thrownType) {
            break
        }
        var adjusted_ptr_addr = info.ptr + 16;
        if (___cxa_can_catch(caughtType, thrownType, adjusted_ptr_addr)) {
            setTempRet0(caughtType);
            return thrown
        }
    }
    setTempRet0(thrownType);
    return thrown
}

function ___cxa_find_matching_catch_3() {
    var thrown = exceptionLast;
    if (!thrown) {
        setTempRet0(0);
        return 0
    }
    var info = new ExceptionInfo(thrown);
    info.set_adjusted_ptr(thrown);
    var thrownType = info.get_type();
    if (!thrownType) {
        setTempRet0(0);
        return thrown
    }
    var typeArray = Array.prototype.slice.call(arguments);
    for (var i = 0; i < typeArray.length; i++) {
        var caughtType = typeArray[i];
        if (caughtType === 0 || caughtType === thrownType) {
            break
        }
        var adjusted_ptr_addr = info.ptr + 16;
        if (___cxa_can_catch(caughtType, thrownType, adjusted_ptr_addr)) {
            setTempRet0(caughtType);
            return thrown
        }
    }
    setTempRet0(thrownType);
    return thrown
}

function ___cxa_find_matching_catch_4() {
    var thrown = exceptionLast;
    if (!thrown) {
        setTempRet0(0);
        return 0
    }
    var info = new ExceptionInfo(thrown);
    info.set_adjusted_ptr(thrown);
    var thrownType = info.get_type();
    if (!thrownType) {
        setTempRet0(0);
        return thrown
    }
    var typeArray = Array.prototype.slice.call(arguments);
    for (var i = 0; i < typeArray.length; i++) {
        var caughtType = typeArray[i];
        if (caughtType === 0 || caughtType === thrownType) {
            break
        }
        var adjusted_ptr_addr = info.ptr + 16;
        if (___cxa_can_catch(caughtType, thrownType, adjusted_ptr_addr)) {
            setTempRet0(caughtType);
            return thrown
        }
    }
    setTempRet0(thrownType);
    return thrown
}

function ___cxa_find_matching_catch_5() {
    var thrown = exceptionLast;
    if (!thrown) {
        setTempRet0(0);
        return 0
    }
    var info = new ExceptionInfo(thrown);
    info.set_adjusted_ptr(thrown);
    var thrownType = info.get_type();
    if (!thrownType) {
        setTempRet0(0);
        return thrown
    }
    var typeArray = Array.prototype.slice.call(arguments);
    for (var i = 0; i < typeArray.length; i++) {
        var caughtType = typeArray[i];
        if (caughtType === 0 || caughtType === thrownType) {
            break
        }
        var adjusted_ptr_addr = info.ptr + 16;
        if (___cxa_can_catch(caughtType, thrownType, adjusted_ptr_addr)) {
            setTempRet0(caughtType);
            return thrown
        }
    }
    setTempRet0(thrownType);
    return thrown
}

function ___cxa_find_matching_catch_6() {
    var thrown = exceptionLast;
    if (!thrown) {
        setTempRet0(0);
        return 0
    }
    var info = new ExceptionInfo(thrown);
    info.set_adjusted_ptr(thrown);
    var thrownType = info.get_type();
    if (!thrownType) {
        setTempRet0(0);
        return thrown
    }
    var typeArray = Array.prototype.slice.call(arguments);
    for (var i = 0; i < typeArray.length; i++) {
        var caughtType = typeArray[i];
        if (caughtType === 0 || caughtType === thrownType) {
            break
        }
        var adjusted_ptr_addr = info.ptr + 16;
        if (___cxa_can_catch(caughtType, thrownType, adjusted_ptr_addr)) {
            setTempRet0(caughtType);
            return thrown
        }
    }
    setTempRet0(thrownType);
    return thrown
}

function ___cxa_get_exception_ptr(ptr) {
    return new ExceptionInfo(ptr).get_exception_ptr()
}

function ___cxa_increment_exception_refcount(ptr) {
    if (!ptr) return;
    exception_addRef(new ExceptionInfo(ptr))
}

function ___cxa_rethrow() {
    var info = exceptionCaught.pop();
    if (!info) {
        abort("no exception to throw")
    }
    var ptr = info.excPtr;
    if (!info.get_rethrown()) {
        exceptionCaught.push(info);
        info.set_rethrown(true);
        info.set_caught(false);
        uncaughtExceptionCount++
    }
    exceptionLast = ptr;
    throw ptr
}

function ___cxa_throw(ptr, type, destructor) {
    var info = new ExceptionInfo(ptr);
    info.init(type, destructor);
    exceptionLast = ptr;
    uncaughtExceptionCount++;
    throw ptr
}

function ___cxa_uncaught_exceptions() {
    return uncaughtExceptionCount
}

function ___emscripten_init_main_thread_js(tb) {
    __emscripten_thread_init(tb, !ENVIRONMENT_IS_WORKER, 1, !ENVIRONMENT_IS_WEB);
    PThread.threadInitTLS()
}

function ___emscripten_thread_cleanup(thread) {
    if (!ENVIRONMENT_IS_PTHREAD) cleanupThread(thread);
    else postMessage({
        "cmd": "cleanupThread",
        "thread": thread
    })
}

function pthreadCreateProxied(pthread_ptr, attr, start_routine, arg) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(3, 1, pthread_ptr, attr, start_routine, arg);
    return ___pthread_create_js(pthread_ptr, attr, start_routine, arg)
}

function ___pthread_create_js(pthread_ptr, attr, start_routine, arg) {
    if (typeof SharedArrayBuffer == "undefined") {
        err("Current environment does not support SharedArrayBuffer, pthreads are not available!");
        return 6
    }
    var transferList = [];
    var error = 0;
    if (ENVIRONMENT_IS_PTHREAD && (transferList.length === 0 || error)) {
        return pthreadCreateProxied(pthread_ptr, attr, start_routine, arg)
    }
    if (error) return error;
    var threadParams = {
        startRoutine: start_routine,
        pthread_ptr: pthread_ptr,
        arg: arg,
        transferList: transferList
    };
    if (ENVIRONMENT_IS_PTHREAD) {
        threadParams.cmd = "spawnThread";
        postMessage(threadParams, transferList);
        return 0
    }
    return spawnThread(threadParams)
}

function setErrNo(value) {
    GROWABLE_HEAP_I32()[___errno_location() >> 2] = value;
    return value
}

function ___syscall_fcntl64(fd, cmd, varargs) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(4, 1, fd, cmd, varargs);
    SYSCALLS.varargs = varargs;
    try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        switch (cmd) {
            case 0: {
                var arg = SYSCALLS.get();
                if (arg < 0) {
                    return -28
                }
                var newStream;
                newStream = FS.createStream(stream, arg);
                return newStream.fd
            }
            case 1:
            case 2:
                return 0;
            case 3:
                return stream.flags;
            case 4: {
                var arg = SYSCALLS.get();
                stream.flags |= arg;
                return 0
            }
            case 5: {
                var arg = SYSCALLS.get();
                var offset = 0;
                GROWABLE_HEAP_I16()[arg + offset >> 1] = 2;
                return 0
            }
            case 6:
            case 7:
                return 0;
            case 16:
            case 8:
                return -28;
            case 9:
                setErrNo(28);
                return -1;
            default: {
                return -28
            }
        }
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function ___syscall_getcwd(buf, size) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(5, 1, buf, size);
    try {
        if (size === 0) return -28;
        var cwd = FS.cwd();
        var cwdLengthInBytes = lengthBytesUTF8(cwd) + 1;
        if (size < cwdLengthInBytes) return -68;
        stringToUTF8(cwd, buf, size);
        return cwdLengthInBytes
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function ___syscall_getdents64(fd, dirp, count) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(6, 1, fd, dirp, count);
    try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        if (!stream.getdents) {
            stream.getdents = FS.readdir(stream.path)
        }
        var struct_size = 280;
        var pos = 0;
        var off = FS.llseek(stream, 0, 1);
        var idx = Math.floor(off / struct_size);
        while (idx < stream.getdents.length && pos + struct_size <= count) {
            var id;
            var type;
            var name = stream.getdents[idx];
            if (name === ".") {
                id = stream.node.id;
                type = 4
            } else if (name === "..") {
                var lookup = FS.lookupPath(stream.path, {
                    parent: true
                });
                id = lookup.node.id;
                type = 4
            } else {
                var child = FS.lookupNode(stream.node, name);
                id = child.id;
                type = FS.isChrdev(child.mode) ? 2 : FS.isDir(child.mode) ? 4 : FS.isLink(child.mode) ? 10 : 8
            }
            tempI64 = [id >>> 0, (tempDouble = id, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], GROWABLE_HEAP_I32()[dirp + pos >> 2] = tempI64[0], GROWABLE_HEAP_I32()[dirp + pos + 4 >> 2] = tempI64[1];
            tempI64 = [(idx + 1) * struct_size >>> 0, (tempDouble = (idx + 1) * struct_size, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], GROWABLE_HEAP_I32()[dirp + pos + 8 >> 2] = tempI64[0], GROWABLE_HEAP_I32()[dirp + pos + 12 >> 2] = tempI64[1];
            GROWABLE_HEAP_I16()[dirp + pos + 16 >> 1] = 280;
            GROWABLE_HEAP_I8()[dirp + pos + 18 >> 0] = type;
            stringToUTF8(name, dirp + pos + 19, 256);
            pos += struct_size;
            idx += 1
        }
        FS.llseek(stream, idx * struct_size, 0);
        return pos
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function ___syscall_ioctl(fd, op, varargs) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(7, 1, fd, op, varargs);
    SYSCALLS.varargs = varargs;
    try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        switch (op) {
            case 21509:
            case 21505: {
                if (!stream.tty) return -59;
                return 0
            }
            case 21510:
            case 21511:
            case 21512:
            case 21506:
            case 21507:
            case 21508: {
                if (!stream.tty) return -59;
                return 0
            }
            case 21519: {
                if (!stream.tty) return -59;
                var argp = SYSCALLS.get();
                GROWABLE_HEAP_I32()[argp >> 2] = 0;
                return 0
            }
            case 21520: {
                if (!stream.tty) return -59;
                return -28
            }
            case 21531: {
                var argp = SYSCALLS.get();
                return FS.ioctl(stream, op, argp)
            }
            case 21523: {
                if (!stream.tty) return -59;
                return 0
            }
            case 21524: {
                if (!stream.tty) return -59;
                return 0
            }
            default:
                abort("bad ioctl syscall " + op)
        }
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function ___syscall_lstat64(path, buf) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(8, 1, path, buf);
    try {
        path = SYSCALLS.getStr(path);
        return SYSCALLS.doStat(FS.lstat, path, buf)
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function ___syscall_mkdirat(dirfd, path, mode) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(9, 1, dirfd, path, mode);
    try {
        path = SYSCALLS.getStr(path);
        path = SYSCALLS.calculateAt(dirfd, path);
        path = PATH.normalize(path);
        if (path[path.length - 1] === "/") path = path.substr(0, path.length - 1);
        FS.mkdir(path, mode, 0);
        return 0
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function ___syscall_newfstatat(dirfd, path, buf, flags) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(10, 1, dirfd, path, buf, flags);
    try {
        path = SYSCALLS.getStr(path);
        var nofollow = flags & 256;
        var allowEmpty = flags & 4096;
        flags = flags & ~4352;
        path = SYSCALLS.calculateAt(dirfd, path, allowEmpty);
        return SYSCALLS.doStat(nofollow ? FS.lstat : FS.stat, path, buf)
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function ___syscall_openat(dirfd, path, flags, varargs) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(11, 1, dirfd, path, flags, varargs);
    SYSCALLS.varargs = varargs;
    try {
        path = SYSCALLS.getStr(path);
        path = SYSCALLS.calculateAt(dirfd, path);
        var mode = varargs ? SYSCALLS.get() : 0;
        return FS.open(path, flags, mode).fd
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function ___syscall_readlinkat(dirfd, path, buf, bufsize) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(12, 1, dirfd, path, buf, bufsize);
    try {
        path = SYSCALLS.getStr(path);
        path = SYSCALLS.calculateAt(dirfd, path);
        if (bufsize <= 0) return -28;
        var ret = FS.readlink(path);
        var len = Math.min(bufsize, lengthBytesUTF8(ret));
        var endChar = GROWABLE_HEAP_I8()[buf + len];
        stringToUTF8(ret, buf, bufsize + 1);
        GROWABLE_HEAP_I8()[buf + len] = endChar;
        return len
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function ___syscall_renameat(olddirfd, oldpath, newdirfd, newpath) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(13, 1, olddirfd, oldpath, newdirfd, newpath);
    try {
        oldpath = SYSCALLS.getStr(oldpath);
        newpath = SYSCALLS.getStr(newpath);
        oldpath = SYSCALLS.calculateAt(olddirfd, oldpath);
        newpath = SYSCALLS.calculateAt(newdirfd, newpath);
        FS.rename(oldpath, newpath);
        return 0
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function ___syscall_rmdir(path) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(14, 1, path);
    try {
        path = SYSCALLS.getStr(path);
        FS.rmdir(path);
        return 0
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function ___syscall_stat64(path, buf) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(15, 1, path, buf);
    try {
        path = SYSCALLS.getStr(path);
        return SYSCALLS.doStat(FS.stat, path, buf)
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function ___syscall_unlinkat(dirfd, path, flags) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(16, 1, dirfd, path, flags);
    try {
        path = SYSCALLS.getStr(path);
        path = SYSCALLS.calculateAt(dirfd, path);
        if (flags === 0) {
            FS.unlink(path)
        } else if (flags === 512) {
            FS.rmdir(path)
        } else {
            abort("Invalid flags passed to unlinkat")
        }
        return 0
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function __dlinit(main_dso_handle) {}
var dlopenMissingError = "To use dlopen, you need enable dynamic linking, see https://github.com/emscripten-core/emscripten/wiki/Linking";

function __dlopen_js(filename, flag) {
    abort(dlopenMissingError)
}

function __embind_register_bigint(primitiveType, name, size, minRange, maxRange) {}

function getShiftFromSize(size) {
    switch (size) {
        case 1:
            return 0;
        case 2:
            return 1;
        case 4:
            return 2;
        case 8:
            return 3;
        default:
            throw new TypeError("Unknown type size: " + size)
    }
}

function embind_init_charCodes() {
    var codes = new Array(256);
    for (var i = 0; i < 256; ++i) {
        codes[i] = String.fromCharCode(i)
    }
    embind_charCodes = codes
}
var embind_charCodes = undefined;

function readLatin1String(ptr) {
    var ret = "";
    var c = ptr;
    while (GROWABLE_HEAP_U8()[c]) {
        ret += embind_charCodes[GROWABLE_HEAP_U8()[c++]]
    }
    return ret
}
var awaitingDependencies = {};
var registeredTypes = {};
var typeDependencies = {};
var char_0 = 48;
var char_9 = 57;

function makeLegalFunctionName(name) {
    if (undefined === name) {
        return "_unknown"
    }
    name = name.replace(/[^a-zA-Z0-9_]/g, "$");
    var f = name.charCodeAt(0);
    if (f >= char_0 && f <= char_9) {
        return "_" + name
    }
    return name
}

function createNamedFunction(name, body) {
    name = makeLegalFunctionName(name);
    return new Function("body", "return function " + name + "() {\n" + '    "use strict";' + "    return body.apply(this, arguments);\n" + "};\n")(body)
}

function extendError(baseErrorType, errorName) {
    var errorClass = createNamedFunction(errorName, function(message) {
        this.name = errorName;
        this.message = message;
        var stack = new Error(message).stack;
        if (stack !== undefined) {
            this.stack = this.toString() + "\n" + stack.replace(/^Error(:[^\n]*)?\n/, "")
        }
    });
    errorClass.prototype = Object.create(baseErrorType.prototype);
    errorClass.prototype.constructor = errorClass;
    errorClass.prototype.toString = function() {
        if (this.message === undefined) {
            return this.name
        } else {
            return this.name + ": " + this.message
        }
    };
    return errorClass
}
var BindingError = undefined;

function throwBindingError(message) {
    throw new BindingError(message)
}
var InternalError = undefined;

function registerType(rawType, registeredInstance, options = {}) {
    if (!("argPackAdvance" in registeredInstance)) {
        throw new TypeError("registerType registeredInstance requires argPackAdvance")
    }
    var name = registeredInstance.name;
    if (!rawType) {
        throwBindingError('type "' + name + '" must have a positive integer typeid pointer')
    }
    if (registeredTypes.hasOwnProperty(rawType)) {
        if (options.ignoreDuplicateRegistrations) {
            return
        } else {
            throwBindingError("Cannot register type '" + name + "' twice")
        }
    }
    registeredTypes[rawType] = registeredInstance;
    delete typeDependencies[rawType];
    if (awaitingDependencies.hasOwnProperty(rawType)) {
        var callbacks = awaitingDependencies[rawType];
        delete awaitingDependencies[rawType];
        callbacks.forEach(cb => cb())
    }
}

function __embind_register_bool(rawType, name, size, trueValue, falseValue) {
    var shift = getShiftFromSize(size);
    name = readLatin1String(name);
    registerType(rawType, {
        name: name,
        "fromWireType": function(wt) {
            return !!wt
        },
        "toWireType": function(destructors, o) {
            return o ? trueValue : falseValue
        },
        "argPackAdvance": 8,
        "readValueFromPointer": function(pointer) {
            var heap;
            if (size === 1) {
                heap = GROWABLE_HEAP_I8()
            } else if (size === 2) {
                heap = GROWABLE_HEAP_I16()
            } else if (size === 4) {
                heap = GROWABLE_HEAP_I32()
            } else {
                throw new TypeError("Unknown boolean type size: " + name)
            }
            return this["fromWireType"](heap[pointer >> shift])
        },
        destructorFunction: null
    })
}
var emval_free_list = [];
var emval_handle_array = [{}, {
    value: undefined
}, {
    value: null
}, {
    value: true
}, {
    value: false
}];

function __emval_decref(handle) {
    if (handle > 4 && 0 === --emval_handle_array[handle].refcount) {
        emval_handle_array[handle] = undefined;
        emval_free_list.push(handle)
    }
}

function count_emval_handles() {
    var count = 0;
    for (var i = 5; i < emval_handle_array.length; ++i) {
        if (emval_handle_array[i] !== undefined) {
            ++count
        }
    }
    return count
}

function get_first_emval() {
    for (var i = 5; i < emval_handle_array.length; ++i) {
        if (emval_handle_array[i] !== undefined) {
            return emval_handle_array[i]
        }
    }
    return null
}

function init_emval() {
    Module["count_emval_handles"] = count_emval_handles;
    Module["get_first_emval"] = get_first_emval
}
var Emval = {
    toValue: handle => {
        if (!handle) {
            throwBindingError("Cannot use deleted val. handle = " + handle)
        }
        return emval_handle_array[handle].value
    },
    toHandle: value => {
        switch (value) {
            case undefined:
                return 1;
            case null:
                return 2;
            case true:
                return 3;
            case false:
                return 4;
            default: {
                var handle = emval_free_list.length ? emval_free_list.pop() : emval_handle_array.length;
                emval_handle_array[handle] = {
                    refcount: 1,
                    value: value
                };
                return handle
            }
        }
    }
};

function simpleReadValueFromPointer(pointer) {
    return this["fromWireType"](GROWABLE_HEAP_I32()[pointer >> 2])
}

function __embind_register_emval(rawType, name) {
    name = readLatin1String(name);
    registerType(rawType, {
        name: name,
        "fromWireType": function(handle) {
            var rv = Emval.toValue(handle);
            __emval_decref(handle);
            return rv
        },
        "toWireType": function(destructors, value) {
            return Emval.toHandle(value)
        },
        "argPackAdvance": 8,
        "readValueFromPointer": simpleReadValueFromPointer,
        destructorFunction: null
    })
}

function floatReadValueFromPointer(name, shift) {
    switch (shift) {
        case 2:
            return function(pointer) {
                return this["fromWireType"](GROWABLE_HEAP_F32()[pointer >> 2])
            };
        case 3:
            return function(pointer) {
                return this["fromWireType"](GROWABLE_HEAP_F64()[pointer >> 3])
            };
        default:
            throw new TypeError("Unknown float type: " + name)
    }
}

function __embind_register_float(rawType, name, size) {
    var shift = getShiftFromSize(size);
    name = readLatin1String(name);
    registerType(rawType, {
        name: name,
        "fromWireType": function(value) {
            return value
        },
        "toWireType": function(destructors, value) {
            return value
        },
        "argPackAdvance": 8,
        "readValueFromPointer": floatReadValueFromPointer(name, shift),
        destructorFunction: null
    })
}

function integerReadValueFromPointer(name, shift, signed) {
    switch (shift) {
        case 0:
            return signed ? function readS8FromPointer(pointer) {
                return GROWABLE_HEAP_I8()[pointer]
            } : function readU8FromPointer(pointer) {
                return GROWABLE_HEAP_U8()[pointer]
            };
        case 1:
            return signed ? function readS16FromPointer(pointer) {
                return GROWABLE_HEAP_I16()[pointer >> 1]
            } : function readU16FromPointer(pointer) {
                return GROWABLE_HEAP_U16()[pointer >> 1]
            };
        case 2:
            return signed ? function readS32FromPointer(pointer) {
                return GROWABLE_HEAP_I32()[pointer >> 2]
            } : function readU32FromPointer(pointer) {
                return GROWABLE_HEAP_U32()[pointer >> 2]
            };
        default:
            throw new TypeError("Unknown integer type: " + name)
    }
}

function __embind_register_integer(primitiveType, name, size, minRange, maxRange) {
    name = readLatin1String(name);
    if (maxRange === -1) {
        maxRange = 4294967295
    }
    var shift = getShiftFromSize(size);
    var fromWireType = value => value;
    if (minRange === 0) {
        var bitshift = 32 - 8 * size;
        fromWireType = value => value << bitshift >>> bitshift
    }
    var isUnsignedType = name.includes("unsigned");
    var checkAssertions = (value, toTypeName) => {};
    var toWireType;
    if (isUnsignedType) {
        toWireType = function(destructors, value) {
            checkAssertions(value, this.name);
            return value >>> 0
        }
    } else {
        toWireType = function(destructors, value) {
            checkAssertions(value, this.name);
            return value
        }
    }
    registerType(primitiveType, {
        name: name,
        "fromWireType": fromWireType,
        "toWireType": toWireType,
        "argPackAdvance": 8,
        "readValueFromPointer": integerReadValueFromPointer(name, shift, minRange !== 0),
        destructorFunction: null
    })
}

function __embind_register_memory_view(rawType, dataTypeIndex, name) {
    var typeMapping = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array];
    var TA = typeMapping[dataTypeIndex];

    function decodeMemoryView(handle) {
        handle = handle >> 2;
        var heap = GROWABLE_HEAP_U32();
        var size = heap[handle];
        var data = heap[handle + 1];
        return new TA(buffer, data, size)
    }
    name = readLatin1String(name);
    registerType(rawType, {
        name: name,
        "fromWireType": decodeMemoryView,
        "argPackAdvance": 8,
        "readValueFromPointer": decodeMemoryView
    }, {
        ignoreDuplicateRegistrations: true
    })
}

function __embind_register_std_string(rawType, name) {
    name = readLatin1String(name);
    var stdStringIsUTF8 = name === "std::string";
    registerType(rawType, {
        name: name,
        "fromWireType": function(value) {
            var length = GROWABLE_HEAP_U32()[value >> 2];
            var payload = value + 4;
            var str;
            if (stdStringIsUTF8) {
                var decodeStartPtr = payload;
                for (var i = 0; i <= length; ++i) {
                    var currentBytePtr = payload + i;
                    if (i == length || GROWABLE_HEAP_U8()[currentBytePtr] == 0) {
                        var maxRead = currentBytePtr - decodeStartPtr;
                        var stringSegment = UTF8ToString(decodeStartPtr, maxRead);
                        if (str === undefined) {
                            str = stringSegment
                        } else {
                            str += String.fromCharCode(0);
                            str += stringSegment
                        }
                        decodeStartPtr = currentBytePtr + 1
                    }
                }
            } else {
                var a = new Array(length);
                for (var i = 0; i < length; ++i) {
                    a[i] = String.fromCharCode(GROWABLE_HEAP_U8()[payload + i])
                }
                str = a.join("")
            }
            _free(value);
            return str
        },
        "toWireType": function(destructors, value) {
            if (value instanceof ArrayBuffer) {
                value = new Uint8Array(value)
            }
            var length;
            var valueIsOfTypeString = typeof value == "string";
            if (!(valueIsOfTypeString || value instanceof Uint8Array || value instanceof Uint8ClampedArray || value instanceof Int8Array)) {
                throwBindingError("Cannot pass non-string to std::string")
            }
            if (stdStringIsUTF8 && valueIsOfTypeString) {
                length = lengthBytesUTF8(value)
            } else {
                length = value.length
            }
            var base = _malloc(4 + length + 1);
            var ptr = base + 4;
            GROWABLE_HEAP_U32()[base >> 2] = length;
            if (stdStringIsUTF8 && valueIsOfTypeString) {
                stringToUTF8(value, ptr, length + 1)
            } else {
                if (valueIsOfTypeString) {
                    for (var i = 0; i < length; ++i) {
                        var charCode = value.charCodeAt(i);
                        if (charCode > 255) {
                            _free(ptr);
                            throwBindingError("String has UTF-16 code units that do not fit in 8 bits")
                        }
                        GROWABLE_HEAP_U8()[ptr + i] = charCode
                    }
                } else {
                    for (var i = 0; i < length; ++i) {
                        GROWABLE_HEAP_U8()[ptr + i] = value[i]
                    }
                }
            }
            if (destructors !== null) {
                destructors.push(_free, base)
            }
            return base
        },
        "argPackAdvance": 8,
        "readValueFromPointer": simpleReadValueFromPointer,
        destructorFunction: function(ptr) {
            _free(ptr)
        }
    })
}
var UTF16Decoder = typeof TextDecoder != "undefined" ? new TextDecoder("utf-16le") : undefined;

function UTF16ToString(ptr, maxBytesToRead) {
    var endPtr = ptr;
    var idx = endPtr >> 1;
    var maxIdx = idx + maxBytesToRead / 2;
    while (!(idx >= maxIdx) && GROWABLE_HEAP_U16()[idx]) ++idx;
    endPtr = idx << 1;
    if (endPtr - ptr > 32 && UTF16Decoder) {
        return UTF16Decoder.decode(GROWABLE_HEAP_U8().slice(ptr, endPtr))
    } else {
        var str = "";
        for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
            var codeUnit = GROWABLE_HEAP_I16()[ptr + i * 2 >> 1];
            if (codeUnit == 0) break;
            str += String.fromCharCode(codeUnit)
        }
        return str
    }
}

function stringToUTF16(str, outPtr, maxBytesToWrite) {
    if (maxBytesToWrite === undefined) {
        maxBytesToWrite = 2147483647
    }
    if (maxBytesToWrite < 2) return 0;
    maxBytesToWrite -= 2;
    var startPtr = outPtr;
    var numCharsToWrite = maxBytesToWrite < str.length * 2 ? maxBytesToWrite / 2 : str.length;
    for (var i = 0; i < numCharsToWrite; ++i) {
        var codeUnit = str.charCodeAt(i);
        GROWABLE_HEAP_I16()[outPtr >> 1] = codeUnit;
        outPtr += 2
    }
    GROWABLE_HEAP_I16()[outPtr >> 1] = 0;
    return outPtr - startPtr
}

function lengthBytesUTF16(str) {
    return str.length * 2
}

function UTF32ToString(ptr, maxBytesToRead) {
    var i = 0;
    var str = "";
    while (!(i >= maxBytesToRead / 4)) {
        var utf32 = GROWABLE_HEAP_I32()[ptr + i * 4 >> 2];
        if (utf32 == 0) break;
        ++i;
        if (utf32 >= 65536) {
            var ch = utf32 - 65536;
            str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023)
        } else {
            str += String.fromCharCode(utf32)
        }
    }
    return str
}

function stringToUTF32(str, outPtr, maxBytesToWrite) {
    if (maxBytesToWrite === undefined) {
        maxBytesToWrite = 2147483647
    }
    if (maxBytesToWrite < 4) return 0;
    var startPtr = outPtr;
    var endPtr = startPtr + maxBytesToWrite - 4;
    for (var i = 0; i < str.length; ++i) {
        var codeUnit = str.charCodeAt(i);
        if (codeUnit >= 55296 && codeUnit <= 57343) {
            var trailSurrogate = str.charCodeAt(++i);
            codeUnit = 65536 + ((codeUnit & 1023) << 10) | trailSurrogate & 1023
        }
        GROWABLE_HEAP_I32()[outPtr >> 2] = codeUnit;
        outPtr += 4;
        if (outPtr + 4 > endPtr) break
    }
    GROWABLE_HEAP_I32()[outPtr >> 2] = 0;
    return outPtr - startPtr
}

function lengthBytesUTF32(str) {
    var len = 0;
    for (var i = 0; i < str.length; ++i) {
        var codeUnit = str.charCodeAt(i);
        if (codeUnit >= 55296 && codeUnit <= 57343) ++i;
        len += 4
    }
    return len
}

function __embind_register_std_wstring(rawType, charSize, name) {
    name = readLatin1String(name);
    var decodeString, encodeString, getHeap, lengthBytesUTF, shift;
    if (charSize === 2) {
        decodeString = UTF16ToString;
        encodeString = stringToUTF16;
        lengthBytesUTF = lengthBytesUTF16;
        getHeap = () => GROWABLE_HEAP_U16();
        shift = 1
    } else if (charSize === 4) {
        decodeString = UTF32ToString;
        encodeString = stringToUTF32;
        lengthBytesUTF = lengthBytesUTF32;
        getHeap = () => GROWABLE_HEAP_U32();
        shift = 2
    }
    registerType(rawType, {
        name: name,
        "fromWireType": function(value) {
            var length = GROWABLE_HEAP_U32()[value >> 2];
            var HEAP = getHeap();
            var str;
            var decodeStartPtr = value + 4;
            for (var i = 0; i <= length; ++i) {
                var currentBytePtr = value + 4 + i * charSize;
                if (i == length || HEAP[currentBytePtr >> shift] == 0) {
                    var maxReadBytes = currentBytePtr - decodeStartPtr;
                    var stringSegment = decodeString(decodeStartPtr, maxReadBytes);
                    if (str === undefined) {
                        str = stringSegment
                    } else {
                        str += String.fromCharCode(0);
                        str += stringSegment
                    }
                    decodeStartPtr = currentBytePtr + charSize
                }
            }
            _free(value);
            return str
        },
        "toWireType": function(destructors, value) {
            if (!(typeof value == "string")) {
                throwBindingError("Cannot pass non-string to C++ string type " + name)
            }
            var length = lengthBytesUTF(value);
            var ptr = _malloc(4 + length + charSize);
            GROWABLE_HEAP_U32()[ptr >> 2] = length >> shift;
            encodeString(value, ptr + 4, length + charSize);
            if (destructors !== null) {
                destructors.push(_free, ptr)
            }
            return ptr
        },
        "argPackAdvance": 8,
        "readValueFromPointer": simpleReadValueFromPointer,
        destructorFunction: function(ptr) {
            _free(ptr)
        }
    })
}

function __embind_register_void(rawType, name) {
    name = readLatin1String(name);
    registerType(rawType, {
        isVoid: true,
        name: name,
        "argPackAdvance": 0,
        "fromWireType": function() {
            return undefined
        },
        "toWireType": function(destructors, o) {
            return undefined
        }
    })
}

function __emscripten_date_now() {
    return Date.now()
}

function __emscripten_default_pthread_stack_size() {
    return 2097152
}

function __emscripten_fetch_free(id) {
    delete Fetch.xhrs[id - 1]
}

function __emscripten_fetch_get_response_headers(id, dst, dstSizeBytes) {
    var responseHeaders = Fetch.xhrs[id - 1].getAllResponseHeaders();
    var lengthBytes = lengthBytesUTF8(responseHeaders) + 1;
    stringToUTF8(responseHeaders, dst, dstSizeBytes);
    return Math.min(lengthBytes, dstSizeBytes)
}

function __emscripten_fetch_get_response_headers_length(id) {
    return lengthBytesUTF8(Fetch.xhrs[id - 1].getAllResponseHeaders()) + 1
}
var nowIsMonotonic = true;

function __emscripten_get_now_is_monotonic() {
    return nowIsMonotonic
}

function executeNotifiedProxyingQueue(queue) {
    Atomics.store(GROWABLE_HEAP_I32(), queue >> 2, 1);
    if (_pthread_self()) {
        __emscripten_proxy_execute_task_queue(queue)
    }
    Atomics.compareExchange(GROWABLE_HEAP_I32(), queue >> 2, 1, 0)
}
Module["executeNotifiedProxyingQueue"] = executeNotifiedProxyingQueue;

function __emscripten_notify_task_queue(targetThreadId, currThreadId, mainThreadId, queue) {
    if (targetThreadId == currThreadId) {
        setTimeout(() => executeNotifiedProxyingQueue(queue))
    } else if (ENVIRONMENT_IS_PTHREAD) {
        postMessage({
            "targetThread": targetThreadId,
            "cmd": "processProxyingQueue",
            "queue": queue
        })
    } else {
        var worker = PThread.pthreads[targetThreadId];
        if (!worker) {
            return
        }
        worker.postMessage({
            "cmd": "processProxyingQueue",
            "queue": queue
        })
    }
    return 1
}

function __emscripten_set_offscreencanvas_size(target, width, height) {
    return -1
}

function __emscripten_throw_longjmp() {
    throw Infinity
}

function readI53FromI64(ptr) {
    return GROWABLE_HEAP_U32()[ptr >> 2] + GROWABLE_HEAP_I32()[ptr + 4 >> 2] * 4294967296
}

function __gmtime_js(time, tmPtr) {
    var date = new Date(readI53FromI64(time) * 1e3);
    GROWABLE_HEAP_I32()[tmPtr >> 2] = date.getUTCSeconds();
    GROWABLE_HEAP_I32()[tmPtr + 4 >> 2] = date.getUTCMinutes();
    GROWABLE_HEAP_I32()[tmPtr + 8 >> 2] = date.getUTCHours();
    GROWABLE_HEAP_I32()[tmPtr + 12 >> 2] = date.getUTCDate();
    GROWABLE_HEAP_I32()[tmPtr + 16 >> 2] = date.getUTCMonth();
    GROWABLE_HEAP_I32()[tmPtr + 20 >> 2] = date.getUTCFullYear() - 1900;
    GROWABLE_HEAP_I32()[tmPtr + 24 >> 2] = date.getUTCDay();
    var start = Date.UTC(date.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
    var yday = (date.getTime() - start) / (1e3 * 60 * 60 * 24) | 0;
    GROWABLE_HEAP_I32()[tmPtr + 28 >> 2] = yday
}

function __localtime_js(time, tmPtr) {
    var date = new Date(readI53FromI64(time) * 1e3);
    GROWABLE_HEAP_I32()[tmPtr >> 2] = date.getSeconds();
    GROWABLE_HEAP_I32()[tmPtr + 4 >> 2] = date.getMinutes();
    GROWABLE_HEAP_I32()[tmPtr + 8 >> 2] = date.getHours();
    GROWABLE_HEAP_I32()[tmPtr + 12 >> 2] = date.getDate();
    GROWABLE_HEAP_I32()[tmPtr + 16 >> 2] = date.getMonth();
    GROWABLE_HEAP_I32()[tmPtr + 20 >> 2] = date.getFullYear() - 1900;
    GROWABLE_HEAP_I32()[tmPtr + 24 >> 2] = date.getDay();
    var start = new Date(date.getFullYear(), 0, 1);
    var yday = (date.getTime() - start.getTime()) / (1e3 * 60 * 60 * 24) | 0;
    GROWABLE_HEAP_I32()[tmPtr + 28 >> 2] = yday;
    GROWABLE_HEAP_I32()[tmPtr + 36 >> 2] = -(date.getTimezoneOffset() * 60);
    var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
    var winterOffset = start.getTimezoneOffset();
    var dst = (summerOffset != winterOffset && date.getTimezoneOffset() == Math.min(winterOffset, summerOffset)) | 0;
    GROWABLE_HEAP_I32()[tmPtr + 32 >> 2] = dst
}

function __mktime_js(tmPtr) {
    var date = new Date(GROWABLE_HEAP_I32()[tmPtr + 20 >> 2] + 1900, GROWABLE_HEAP_I32()[tmPtr + 16 >> 2], GROWABLE_HEAP_I32()[tmPtr + 12 >> 2], GROWABLE_HEAP_I32()[tmPtr + 8 >> 2], GROWABLE_HEAP_I32()[tmPtr + 4 >> 2], GROWABLE_HEAP_I32()[tmPtr >> 2], 0);
    var dst = GROWABLE_HEAP_I32()[tmPtr + 32 >> 2];
    var guessedOffset = date.getTimezoneOffset();
    var start = new Date(date.getFullYear(), 0, 1);
    var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
    var winterOffset = start.getTimezoneOffset();
    var dstOffset = Math.min(winterOffset, summerOffset);
    if (dst < 0) {
        GROWABLE_HEAP_I32()[tmPtr + 32 >> 2] = Number(summerOffset != winterOffset && dstOffset == guessedOffset)
    } else if (dst > 0 != (dstOffset == guessedOffset)) {
        var nonDstOffset = Math.max(winterOffset, summerOffset);
        var trueOffset = dst > 0 ? dstOffset : nonDstOffset;
        date.setTime(date.getTime() + (trueOffset - guessedOffset) * 6e4)
    }
    GROWABLE_HEAP_I32()[tmPtr + 24 >> 2] = date.getDay();
    var yday = (date.getTime() - start.getTime()) / (1e3 * 60 * 60 * 24) | 0;
    GROWABLE_HEAP_I32()[tmPtr + 28 >> 2] = yday;
    GROWABLE_HEAP_I32()[tmPtr >> 2] = date.getSeconds();
    GROWABLE_HEAP_I32()[tmPtr + 4 >> 2] = date.getMinutes();
    GROWABLE_HEAP_I32()[tmPtr + 8 >> 2] = date.getHours();
    GROWABLE_HEAP_I32()[tmPtr + 12 >> 2] = date.getDate();
    GROWABLE_HEAP_I32()[tmPtr + 16 >> 2] = date.getMonth();
    return date.getTime() / 1e3 | 0
}

function allocateUTF8(str) {
    var size = lengthBytesUTF8(str) + 1;
    var ret = _malloc(size);
    if (ret) stringToUTF8Array(str, GROWABLE_HEAP_I8(), ret, size);
    return ret
}

function _tzset_impl(timezone, daylight, tzname) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(17, 1, timezone, daylight, tzname);
    var currentYear = (new Date).getFullYear();
    var winter = new Date(currentYear, 0, 1);
    var summer = new Date(currentYear, 6, 1);
    var winterOffset = winter.getTimezoneOffset();
    var summerOffset = summer.getTimezoneOffset();
    var stdTimezoneOffset = Math.max(winterOffset, summerOffset);
    GROWABLE_HEAP_I32()[timezone >> 2] = stdTimezoneOffset * 60;
    GROWABLE_HEAP_I32()[daylight >> 2] = Number(winterOffset != summerOffset);

    function extractZone(date) {
        var match = date.toTimeString().match(/\(([A-Za-z ]+)\)$/);
        return match ? match[1] : "GMT"
    }
    var winterName = extractZone(winter);
    var summerName = extractZone(summer);
    var winterNamePtr = allocateUTF8(winterName);
    var summerNamePtr = allocateUTF8(summerName);
    if (summerOffset < winterOffset) {
        GROWABLE_HEAP_U32()[tzname >> 2] = winterNamePtr;
        GROWABLE_HEAP_U32()[tzname + 4 >> 2] = summerNamePtr
    } else {
        GROWABLE_HEAP_U32()[tzname >> 2] = summerNamePtr;
        GROWABLE_HEAP_U32()[tzname + 4 >> 2] = winterNamePtr
    }
}

function __tzset_js(timezone, daylight, tzname) {
    if (__tzset_js.called) return;
    __tzset_js.called = true;
    _tzset_impl(timezone, daylight, tzname)
}

function _abort() {
    abort("")
}

function runtimeKeepalivePush() {}

function _emscripten_set_main_loop_timing(mode, value) {
    Browser.mainLoop.timingMode = mode;
    Browser.mainLoop.timingValue = value;
    if (!Browser.mainLoop.func) {
        return 1
    }
    if (!Browser.mainLoop.running) {
        runtimeKeepalivePush();
        Browser.mainLoop.running = true
    }
    if (mode == 0) {
        Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_setTimeout() {
            var timeUntilNextTick = Math.max(0, Browser.mainLoop.tickStartTime + value - _emscripten_get_now()) | 0;
            setTimeout(Browser.mainLoop.runner, timeUntilNextTick)
        };
        Browser.mainLoop.method = "timeout"
    } else if (mode == 1) {
        Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_rAF() {
            Browser.requestAnimationFrame(Browser.mainLoop.runner)
        };
        Browser.mainLoop.method = "rAF"
    } else if (mode == 2) {
        if (typeof setImmediate == "undefined") {
            var setImmediates = [];
            var emscriptenMainLoopMessageId = "setimmediate";
            var Browser_setImmediate_messageHandler = event => {
                if (event.data === emscriptenMainLoopMessageId || event.data.target === emscriptenMainLoopMessageId) {
                    event.stopPropagation();
                    setImmediates.shift()()
                }
            };
            addEventListener("message", Browser_setImmediate_messageHandler, true);
            setImmediate = function Browser_emulated_setImmediate(func) {
                setImmediates.push(func);
                if (ENVIRONMENT_IS_WORKER) {
                    if (Module["setImmediates"] === undefined) Module["setImmediates"] = [];
                    Module["setImmediates"].push(func);
                    postMessage({
                        target: emscriptenMainLoopMessageId
                    })
                } else postMessage(emscriptenMainLoopMessageId, "*")
            }
        }
        Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_setImmediate() {
            setImmediate(Browser.mainLoop.runner)
        };
        Browser.mainLoop.method = "immediate"
    }
    return 0
}
var _emscripten_get_now;
if (ENVIRONMENT_IS_PTHREAD) {
    _emscripten_get_now = () => performance.now() - Module["__performance_now_clock_drift"]
} else _emscripten_get_now = () => performance.now();

function maybeExit() {}

function runtimeKeepalivePop() {}

function setMainLoop(browserIterationFunc, fps, simulateInfiniteLoop, arg, noSetTiming) {
    assert(!Browser.mainLoop.func, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
    Browser.mainLoop.func = browserIterationFunc;
    Browser.mainLoop.arg = arg;
    var thisMainLoopId = Browser.mainLoop.currentlyRunningMainloop;

    function checkIsRunning() {
        if (thisMainLoopId < Browser.mainLoop.currentlyRunningMainloop) {
            runtimeKeepalivePop();
            maybeExit();
            return false
        }
        return true
    }
    Browser.mainLoop.running = false;
    Browser.mainLoop.runner = function Browser_mainLoop_runner() {
        if (ABORT) return;
        if (Browser.mainLoop.queue.length > 0) {
            var start = Date.now();
            var blocker = Browser.mainLoop.queue.shift();
            blocker.func(blocker.arg);
            if (Browser.mainLoop.remainingBlockers) {
                var remaining = Browser.mainLoop.remainingBlockers;
                var next = remaining % 1 == 0 ? remaining - 1 : Math.floor(remaining);
                if (blocker.counted) {
                    Browser.mainLoop.remainingBlockers = next
                } else {
                    next = next + .5;
                    Browser.mainLoop.remainingBlockers = (8 * remaining + next) / 9
                }
            }
            out('main loop blocker "' + blocker.name + '" took ' + (Date.now() - start) + " ms");
            Browser.mainLoop.updateStatus();
            if (!checkIsRunning()) return;
            setTimeout(Browser.mainLoop.runner, 0);
            return
        }
        if (!checkIsRunning()) return;
        Browser.mainLoop.currentFrameNumber = Browser.mainLoop.currentFrameNumber + 1 | 0;
        if (Browser.mainLoop.timingMode == 1 && Browser.mainLoop.timingValue > 1 && Browser.mainLoop.currentFrameNumber % Browser.mainLoop.timingValue != 0) {
            Browser.mainLoop.scheduler();
            return
        } else if (Browser.mainLoop.timingMode == 0) {
            Browser.mainLoop.tickStartTime = _emscripten_get_now()
        }
        GL.newRenderingFrameStarted();
        Browser.mainLoop.runIter(browserIterationFunc);
        if (!checkIsRunning()) return;
        if (typeof SDL == "object" && SDL.audio && SDL.audio.queueNewAudioData) SDL.audio.queueNewAudioData();
        Browser.mainLoop.scheduler()
    };
    if (!noSetTiming) {
        if (fps && fps > 0) _emscripten_set_main_loop_timing(0, 1e3 / fps);
        else _emscripten_set_main_loop_timing(1, 1);
        Browser.mainLoop.scheduler()
    }
    if (simulateInfiniteLoop) {
        throw "unwind"
    }
}

function callUserCallback(func) {
    if (ABORT) {
        return
    }
    try {
        func();
        if (ENVIRONMENT_IS_PTHREAD) maybeExit()
    } catch (e) {
        handleException(e)
    }
}

function safeSetTimeout(func, timeout) {
    runtimeKeepalivePush();
    return setTimeout(function() {
        runtimeKeepalivePop();
        callUserCallback(func)
    }, timeout)
}

function warnOnce(text) {
    if (!warnOnce.shown) warnOnce.shown = {};
    if (!warnOnce.shown[text]) {
        warnOnce.shown[text] = 1;
        err(text)
    }
}
var Browser = {
    mainLoop: {
        running: false,
        scheduler: null,
        method: "",
        currentlyRunningMainloop: 0,
        func: null,
        arg: 0,
        timingMode: 0,
        timingValue: 0,
        currentFrameNumber: 0,
        queue: [],
        pause: function() {
            Browser.mainLoop.scheduler = null;
            Browser.mainLoop.currentlyRunningMainloop++
        },
        resume: function() {
            Browser.mainLoop.currentlyRunningMainloop++;
            var timingMode = Browser.mainLoop.timingMode;
            var timingValue = Browser.mainLoop.timingValue;
            var func = Browser.mainLoop.func;
            Browser.mainLoop.func = null;
            setMainLoop(func, 0, false, Browser.mainLoop.arg, true);
            _emscripten_set_main_loop_timing(timingMode, timingValue);
            Browser.mainLoop.scheduler()
        },
        updateStatus: function() {
            if (Module["setStatus"]) {
                var message = Module["statusMessage"] || "Please wait...";
                var remaining = Browser.mainLoop.remainingBlockers;
                var expected = Browser.mainLoop.expectedBlockers;
                if (remaining) {
                    if (remaining < expected) {
                        Module["setStatus"](message + " (" + (expected - remaining) + "/" + expected + ")")
                    } else {
                        Module["setStatus"](message)
                    }
                } else {
                    Module["setStatus"]("")
                }
            }
        },
        runIter: function(func) {
            if (ABORT) return;
            if (Module["preMainLoop"]) {
                var preRet = Module["preMainLoop"]();
                if (preRet === false) {
                    return
                }
            }
            callUserCallback(func);
            if (Module["postMainLoop"]) Module["postMainLoop"]()
        }
    },
    isFullscreen: false,
    pointerLock: false,
    moduleContextCreatedCallbacks: [],
    workers: [],
    init: function() {
        if (!Module["preloadPlugins"]) Module["preloadPlugins"] = [];
        if (Browser.initted) return;
        Browser.initted = true;
        try {
            new Blob;
            Browser.hasBlobConstructor = true
        } catch (e) {
            Browser.hasBlobConstructor = false;
            err("warning: no blob constructor, cannot create blobs with mimetypes")
        }
        Browser.BlobBuilder = typeof MozBlobBuilder != "undefined" ? MozBlobBuilder : typeof WebKitBlobBuilder != "undefined" ? WebKitBlobBuilder : !Browser.hasBlobConstructor ? err("warning: no BlobBuilder") : null;
        Browser.URLObject = typeof window != "undefined" ? window.URL ? window.URL : window.webkitURL : undefined;
        if (!Module.noImageDecoding && typeof Browser.URLObject == "undefined") {
            err("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");
            Module.noImageDecoding = true
        }
        var imagePlugin = {};
        imagePlugin["canHandle"] = function imagePlugin_canHandle(name) {
            return !Module.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(name)
        };
        imagePlugin["handle"] = function imagePlugin_handle(byteArray, name, onload, onerror) {
            var b = null;
            if (Browser.hasBlobConstructor) {
                try {
                    b = new Blob([byteArray], {
                        type: Browser.getMimetype(name)
                    });
                    if (b.size !== byteArray.length) {
                        b = new Blob([new Uint8Array(byteArray).buffer], {
                            type: Browser.getMimetype(name)
                        })
                    }
                } catch (e) {
                    warnOnce("Blob constructor present but fails: " + e + "; falling back to blob builder")
                }
            }
            if (!b) {
                var bb = new Browser.BlobBuilder;
                bb.append(new Uint8Array(byteArray).buffer);
                b = bb.getBlob()
            }
            var url = Browser.URLObject.createObjectURL(b);
            var img = new Image;
            img.onload = () => {
                assert(img.complete, "Image " + name + " could not be decoded");
                var canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = img.height;
                var ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0);
                preloadedImages[name] = canvas;
                Browser.URLObject.revokeObjectURL(url);
                if (onload) onload(byteArray)
            };
            img.onerror = event => {
                out("Image " + url + " could not be decoded");
                if (onerror) onerror()
            };
            img.src = url
        };
        Module["preloadPlugins"].push(imagePlugin);
        var audioPlugin = {};
        audioPlugin["canHandle"] = function audioPlugin_canHandle(name) {
            return !Module.noAudioDecoding && name.substr(-4) in {
                ".ogg": 1,
                ".wav": 1,
                ".mp3": 1
            }
        };
        audioPlugin["handle"] = function audioPlugin_handle(byteArray, name, onload, onerror) {
            var done = false;

            function finish(audio) {
                if (done) return;
                done = true;
                preloadedAudios[name] = audio;
                if (onload) onload(byteArray)
            }

            function fail() {
                if (done) return;
                done = true;
                preloadedAudios[name] = new Audio;
                if (onerror) onerror()
            }
            if (Browser.hasBlobConstructor) {
                try {
                    var b = new Blob([byteArray], {
                        type: Browser.getMimetype(name)
                    })
                } catch (e) {
                    return fail()
                }
                var url = Browser.URLObject.createObjectURL(b);
                var audio = new Audio;
                audio.addEventListener("canplaythrough", () => finish(audio), false);
                audio.onerror = function audio_onerror(event) {
                    if (done) return;
                    err("warning: browser could not fully decode audio " + name + ", trying slower base64 approach");

                    function encode64(data) {
                        var BASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
                        var PAD = "=";
                        var ret = "";
                        var leftchar = 0;
                        var leftbits = 0;
                        for (var i = 0; i < data.length; i++) {
                            leftchar = leftchar << 8 | data[i];
                            leftbits += 8;
                            while (leftbits >= 6) {
                                var curr = leftchar >> leftbits - 6 & 63;
                                leftbits -= 6;
                                ret += BASE[curr]
                            }
                        }
                        if (leftbits == 2) {
                            ret += BASE[(leftchar & 3) << 4];
                            ret += PAD + PAD
                        } else if (leftbits == 4) {
                            ret += BASE[(leftchar & 15) << 2];
                            ret += PAD
                        }
                        return ret
                    }
                    audio.src = "data:audio/x-" + name.substr(-3) + ";base64," + encode64(byteArray);
                    finish(audio)
                };
                audio.src = url;
                safeSetTimeout(function() {
                    finish(audio)
                }, 1e4)
            } else {
                return fail()
            }
        };
        Module["preloadPlugins"].push(audioPlugin);

        function pointerLockChange() {
            Browser.pointerLock = document["pointerLockElement"] === Module["canvas"] || document["mozPointerLockElement"] === Module["canvas"] || document["webkitPointerLockElement"] === Module["canvas"] || document["msPointerLockElement"] === Module["canvas"]
        }
        var canvas = Module["canvas"];
        if (canvas) {
            canvas.requestPointerLock = canvas["requestPointerLock"] || canvas["mozRequestPointerLock"] || canvas["webkitRequestPointerLock"] || canvas["msRequestPointerLock"] || (() => {});
            canvas.exitPointerLock = document["exitPointerLock"] || document["mozExitPointerLock"] || document["webkitExitPointerLock"] || document["msExitPointerLock"] || (() => {});
            canvas.exitPointerLock = canvas.exitPointerLock.bind(document);
            document.addEventListener("pointerlockchange", pointerLockChange, false);
            document.addEventListener("mozpointerlockchange", pointerLockChange, false);
            document.addEventListener("webkitpointerlockchange", pointerLockChange, false);
            document.addEventListener("mspointerlockchange", pointerLockChange, false);
            if (Module["elementPointerLock"]) {
                canvas.addEventListener("click", ev => {
                    if (!Browser.pointerLock && Module["canvas"].requestPointerLock) {
                        Module["canvas"].requestPointerLock();
                        ev.preventDefault()
                    }
                }, false)
            }
        }
    },
    handledByPreloadPlugin: function(byteArray, fullname, finish, onerror) {
        Browser.init();
        var handled = false;
        Module["preloadPlugins"].forEach(function(plugin) {
            if (handled) return;
            if (plugin["canHandle"](fullname)) {
                plugin["handle"](byteArray, fullname, finish, onerror);
                handled = true
            }
        });
        return handled
    },
    createContext: function(canvas, useWebGL, setInModule, webGLContextAttributes) {
        if (useWebGL && Module.ctx && canvas == Module.canvas) return Module.ctx;
        var ctx;
        var contextHandle;
        if (useWebGL) {
            var contextAttributes = {
                antialias: false,
                alpha: false,
                majorVersion: 2
            };
            if (webGLContextAttributes) {
                for (var attribute in webGLContextAttributes) {
                    contextAttributes[attribute] = webGLContextAttributes[attribute]
                }
            }
            if (typeof GL != "undefined") {
                contextHandle = GL.createContext(canvas, contextAttributes);
                if (contextHandle) {
                    ctx = GL.getContext(contextHandle).GLctx
                }
            }
        } else {
            ctx = canvas.getContext("2d")
        }
        if (!ctx) return null;
        if (setInModule) {
            if (!useWebGL) assert(typeof GLctx == "undefined", "cannot set in module if GLctx is used, but we are a non-GL context that would replace it");
            Module.ctx = ctx;
            if (useWebGL) GL.makeContextCurrent(contextHandle);
            Module.useWebGL = useWebGL;
            Browser.moduleContextCreatedCallbacks.forEach(function(callback) {
                callback()
            });
            Browser.init()
        }
        return ctx
    },
    destroyContext: function(canvas, useWebGL, setInModule) {},
    fullscreenHandlersInstalled: false,
    lockPointer: undefined,
    resizeCanvas: undefined,
    requestFullscreen: function(lockPointer, resizeCanvas) {
        Browser.lockPointer = lockPointer;
        Browser.resizeCanvas = resizeCanvas;
        if (typeof Browser.lockPointer == "undefined") Browser.lockPointer = true;
        if (typeof Browser.resizeCanvas == "undefined") Browser.resizeCanvas = false;
        var canvas = Module["canvas"];

        function fullscreenChange() {
            Browser.isFullscreen = false;
            var canvasContainer = canvas.parentNode;
            if ((document["fullscreenElement"] || document["mozFullScreenElement"] || document["msFullscreenElement"] || document["webkitFullscreenElement"] || document["webkitCurrentFullScreenElement"]) === canvasContainer) {
                canvas.exitFullscreen = Browser.exitFullscreen;
                if (Browser.lockPointer) canvas.requestPointerLock();
                Browser.isFullscreen = true;
                if (Browser.resizeCanvas) {
                    Browser.setFullscreenCanvasSize()
                } else {
                    Browser.updateCanvasDimensions(canvas)
                }
            } else {
                canvasContainer.parentNode.insertBefore(canvas, canvasContainer);
                canvasContainer.parentNode.removeChild(canvasContainer);
                if (Browser.resizeCanvas) {
                    Browser.setWindowedCanvasSize()
                } else {
                    Browser.updateCanvasDimensions(canvas)
                }
            }
            if (Module["onFullScreen"]) Module["onFullScreen"](Browser.isFullscreen);
            if (Module["onFullscreen"]) Module["onFullscreen"](Browser.isFullscreen)
        }
        if (!Browser.fullscreenHandlersInstalled) {
            Browser.fullscreenHandlersInstalled = true;
            document.addEventListener("fullscreenchange", fullscreenChange, false);
            document.addEventListener("mozfullscreenchange", fullscreenChange, false);
            document.addEventListener("webkitfullscreenchange", fullscreenChange, false);
            document.addEventListener("MSFullscreenChange", fullscreenChange, false)
        }
        var canvasContainer = document.createElement("div");
        canvas.parentNode.insertBefore(canvasContainer, canvas);
        canvasContainer.appendChild(canvas);
        canvasContainer.requestFullscreen = canvasContainer["requestFullscreen"] || canvasContainer["mozRequestFullScreen"] || canvasContainer["msRequestFullscreen"] || (canvasContainer["webkitRequestFullscreen"] ? () => canvasContainer["webkitRequestFullscreen"](Element["ALLOW_KEYBOARD_INPUT"]) : null) || (canvasContainer["webkitRequestFullScreen"] ? () => canvasContainer["webkitRequestFullScreen"](Element["ALLOW_KEYBOARD_INPUT"]) : null);
        canvasContainer.requestFullscreen()
    },
    exitFullscreen: function() {
        if (!Browser.isFullscreen) {
            return false
        }
        var CFS = document["exitFullscreen"] || document["cancelFullScreen"] || document["mozCancelFullScreen"] || document["msExitFullscreen"] || document["webkitCancelFullScreen"] || function() {};
        CFS.apply(document, []);
        return true
    },
    nextRAF: 0,
    fakeRequestAnimationFrame: function(func) {
        var now = Date.now();
        if (Browser.nextRAF === 0) {
            Browser.nextRAF = now + 1e3 / 60
        } else {
            while (now + 2 >= Browser.nextRAF) {
                Browser.nextRAF += 1e3 / 60
            }
        }
        var delay = Math.max(Browser.nextRAF - now, 0);
        setTimeout(func, delay)
    },
    requestAnimationFrame: function(func) {
        if (typeof requestAnimationFrame == "function") {
            requestAnimationFrame(func);
            return
        }
        var RAF = Browser.fakeRequestAnimationFrame;
        RAF(func)
    },
    safeSetTimeout: function(func) {
        return safeSetTimeout(func)
    },
    safeRequestAnimationFrame: function(func) {
        runtimeKeepalivePush();
        return Browser.requestAnimationFrame(function() {
            runtimeKeepalivePop();
            callUserCallback(func)
        })
    },
    getMimetype: function(name) {
        return {
            "jpg": "image/jpeg",
            "jpeg": "image/jpeg",
            "png": "image/png",
            "bmp": "image/bmp",
            "ogg": "audio/ogg",
            "wav": "audio/wav",
            "mp3": "audio/mpeg"
        } [name.substr(name.lastIndexOf(".") + 1)]
    },
    getUserMedia: function(func) {
        if (!window.getUserMedia) {
            window.getUserMedia = navigator["getUserMedia"] || navigator["mozGetUserMedia"]
        }
        window.getUserMedia(func)
    },
    getMovementX: function(event) {
        return event["movementX"] || event["mozMovementX"] || event["webkitMovementX"] || 0
    },
    getMovementY: function(event) {
        return event["movementY"] || event["mozMovementY"] || event["webkitMovementY"] || 0
    },
    getMouseWheelDelta: function(event) {
        var delta = 0;
        switch (event.type) {
            case "DOMMouseScroll":
                delta = event.detail / 3;
                break;
            case "mousewheel":
                delta = event.wheelDelta / 120;
                break;
            case "wheel":
                delta = event.deltaY;
                switch (event.deltaMode) {
                    case 0:
                        delta /= 100;
                        break;
                    case 1:
                        delta /= 3;
                        break;
                    case 2:
                        delta *= 80;
                        break;
                    default:
                        throw "unrecognized mouse wheel delta mode: " + event.deltaMode
                }
                break;
            default:
                throw "unrecognized mouse wheel event: " + event.type
        }
        return delta
    },
    mouseX: 0,
    mouseY: 0,
    mouseMovementX: 0,
    mouseMovementY: 0,
    touches: {},
    lastTouches: {},
    calculateMouseEvent: function(event) {
        if (Browser.pointerLock) {
            if (event.type != "mousemove" && "mozMovementX" in event) {
                Browser.mouseMovementX = Browser.mouseMovementY = 0
            } else {
                Browser.mouseMovementX = Browser.getMovementX(event);
                Browser.mouseMovementY = Browser.getMovementY(event)
            }
            if (typeof SDL != "undefined") {
                Browser.mouseX = SDL.mouseX + Browser.mouseMovementX;
                Browser.mouseY = SDL.mouseY + Browser.mouseMovementY
            } else {
                Browser.mouseX += Browser.mouseMovementX;
                Browser.mouseY += Browser.mouseMovementY
            }
        } else {
            var rect = Module["canvas"].getBoundingClientRect();
            var cw = Module["canvas"].width;
            var ch = Module["canvas"].height;
            var scrollX = typeof window.scrollX != "undefined" ? window.scrollX : window.pageXOffset;
            var scrollY = typeof window.scrollY != "undefined" ? window.scrollY : window.pageYOffset;
            if (event.type === "touchstart" || event.type === "touchend" || event.type === "touchmove") {
                var touch = event.touch;
                if (touch === undefined) {
                    return
                }
                var adjustedX = touch.pageX - (scrollX + rect.left);
                var adjustedY = touch.pageY - (scrollY + rect.top);
                adjustedX = adjustedX * (cw / rect.width);
                adjustedY = adjustedY * (ch / rect.height);
                var coords = {
                    x: adjustedX,
                    y: adjustedY
                };
                if (event.type === "touchstart") {
                    Browser.lastTouches[touch.identifier] = coords;
                    Browser.touches[touch.identifier] = coords
                } else if (event.type === "touchend" || event.type === "touchmove") {
                    var last = Browser.touches[touch.identifier];
                    if (!last) last = coords;
                    Browser.lastTouches[touch.identifier] = last;
                    Browser.touches[touch.identifier] = coords
                }
                return
            }
            var x = event.pageX - (scrollX + rect.left);
            var y = event.pageY - (scrollY + rect.top);
            x = x * (cw / rect.width);
            y = y * (ch / rect.height);
            Browser.mouseMovementX = x - Browser.mouseX;
            Browser.mouseMovementY = y - Browser.mouseY;
            Browser.mouseX = x;
            Browser.mouseY = y
        }
    },
    resizeListeners: [],
    updateResizeListeners: function() {
        var canvas = Module["canvas"];
        Browser.resizeListeners.forEach(function(listener) {
            listener(canvas.width, canvas.height)
        })
    },
    setCanvasSize: function(width, height, noUpdates) {
        var canvas = Module["canvas"];
        Browser.updateCanvasDimensions(canvas, width, height);
        if (!noUpdates) Browser.updateResizeListeners()
    },
    windowedWidth: 0,
    windowedHeight: 0,
    setFullscreenCanvasSize: function() {
        if (typeof SDL != "undefined") {
            var flags = GROWABLE_HEAP_U32()[SDL.screen >> 2];
            flags = flags | 8388608;
            GROWABLE_HEAP_I32()[SDL.screen >> 2] = flags
        }
        Browser.updateCanvasDimensions(Module["canvas"]);
        Browser.updateResizeListeners()
    },
    setWindowedCanvasSize: function() {
        if (typeof SDL != "undefined") {
            var flags = GROWABLE_HEAP_U32()[SDL.screen >> 2];
            flags = flags & ~8388608;
            GROWABLE_HEAP_I32()[SDL.screen >> 2] = flags
        }
        Browser.updateCanvasDimensions(Module["canvas"]);
        Browser.updateResizeListeners()
    },
    updateCanvasDimensions: function(canvas, wNative, hNative) {
        if (wNative && hNative) {
            canvas.widthNative = wNative;
            canvas.heightNative = hNative
        } else {
            wNative = canvas.widthNative;
            hNative = canvas.heightNative
        }
        var w = wNative;
        var h = hNative;
        if (Module["forcedAspectRatio"] && Module["forcedAspectRatio"] > 0) {
            if (w / h < Module["forcedAspectRatio"]) {
                w = Math.round(h * Module["forcedAspectRatio"])
            } else {
                h = Math.round(w / Module["forcedAspectRatio"])
            }
        }
        if ((document["fullscreenElement"] || document["mozFullScreenElement"] || document["msFullscreenElement"] || document["webkitFullscreenElement"] || document["webkitCurrentFullScreenElement"]) === canvas.parentNode && typeof screen != "undefined") {
            var factor = Math.min(screen.width / w, screen.height / h);
            w = Math.round(w * factor);
            h = Math.round(h * factor)
        }
        if (Browser.resizeCanvas) {
            if (canvas.width != w) canvas.width = w;
            if (canvas.height != h) canvas.height = h;
            if (typeof canvas.style != "undefined") {
                canvas.style.removeProperty("width");
                canvas.style.removeProperty("height")
            }
        } else {
            if (canvas.width != wNative) canvas.width = wNative;
            if (canvas.height != hNative) canvas.height = hNative;
            if (typeof canvas.style != "undefined") {
                if (w != wNative || h != hNative) {
                    canvas.style.setProperty("width", w + "px", "important");
                    canvas.style.setProperty("height", h + "px", "important")
                } else {
                    canvas.style.removeProperty("width");
                    canvas.style.removeProperty("height")
                }
            }
        }
    }
};
var AL = {
    QUEUE_INTERVAL: 25,
    QUEUE_LOOKAHEAD: .1,
    DEVICE_NAME: "Emscripten OpenAL",
    CAPTURE_DEVICE_NAME: "Emscripten OpenAL capture",
    ALC_EXTENSIONS: {
        ALC_SOFT_pause_device: true,
        ALC_SOFT_HRTF: true
    },
    AL_EXTENSIONS: {
        AL_EXT_float32: true,
        AL_SOFT_loop_points: true,
        AL_SOFT_source_length: true,
        AL_EXT_source_distance_model: true,
        AL_SOFT_source_spatialize: true
    },
    _alcErr: 0,
    alcErr: 0,
    deviceRefCounts: {},
    alcStringCache: {},
    paused: false,
    stringCache: {},
    contexts: {},
    currentCtx: null,
    buffers: {
        0: {
            id: 0,
            refCount: 0,
            audioBuf: null,
            frequency: 0,
            bytesPerSample: 2,
            channels: 1,
            length: 0
        }
    },
    paramArray: [],
    _nextId: 1,
    newId: function() {
        return AL.freeIds.length > 0 ? AL.freeIds.pop() : AL._nextId++
    },
    freeIds: [],
    scheduleContextAudio: function(ctx) {
        if (Browser.mainLoop.timingMode === 1 && document["visibilityState"] != "visible") {
            return
        }
        for (var i in ctx.sources) {
            AL.scheduleSourceAudio(ctx.sources[i])
        }
    },
    scheduleSourceAudio: function(src, lookahead) {
        if (Browser.mainLoop.timingMode === 1 && document["visibilityState"] != "visible") {
            return
        }
        if (src.state !== 4114) {
            return
        }
        var currentTime = AL.updateSourceTime(src);
        var startTime = src.bufStartTime;
        var startOffset = src.bufOffset;
        var bufCursor = src.bufsProcessed;
        for (var i = 0; i < src.audioQueue.length; i++) {
            var audioSrc = src.audioQueue[i];
            startTime = audioSrc._startTime + audioSrc._duration;
            startOffset = 0;
            bufCursor += audioSrc._skipCount + 1
        }
        if (!lookahead) {
            lookahead = AL.QUEUE_LOOKAHEAD
        }
        var lookaheadTime = currentTime + lookahead;
        var skipCount = 0;
        while (startTime < lookaheadTime) {
            if (bufCursor >= src.bufQueue.length) {
                if (src.looping) {
                    bufCursor %= src.bufQueue.length
                } else {
                    break
                }
            }
            var buf = src.bufQueue[bufCursor % src.bufQueue.length];
            if (buf.length === 0) {
                skipCount++;
                if (skipCount === src.bufQueue.length) {
                    break
                }
            } else {
                var audioSrc = src.context.audioCtx.createBufferSource();
                audioSrc.buffer = buf.audioBuf;
                audioSrc.playbackRate.value = src.playbackRate;
                if (buf.audioBuf._loopStart || buf.audioBuf._loopEnd) {
                    audioSrc.loopStart = buf.audioBuf._loopStart;
                    audioSrc.loopEnd = buf.audioBuf._loopEnd
                }
                var duration = 0;
                if (src.type === 4136 && src.looping) {
                    duration = Number.POSITIVE_INFINITY;
                    audioSrc.loop = true;
                    if (buf.audioBuf._loopStart) {
                        audioSrc.loopStart = buf.audioBuf._loopStart
                    }
                    if (buf.audioBuf._loopEnd) {
                        audioSrc.loopEnd = buf.audioBuf._loopEnd
                    }
                } else {
                    duration = (buf.audioBuf.duration - startOffset) / src.playbackRate
                }
                audioSrc._startOffset = startOffset;
                audioSrc._duration = duration;
                audioSrc._skipCount = skipCount;
                skipCount = 0;
                audioSrc.connect(src.gain);
                if (typeof audioSrc.start != "undefined") {
                    startTime = Math.max(startTime, src.context.audioCtx.currentTime);
                    audioSrc.start(startTime, startOffset)
                } else if (typeof audioSrc.noteOn != "undefined") {
                    startTime = Math.max(startTime, src.context.audioCtx.currentTime);
                    audioSrc.noteOn(startTime)
                }
                audioSrc._startTime = startTime;
                src.audioQueue.push(audioSrc);
                startTime += duration
            }
            startOffset = 0;
            bufCursor++
        }
    },
    updateSourceTime: function(src) {
        var currentTime = src.context.audioCtx.currentTime;
        if (src.state !== 4114) {
            return currentTime
        }
        if (!isFinite(src.bufStartTime)) {
            src.bufStartTime = currentTime - src.bufOffset / src.playbackRate;
            src.bufOffset = 0
        }
        var nextStartTime = 0;
        while (src.audioQueue.length) {
            var audioSrc = src.audioQueue[0];
            src.bufsProcessed += audioSrc._skipCount;
            nextStartTime = audioSrc._startTime + audioSrc._duration;
            if (currentTime < nextStartTime) {
                break
            }
            src.audioQueue.shift();
            src.bufStartTime = nextStartTime;
            src.bufOffset = 0;
            src.bufsProcessed++
        }
        if (src.bufsProcessed >= src.bufQueue.length && !src.looping) {
            AL.setSourceState(src, 4116)
        } else if (src.type === 4136 && src.looping) {
            var buf = src.bufQueue[0];
            if (buf.length === 0) {
                src.bufOffset = 0
            } else {
                var delta = (currentTime - src.bufStartTime) * src.playbackRate;
                var loopStart = buf.audioBuf._loopStart || 0;
                var loopEnd = buf.audioBuf._loopEnd || buf.audioBuf.duration;
                if (loopEnd <= loopStart) {
                    loopEnd = buf.audioBuf.duration
                }
                if (delta < loopEnd) {
                    src.bufOffset = delta
                } else {
                    src.bufOffset = loopStart + (delta - loopStart) % (loopEnd - loopStart)
                }
            }
        } else if (src.audioQueue[0]) {
            src.bufOffset = (currentTime - src.audioQueue[0]._startTime) * src.playbackRate
        } else {
            if (src.type !== 4136 && src.looping) {
                var srcDuration = AL.sourceDuration(src) / src.playbackRate;
                if (srcDuration > 0) {
                    src.bufStartTime += Math.floor((currentTime - src.bufStartTime) / srcDuration) * srcDuration
                }
            }
            for (var i = 0; i < src.bufQueue.length; i++) {
                if (src.bufsProcessed >= src.bufQueue.length) {
                    if (src.looping) {
                        src.bufsProcessed %= src.bufQueue.length
                    } else {
                        AL.setSourceState(src, 4116);
                        break
                    }
                }
                var buf = src.bufQueue[src.bufsProcessed];
                if (buf.length > 0) {
                    nextStartTime = src.bufStartTime + buf.audioBuf.duration / src.playbackRate;
                    if (currentTime < nextStartTime) {
                        src.bufOffset = (currentTime - src.bufStartTime) * src.playbackRate;
                        break
                    }
                    src.bufStartTime = nextStartTime
                }
                src.bufOffset = 0;
                src.bufsProcessed++
            }
        }
        return currentTime
    },
    cancelPendingSourceAudio: function(src) {
        AL.updateSourceTime(src);
        for (var i = 1; i < src.audioQueue.length; i++) {
            var audioSrc = src.audioQueue[i];
            audioSrc.stop()
        }
        if (src.audioQueue.length > 1) {
            src.audioQueue.length = 1
        }
    },
    stopSourceAudio: function(src) {
        for (var i = 0; i < src.audioQueue.length; i++) {
            src.audioQueue[i].stop()
        }
        src.audioQueue.length = 0
    },
    setSourceState: function(src, state) {
        if (state === 4114) {
            if (src.state === 4114 || src.state == 4116) {
                src.bufsProcessed = 0;
                src.bufOffset = 0
            } else {}
            AL.stopSourceAudio(src);
            src.state = 4114;
            src.bufStartTime = Number.NEGATIVE_INFINITY;
            AL.scheduleSourceAudio(src)
        } else if (state === 4115) {
            if (src.state === 4114) {
                AL.updateSourceTime(src);
                AL.stopSourceAudio(src);
                src.state = 4115
            }
        } else if (state === 4116) {
            if (src.state !== 4113) {
                src.state = 4116;
                src.bufsProcessed = src.bufQueue.length;
                src.bufStartTime = Number.NEGATIVE_INFINITY;
                src.bufOffset = 0;
                AL.stopSourceAudio(src)
            }
        } else if (state === 4113) {
            if (src.state !== 4113) {
                src.state = 4113;
                src.bufsProcessed = 0;
                src.bufStartTime = Number.NEGATIVE_INFINITY;
                src.bufOffset = 0;
                AL.stopSourceAudio(src)
            }
        }
    },
    initSourcePanner: function(src) {
        if (src.type === 4144) {
            return
        }
        var templateBuf = AL.buffers[0];
        for (var i = 0; i < src.bufQueue.length; i++) {
            if (src.bufQueue[i].id !== 0) {
                templateBuf = src.bufQueue[i];
                break
            }
        }
        if (src.spatialize === 1 || src.spatialize === 2 && templateBuf.channels === 1) {
            if (src.panner) {
                return
            }
            src.panner = src.context.audioCtx.createPanner();
            AL.updateSourceGlobal(src);
            AL.updateSourceSpace(src);
            src.panner.connect(src.context.gain);
            src.gain.disconnect();
            src.gain.connect(src.panner)
        } else {
            if (!src.panner) {
                return
            }
            src.panner.disconnect();
            src.gain.disconnect();
            src.gain.connect(src.context.gain);
            src.panner = null
        }
    },
    updateContextGlobal: function(ctx) {
        for (var i in ctx.sources) {
            AL.updateSourceGlobal(ctx.sources[i])
        }
    },
    updateSourceGlobal: function(src) {
        var panner = src.panner;
        if (!panner) {
            return
        }
        panner.refDistance = src.refDistance;
        panner.maxDistance = src.maxDistance;
        panner.rolloffFactor = src.rolloffFactor;
        panner.panningModel = src.context.hrtf ? "HRTF" : "equalpower";
        var distanceModel = src.context.sourceDistanceModel ? src.distanceModel : src.context.distanceModel;
        switch (distanceModel) {
            case 0:
                panner.distanceModel = "inverse";
                panner.refDistance = 340282e33;
                break;
            case 53249:
            case 53250:
                panner.distanceModel = "inverse";
                break;
            case 53251:
            case 53252:
                panner.distanceModel = "linear";
                break;
            case 53253:
            case 53254:
                panner.distanceModel = "exponential";
                break
        }
    },
    updateListenerSpace: function(ctx) {
        var listener = ctx.audioCtx.listener;
        if (listener.positionX) {
            listener.positionX.value = ctx.listener.position[0];
            listener.positionY.value = ctx.listener.position[1];
            listener.positionZ.value = ctx.listener.position[2]
        } else {
            listener.setPosition(ctx.listener.position[0], ctx.listener.position[1], ctx.listener.position[2])
        }
        if (listener.forwardX) {
            listener.forwardX.value = ctx.listener.direction[0];
            listener.forwardY.value = ctx.listener.direction[1];
            listener.forwardZ.value = ctx.listener.direction[2];
            listener.upX.value = ctx.listener.up[0];
            listener.upY.value = ctx.listener.up[1];
            listener.upZ.value = ctx.listener.up[2]
        } else {
            listener.setOrientation(ctx.listener.direction[0], ctx.listener.direction[1], ctx.listener.direction[2], ctx.listener.up[0], ctx.listener.up[1], ctx.listener.up[2])
        }
        for (var i in ctx.sources) {
            AL.updateSourceSpace(ctx.sources[i])
        }
    },
    updateSourceSpace: function(src) {
        if (!src.panner) {
            return
        }
        var panner = src.panner;
        var posX = src.position[0];
        var posY = src.position[1];
        var posZ = src.position[2];
        var dirX = src.direction[0];
        var dirY = src.direction[1];
        var dirZ = src.direction[2];
        var listener = src.context.listener;
        var lPosX = listener.position[0];
        var lPosY = listener.position[1];
        var lPosZ = listener.position[2];
        if (src.relative) {
            var lBackX = -listener.direction[0];
            var lBackY = -listener.direction[1];
            var lBackZ = -listener.direction[2];
            var lUpX = listener.up[0];
            var lUpY = listener.up[1];
            var lUpZ = listener.up[2];
            var inverseMagnitude = function(x, y, z) {
                var length = Math.sqrt(x * x + y * y + z * z);
                if (length < Number.EPSILON) {
                    return 0
                }
                return 1 / length
            };
            var invMag = inverseMagnitude(lBackX, lBackY, lBackZ);
            lBackX *= invMag;
            lBackY *= invMag;
            lBackZ *= invMag;
            invMag = inverseMagnitude(lUpX, lUpY, lUpZ);
            lUpX *= invMag;
            lUpY *= invMag;
            lUpZ *= invMag;
            var lRightX = lUpY * lBackZ - lUpZ * lBackY;
            var lRightY = lUpZ * lBackX - lUpX * lBackZ;
            var lRightZ = lUpX * lBackY - lUpY * lBackX;
            invMag = inverseMagnitude(lRightX, lRightY, lRightZ);
            lRightX *= invMag;
            lRightY *= invMag;
            lRightZ *= invMag;
            lUpX = lBackY * lRightZ - lBackZ * lRightY;
            lUpY = lBackZ * lRightX - lBackX * lRightZ;
            lUpZ = lBackX * lRightY - lBackY * lRightX;
            var oldX = dirX;
            var oldY = dirY;
            var oldZ = dirZ;
            dirX = oldX * lRightX + oldY * lUpX + oldZ * lBackX;
            dirY = oldX * lRightY + oldY * lUpY + oldZ * lBackY;
            dirZ = oldX * lRightZ + oldY * lUpZ + oldZ * lBackZ;
            oldX = posX;
            oldY = posY;
            oldZ = posZ;
            posX = oldX * lRightX + oldY * lUpX + oldZ * lBackX;
            posY = oldX * lRightY + oldY * lUpY + oldZ * lBackY;
            posZ = oldX * lRightZ + oldY * lUpZ + oldZ * lBackZ;
            posX += lPosX;
            posY += lPosY;
            posZ += lPosZ
        }
        if (panner.positionX) {
            if (posX != panner.positionX.value) panner.positionX.value = posX;
            if (posY != panner.positionY.value) panner.positionY.value = posY;
            if (posZ != panner.positionZ.value) panner.positionZ.value = posZ
        } else {
            panner.setPosition(posX, posY, posZ)
        }
        if (panner.orientationX) {
            if (dirX != panner.orientationX.value) panner.orientationX.value = dirX;
            if (dirY != panner.orientationY.value) panner.orientationY.value = dirY;
            if (dirZ != panner.orientationZ.value) panner.orientationZ.value = dirZ
        } else {
            panner.setOrientation(dirX, dirY, dirZ)
        }
        var oldShift = src.dopplerShift;
        var velX = src.velocity[0];
        var velY = src.velocity[1];
        var velZ = src.velocity[2];
        var lVelX = listener.velocity[0];
        var lVelY = listener.velocity[1];
        var lVelZ = listener.velocity[2];
        if (posX === lPosX && posY === lPosY && posZ === lPosZ || velX === lVelX && velY === lVelY && velZ === lVelZ) {
            src.dopplerShift = 1
        } else {
            var speedOfSound = src.context.speedOfSound;
            var dopplerFactor = src.context.dopplerFactor;
            var slX = lPosX - posX;
            var slY = lPosY - posY;
            var slZ = lPosZ - posZ;
            var magSl = Math.sqrt(slX * slX + slY * slY + slZ * slZ);
            var vls = (slX * lVelX + slY * lVelY + slZ * lVelZ) / magSl;
            var vss = (slX * velX + slY * velY + slZ * velZ) / magSl;
            vls = Math.min(vls, speedOfSound / dopplerFactor);
            vss = Math.min(vss, speedOfSound / dopplerFactor);
            src.dopplerShift = (speedOfSound - dopplerFactor * vls) / (speedOfSound - dopplerFactor * vss)
        }
        if (src.dopplerShift !== oldShift) {
            AL.updateSourceRate(src)
        }
    },
    updateSourceRate: function(src) {
        if (src.state === 4114) {
            AL.cancelPendingSourceAudio(src);
            var audioSrc = src.audioQueue[0];
            if (!audioSrc) {
                return
            }
            var duration;
            if (src.type === 4136 && src.looping) {
                duration = Number.POSITIVE_INFINITY
            } else {
                duration = (audioSrc.buffer.duration - audioSrc._startOffset) / src.playbackRate
            }
            audioSrc._duration = duration;
            audioSrc.playbackRate.value = src.playbackRate;
            AL.scheduleSourceAudio(src)
        }
    },
    sourceDuration: function(src) {
        var length = 0;
        for (var i = 0; i < src.bufQueue.length; i++) {
            var audioBuf = src.bufQueue[i].audioBuf;
            length += audioBuf ? audioBuf.duration : 0
        }
        return length
    },
    sourceTell: function(src) {
        AL.updateSourceTime(src);
        var offset = 0;
        for (var i = 0; i < src.bufsProcessed; i++) {
            if (src.bufQueue[i].audioBuf) {
                offset += src.bufQueue[i].audioBuf.duration
            }
        }
        offset += src.bufOffset;
        return offset
    },
    sourceSeek: function(src, offset) {
        var playing = src.state == 4114;
        if (playing) {
            AL.setSourceState(src, 4113)
        }
        if (src.bufQueue[src.bufsProcessed].audioBuf !== null) {
            src.bufsProcessed = 0;
            while (offset > src.bufQueue[src.bufsProcessed].audioBuf.duration) {
                offset -= src.bufQueue[src.bufsProcessed].audiobuf.duration;
                src.bufsProcessed++
            }
            src.bufOffset = offset
        }
        if (playing) {
            AL.setSourceState(src, 4114)
        }
    },
    getGlobalParam: function(funcname, param) {
        if (!AL.currentCtx) {
            return null
        }
        switch (param) {
            case 49152:
                return AL.currentCtx.dopplerFactor;
            case 49155:
                return AL.currentCtx.speedOfSound;
            case 53248:
                return AL.currentCtx.distanceModel;
            default:
                AL.currentCtx.err = 40962;
                return null
        }
    },
    setGlobalParam: function(funcname, param, value) {
        if (!AL.currentCtx) {
            return
        }
        switch (param) {
            case 49152:
                if (!Number.isFinite(value) || value < 0) {
                    AL.currentCtx.err = 40963;
                    return
                }
                AL.currentCtx.dopplerFactor = value;
                AL.updateListenerSpace(AL.currentCtx);
                break;
            case 49155:
                if (!Number.isFinite(value) || value <= 0) {
                    AL.currentCtx.err = 40963;
                    return
                }
                AL.currentCtx.speedOfSound = value;
                AL.updateListenerSpace(AL.currentCtx);
                break;
            case 53248:
                switch (value) {
                    case 0:
                    case 53249:
                    case 53250:
                    case 53251:
                    case 53252:
                    case 53253:
                    case 53254:
                        AL.currentCtx.distanceModel = value;
                        AL.updateContextGlobal(AL.currentCtx);
                        break;
                    default:
                        AL.currentCtx.err = 40963;
                        return
                }
                break;
            default:
                AL.currentCtx.err = 40962;
                return
        }
    },
    getListenerParam: function(funcname, param) {
        if (!AL.currentCtx) {
            return null
        }
        switch (param) {
            case 4100:
                return AL.currentCtx.listener.position;
            case 4102:
                return AL.currentCtx.listener.velocity;
            case 4111:
                return AL.currentCtx.listener.direction.concat(AL.currentCtx.listener.up);
            case 4106:
                return AL.currentCtx.gain.gain.value;
            default:
                AL.currentCtx.err = 40962;
                return null
        }
    },
    setListenerParam: function(funcname, param, value) {
        if (!AL.currentCtx) {
            return
        }
        if (value === null) {
            AL.currentCtx.err = 40962;
            return
        }
        var listener = AL.currentCtx.listener;
        switch (param) {
            case 4100:
                if (!Number.isFinite(value[0]) || !Number.isFinite(value[1]) || !Number.isFinite(value[2])) {
                    AL.currentCtx.err = 40963;
                    return
                }
                listener.position[0] = value[0];
                listener.position[1] = value[1];
                listener.position[2] = value[2];
                AL.updateListenerSpace(AL.currentCtx);
                break;
            case 4102:
                if (!Number.isFinite(value[0]) || !Number.isFinite(value[1]) || !Number.isFinite(value[2])) {
                    AL.currentCtx.err = 40963;
                    return
                }
                listener.velocity[0] = value[0];
                listener.velocity[1] = value[1];
                listener.velocity[2] = value[2];
                AL.updateListenerSpace(AL.currentCtx);
                break;
            case 4106:
                if (!Number.isFinite(value) || value < 0) {
                    AL.currentCtx.err = 40963;
                    return
                }
                AL.currentCtx.gain.gain.value = value;
                break;
            case 4111:
                if (!Number.isFinite(value[0]) || !Number.isFinite(value[1]) || !Number.isFinite(value[2]) || !Number.isFinite(value[3]) || !Number.isFinite(value[4]) || !Number.isFinite(value[5])) {
                    AL.currentCtx.err = 40963;
                    return
                }
                listener.direction[0] = value[0];
                listener.direction[1] = value[1];
                listener.direction[2] = value[2];
                listener.up[0] = value[3];
                listener.up[1] = value[4];
                listener.up[2] = value[5];
                AL.updateListenerSpace(AL.currentCtx);
                break;
            default:
                AL.currentCtx.err = 40962;
                return
        }
    },
    getBufferParam: function(funcname, bufferId, param) {
        if (!AL.currentCtx) {
            return
        }
        var buf = AL.buffers[bufferId];
        if (!buf || bufferId === 0) {
            AL.currentCtx.err = 40961;
            return
        }
        switch (param) {
            case 8193:
                return buf.frequency;
            case 8194:
                return buf.bytesPerSample * 8;
            case 8195:
                return buf.channels;
            case 8196:
                return buf.length * buf.bytesPerSample * buf.channels;
            case 8213:
                if (buf.length === 0) {
                    return [0, 0]
                }
                return [(buf.audioBuf._loopStart || 0) * buf.frequency, (buf.audioBuf._loopEnd || buf.length) * buf.frequency];
            default:
                AL.currentCtx.err = 40962;
                return null
        }
    },
    setBufferParam: function(funcname, bufferId, param, value) {
        if (!AL.currentCtx) {
            return
        }
        var buf = AL.buffers[bufferId];
        if (!buf || bufferId === 0) {
            AL.currentCtx.err = 40961;
            return
        }
        if (value === null) {
            AL.currentCtx.err = 40962;
            return
        }
        switch (param) {
            case 8196:
                if (value !== 0) {
                    AL.currentCtx.err = 40963;
                    return
                }
                break;
            case 8213:
                if (value[0] < 0 || value[0] > buf.length || value[1] < 0 || value[1] > buf.Length || value[0] >= value[1]) {
                    AL.currentCtx.err = 40963;
                    return
                }
                if (buf.refCount > 0) {
                    AL.currentCtx.err = 40964;
                    return
                }
                if (buf.audioBuf) {
                    buf.audioBuf._loopStart = value[0] / buf.frequency;
                    buf.audioBuf._loopEnd = value[1] / buf.frequency
                }
                break;
            default:
                AL.currentCtx.err = 40962;
                return
        }
    },
    getSourceParam: function(funcname, sourceId, param) {
        if (!AL.currentCtx) {
            return null
        }
        var src = AL.currentCtx.sources[sourceId];
        if (!src) {
            AL.currentCtx.err = 40961;
            return null
        }
        switch (param) {
            case 514:
                return src.relative;
            case 4097:
                return src.coneInnerAngle;
            case 4098:
                return src.coneOuterAngle;
            case 4099:
                return src.pitch;
            case 4100:
                return src.position;
            case 4101:
                return src.direction;
            case 4102:
                return src.velocity;
            case 4103:
                return src.looping;
            case 4105:
                if (src.type === 4136) {
                    return src.bufQueue[0].id
                }
                return 0;
            case 4106:
                return src.gain.gain.value;
            case 4109:
                return src.minGain;
            case 4110:
                return src.maxGain;
            case 4112:
                return src.state;
            case 4117:
                if (src.bufQueue.length === 1 && src.bufQueue[0].id === 0) {
                    return 0
                }
                return src.bufQueue.length;
            case 4118:
                if (src.bufQueue.length === 1 && src.bufQueue[0].id === 0 || src.looping) {
                    return 0
                }
                return src.bufsProcessed;
            case 4128:
                return src.refDistance;
            case 4129:
                return src.rolloffFactor;
            case 4130:
                return src.coneOuterGain;
            case 4131:
                return src.maxDistance;
            case 4132:
                return AL.sourceTell(src);
            case 4133:
                var offset = AL.sourceTell(src);
                if (offset > 0) {
                    offset *= src.bufQueue[0].frequency
                }
                return offset;
            case 4134:
                var offset = AL.sourceTell(src);
                if (offset > 0) {
                    offset *= src.bufQueue[0].frequency * src.bufQueue[0].bytesPerSample
                }
                return offset;
            case 4135:
                return src.type;
            case 4628:
                return src.spatialize;
            case 8201:
                var length = 0;
                var bytesPerFrame = 0;
                for (var i = 0; i < src.bufQueue.length; i++) {
                    length += src.bufQueue[i].length;
                    if (src.bufQueue[i].id !== 0) {
                        bytesPerFrame = src.bufQueue[i].bytesPerSample * src.bufQueue[i].channels
                    }
                }
                return length * bytesPerFrame;
            case 8202:
                var length = 0;
                for (var i = 0; i < src.bufQueue.length; i++) {
                    length += src.bufQueue[i].length
                }
                return length;
            case 8203:
                return AL.sourceDuration(src);
            case 53248:
                return src.distanceModel;
            default:
                AL.currentCtx.err = 40962;
                return null
        }
    },
    setSourceParam: function(funcname, sourceId, param, value) {
        if (!AL.currentCtx) {
            return
        }
        var src = AL.currentCtx.sources[sourceId];
        if (!src) {
            AL.currentCtx.err = 40961;
            return
        }
        if (value === null) {
            AL.currentCtx.err = 40962;
            return
        }
        switch (param) {
            case 514:
                if (value === 1) {
                    src.relative = true;
                    AL.updateSourceSpace(src)
                } else if (value === 0) {
                    src.relative = false;
                    AL.updateSourceSpace(src)
                } else {
                    AL.currentCtx.err = 40963;
                    return
                }
                break;
            case 4097:
                if (!Number.isFinite(value)) {
                    AL.currentCtx.err = 40963;
                    return
                }
                src.coneInnerAngle = value;
                if (src.panner) {
                    src.panner.coneInnerAngle = value % 360
                }
                break;
            case 4098:
                if (!Number.isFinite(value)) {
                    AL.currentCtx.err = 40963;
                    return
                }
                src.coneOuterAngle = value;
                if (src.panner) {
                    src.panner.coneOuterAngle = value % 360
                }
                break;
            case 4099:
                if (!Number.isFinite(value) || value <= 0) {
                    AL.currentCtx.err = 40963;
                    return
                }
                if (src.pitch === value) {
                    break
                }
                src.pitch = value;
                AL.updateSourceRate(src);
                break;
            case 4100:
                if (!Number.isFinite(value[0]) || !Number.isFinite(value[1]) || !Number.isFinite(value[2])) {
                    AL.currentCtx.err = 40963;
                    return
                }
                src.position[0] = value[0];
                src.position[1] = value[1];
                src.position[2] = value[2];
                AL.updateSourceSpace(src);
                break;
            case 4101:
                if (!Number.isFinite(value[0]) || !Number.isFinite(value[1]) || !Number.isFinite(value[2])) {
                    AL.currentCtx.err = 40963;
                    return
                }
                src.direction[0] = value[0];
                src.direction[1] = value[1];
                src.direction[2] = value[2];
                AL.updateSourceSpace(src);
                break;
            case 4102:
                if (!Number.isFinite(value[0]) || !Number.isFinite(value[1]) || !Number.isFinite(value[2])) {
                    AL.currentCtx.err = 40963;
                    return
                }
                src.velocity[0] = value[0];
                src.velocity[1] = value[1];
                src.velocity[2] = value[2];
                AL.updateSourceSpace(src);
                break;
            case 4103:
                if (value === 1) {
                    src.looping = true;
                    AL.updateSourceTime(src);
                    if (src.type === 4136 && src.audioQueue.length > 0) {
                        var audioSrc = src.audioQueue[0];
                        audioSrc.loop = true;
                        audioSrc._duration = Number.POSITIVE_INFINITY
                    }
                } else if (value === 0) {
                    src.looping = false;
                    var currentTime = AL.updateSourceTime(src);
                    if (src.type === 4136 && src.audioQueue.length > 0) {
                        var audioSrc = src.audioQueue[0];
                        audioSrc.loop = false;
                        audioSrc._duration = src.bufQueue[0].audioBuf.duration / src.playbackRate;
                        audioSrc._startTime = currentTime - src.bufOffset / src.playbackRate
                    }
                } else {
                    AL.currentCtx.err = 40963;
                    return
                }
                break;
            case 4105:
                if (src.state === 4114 || src.state === 4115) {
                    AL.currentCtx.err = 40964;
                    return
                }
                if (value === 0) {
                    for (var i in src.bufQueue) {
                        src.bufQueue[i].refCount--
                    }
                    src.bufQueue.length = 1;
                    src.bufQueue[0] = AL.buffers[0];
                    src.bufsProcessed = 0;
                    src.type = 4144
                } else {
                    var buf = AL.buffers[value];
                    if (!buf) {
                        AL.currentCtx.err = 40963;
                        return
                    }
                    for (var i in src.bufQueue) {
                        src.bufQueue[i].refCount--
                    }
                    src.bufQueue.length = 0;
                    buf.refCount++;
                    src.bufQueue = [buf];
                    src.bufsProcessed = 0;
                    src.type = 4136
                }
                AL.initSourcePanner(src);
                AL.scheduleSourceAudio(src);
                break;
            case 4106:
                if (!Number.isFinite(value) || value < 0) {
                    AL.currentCtx.err = 40963;
                    return
                }
                src.gain.gain.value = value;
                break;
            case 4109:
                if (!Number.isFinite(value) || value < 0 || value > Math.min(src.maxGain, 1)) {
                    AL.currentCtx.err = 40963;
                    return
                }
                src.minGain = value;
                break;
            case 4110:
                if (!Number.isFinite(value) || value < Math.max(0, src.minGain) || value > 1) {
                    AL.currentCtx.err = 40963;
                    return
                }
                src.maxGain = value;
                break;
            case 4128:
                if (!Number.isFinite(value) || value < 0) {
                    AL.currentCtx.err = 40963;
                    return
                }
                src.refDistance = value;
                if (src.panner) {
                    src.panner.refDistance = value
                }
                break;
            case 4129:
                if (!Number.isFinite(value) || value < 0) {
                    AL.currentCtx.err = 40963;
                    return
                }
                src.rolloffFactor = value;
                if (src.panner) {
                    src.panner.rolloffFactor = value
                }
                break;
            case 4130:
                if (!Number.isFinite(value) || value < 0 || value > 1) {
                    AL.currentCtx.err = 40963;
                    return
                }
                src.coneOuterGain = value;
                if (src.panner) {
                    src.panner.coneOuterGain = value
                }
                break;
            case 4131:
                if (!Number.isFinite(value) || value < 0) {
                    AL.currentCtx.err = 40963;
                    return
                }
                src.maxDistance = value;
                if (src.panner) {
                    src.panner.maxDistance = value
                }
                break;
            case 4132:
                if (value < 0 || value > AL.sourceDuration(src)) {
                    AL.currentCtx.err = 40963;
                    return
                }
                AL.sourceSeek(src, value);
                break;
            case 4133:
                var srcLen = AL.sourceDuration(src);
                if (srcLen > 0) {
                    var frequency;
                    for (var bufId in src.bufQueue) {
                        if (bufId) {
                            frequency = src.bufQueue[bufId].frequency;
                            break
                        }
                    }
                    value /= frequency
                }
                if (value < 0 || value > srcLen) {
                    AL.currentCtx.err = 40963;
                    return
                }
                AL.sourceSeek(src, value);
                break;
            case 4134:
                var srcLen = AL.sourceDuration(src);
                if (srcLen > 0) {
                    var bytesPerSec;
                    for (var bufId in src.bufQueue) {
                        if (bufId) {
                            var buf = src.bufQueue[bufId];
                            bytesPerSec = buf.frequency * buf.bytesPerSample * buf.channels;
                            break
                        }
                    }
                    value /= bytesPerSec
                }
                if (value < 0 || value > srcLen) {
                    AL.currentCtx.err = 40963;
                    return
                }
                AL.sourceSeek(src, value);
                break;
            case 4628:
                if (value !== 0 && value !== 1 && value !== 2) {
                    AL.currentCtx.err = 40963;
                    return
                }
                src.spatialize = value;
                AL.initSourcePanner(src);
                break;
            case 8201:
            case 8202:
            case 8203:
                AL.currentCtx.err = 40964;
                break;
            case 53248:
                switch (value) {
                    case 0:
                    case 53249:
                    case 53250:
                    case 53251:
                    case 53252:
                    case 53253:
                    case 53254:
                        src.distanceModel = value;
                        if (AL.currentCtx.sourceDistanceModel) {
                            AL.updateContextGlobal(AL.currentCtx)
                        }
                        break;
                    default:
                        AL.currentCtx.err = 40963;
                        return
                }
                break;
            default:
                AL.currentCtx.err = 40962;
                return
        }
    },
    captures: {},
    sharedCaptureAudioCtx: null,
    requireValidCaptureDevice: function(deviceId, funcname) {
        if (deviceId === 0) {
            AL.alcErr = 40961;
            return null
        }
        var c = AL.captures[deviceId];
        if (!c) {
            AL.alcErr = 40961;
            return null
        }
        var err = c.mediaStreamError;
        if (err) {
            AL.alcErr = 40961;
            return null
        }
        return c
    }
};

function _alBufferData(bufferId, format, pData, size, freq) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(18, 1, bufferId, format, pData, size, freq);
    if (!AL.currentCtx) {
        return
    }
    var buf = AL.buffers[bufferId];
    if (!buf) {
        AL.currentCtx.err = 40963;
        return
    }
    if (freq <= 0) {
        AL.currentCtx.err = 40963;
        return
    }
    var audioBuf = null;
    try {
        switch (format) {
            case 4352:
                if (size > 0) {
                    audioBuf = AL.currentCtx.audioCtx.createBuffer(1, size, freq);
                    var channel0 = audioBuf.getChannelData(0);
                    for (var i = 0; i < size; ++i) {
                        channel0[i] = GROWABLE_HEAP_U8()[pData++] * .0078125 - 1
                    }
                }
                buf.bytesPerSample = 1;
                buf.channels = 1;
                buf.length = size;
                break;
            case 4353:
                if (size > 0) {
                    audioBuf = AL.currentCtx.audioCtx.createBuffer(1, size >> 1, freq);
                    var channel0 = audioBuf.getChannelData(0);
                    pData >>= 1;
                    for (var i = 0; i < size >> 1; ++i) {
                        channel0[i] = GROWABLE_HEAP_I16()[pData++] * 30517578125e-15
                    }
                }
                buf.bytesPerSample = 2;
                buf.channels = 1;
                buf.length = size >> 1;
                break;
            case 4354:
                if (size > 0) {
                    audioBuf = AL.currentCtx.audioCtx.createBuffer(2, size >> 1, freq);
                    var channel0 = audioBuf.getChannelData(0);
                    var channel1 = audioBuf.getChannelData(1);
                    for (var i = 0; i < size >> 1; ++i) {
                        channel0[i] = GROWABLE_HEAP_U8()[pData++] * .0078125 - 1;
                        channel1[i] = GROWABLE_HEAP_U8()[pData++] * .0078125 - 1
                    }
                }
                buf.bytesPerSample = 1;
                buf.channels = 2;
                buf.length = size >> 1;
                break;
            case 4355:
                if (size > 0) {
                    audioBuf = AL.currentCtx.audioCtx.createBuffer(2, size >> 2, freq);
                    var channel0 = audioBuf.getChannelData(0);
                    var channel1 = audioBuf.getChannelData(1);
                    pData >>= 1;
                    for (var i = 0; i < size >> 2; ++i) {
                        channel0[i] = GROWABLE_HEAP_I16()[pData++] * 30517578125e-15;
                        channel1[i] = GROWABLE_HEAP_I16()[pData++] * 30517578125e-15
                    }
                }
                buf.bytesPerSample = 2;
                buf.channels = 2;
                buf.length = size >> 2;
                break;
            case 65552:
                if (size > 0) {
                    audioBuf = AL.currentCtx.audioCtx.createBuffer(1, size >> 2, freq);
                    var channel0 = audioBuf.getChannelData(0);
                    pData >>= 2;
                    for (var i = 0; i < size >> 2; ++i) {
                        channel0[i] = GROWABLE_HEAP_F32()[pData++]
                    }
                }
                buf.bytesPerSample = 4;
                buf.channels = 1;
                buf.length = size >> 2;
                break;
            case 65553:
                if (size > 0) {
                    audioBuf = AL.currentCtx.audioCtx.createBuffer(2, size >> 3, freq);
                    var channel0 = audioBuf.getChannelData(0);
                    var channel1 = audioBuf.getChannelData(1);
                    pData >>= 2;
                    for (var i = 0; i < size >> 3; ++i) {
                        channel0[i] = GROWABLE_HEAP_F32()[pData++];
                        channel1[i] = GROWABLE_HEAP_F32()[pData++]
                    }
                }
                buf.bytesPerSample = 4;
                buf.channels = 2;
                buf.length = size >> 3;
                break;
            default:
                AL.currentCtx.err = 40963;
                return
        }
        buf.frequency = freq;
        buf.audioBuf = audioBuf
    } catch (e) {
        AL.currentCtx.err = 40963;
        return
    }
}

function _alDeleteBuffers(count, pBufferIds) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(19, 1, count, pBufferIds);
    if (!AL.currentCtx) {
        return
    }
    for (var i = 0; i < count; ++i) {
        var bufId = GROWABLE_HEAP_I32()[pBufferIds + i * 4 >> 2];
        if (bufId === 0) {
            continue
        }
        if (!AL.buffers[bufId]) {
            AL.currentCtx.err = 40961;
            return
        }
        if (AL.buffers[bufId].refCount) {
            AL.currentCtx.err = 40964;
            return
        }
    }
    for (var i = 0; i < count; ++i) {
        var bufId = GROWABLE_HEAP_I32()[pBufferIds + i * 4 >> 2];
        if (bufId === 0) {
            continue
        }
        AL.deviceRefCounts[AL.buffers[bufId].deviceId]--;
        delete AL.buffers[bufId];
        AL.freeIds.push(bufId)
    }
}

function _alSourcei(sourceId, param, value) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(21, 1, sourceId, param, value);
    switch (param) {
        case 514:
        case 4097:
        case 4098:
        case 4103:
        case 4105:
        case 4128:
        case 4129:
        case 4131:
        case 4132:
        case 4133:
        case 4134:
        case 4628:
        case 8201:
        case 8202:
        case 53248:
            AL.setSourceParam("alSourcei", sourceId, param, value);
            break;
        default:
            AL.setSourceParam("alSourcei", sourceId, param, null);
            break
    }
}

function _alDeleteSources(count, pSourceIds) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(20, 1, count, pSourceIds);
    if (!AL.currentCtx) {
        return
    }
    for (var i = 0; i < count; ++i) {
        var srcId = GROWABLE_HEAP_I32()[pSourceIds + i * 4 >> 2];
        if (!AL.currentCtx.sources[srcId]) {
            AL.currentCtx.err = 40961;
            return
        }
    }
    for (var i = 0; i < count; ++i) {
        var srcId = GROWABLE_HEAP_I32()[pSourceIds + i * 4 >> 2];
        AL.setSourceState(AL.currentCtx.sources[srcId], 4116);
        _alSourcei(srcId, 4105, 0);
        delete AL.currentCtx.sources[srcId];
        AL.freeIds.push(srcId)
    }
}

function _alGenBuffers(count, pBufferIds) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(22, 1, count, pBufferIds);
    if (!AL.currentCtx) {
        return
    }
    for (var i = 0; i < count; ++i) {
        var buf = {
            deviceId: AL.currentCtx.deviceId,
            id: AL.newId(),
            refCount: 0,
            audioBuf: null,
            frequency: 0,
            bytesPerSample: 2,
            channels: 1,
            length: 0
        };
        AL.deviceRefCounts[buf.deviceId]++;
        AL.buffers[buf.id] = buf;
        GROWABLE_HEAP_I32()[pBufferIds + i * 4 >> 2] = buf.id
    }
}

function _alGenSources(count, pSourceIds) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(23, 1, count, pSourceIds);
    if (!AL.currentCtx) {
        return
    }
    for (var i = 0; i < count; ++i) {
        var gain = AL.currentCtx.audioCtx.createGain();
        gain.connect(AL.currentCtx.gain);
        var src = {
            context: AL.currentCtx,
            id: AL.newId(),
            type: 4144,
            state: 4113,
            bufQueue: [AL.buffers[0]],
            audioQueue: [],
            looping: false,
            pitch: 1,
            dopplerShift: 1,
            gain: gain,
            minGain: 0,
            maxGain: 1,
            panner: null,
            bufsProcessed: 0,
            bufStartTime: Number.NEGATIVE_INFINITY,
            bufOffset: 0,
            relative: false,
            refDistance: 1,
            maxDistance: 340282e33,
            rolloffFactor: 1,
            position: [0, 0, 0],
            velocity: [0, 0, 0],
            direction: [0, 0, 0],
            coneOuterGain: 0,
            coneInnerAngle: 360,
            coneOuterAngle: 360,
            distanceModel: 53250,
            spatialize: 2,
            get playbackRate() {
                return this.pitch * this.dopplerShift
            }
        };
        AL.currentCtx.sources[src.id] = src;
        GROWABLE_HEAP_I32()[pSourceIds + i * 4 >> 2] = src.id
    }
}

function _alGetBufferi(bufferId, param, pValue) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(24, 1, bufferId, param, pValue);
    var val = AL.getBufferParam("alGetBufferi", bufferId, param);
    if (val === null) {
        return
    }
    if (!pValue) {
        AL.currentCtx.err = 40963;
        return
    }
    switch (param) {
        case 8193:
        case 8194:
        case 8195:
        case 8196:
            GROWABLE_HEAP_I32()[pValue >> 2] = val;
            break;
        default:
            AL.currentCtx.err = 40962;
            return
    }
}

function _alGetError() {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(25, 1);
    if (!AL.currentCtx) {
        return 40964
    }
    var err = AL.currentCtx.err;
    AL.currentCtx.err = 0;
    return err
}

function _alGetSourcef(sourceId, param, pValue) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(26, 1, sourceId, param, pValue);
    var val = AL.getSourceParam("alGetSourcef", sourceId, param);
    if (val === null) {
        return
    }
    if (!pValue) {
        AL.currentCtx.err = 40963;
        return
    }
    switch (param) {
        case 4097:
        case 4098:
        case 4099:
        case 4106:
        case 4109:
        case 4110:
        case 4128:
        case 4129:
        case 4130:
        case 4131:
        case 4132:
        case 4133:
        case 4134:
        case 8203:
            GROWABLE_HEAP_F32()[pValue >> 2] = val;
            break;
        default:
            AL.currentCtx.err = 40962;
            return
    }
}

function _alGetSourcei(sourceId, param, pValue) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(27, 1, sourceId, param, pValue);
    var val = AL.getSourceParam("alGetSourcei", sourceId, param);
    if (val === null) {
        return
    }
    if (!pValue) {
        AL.currentCtx.err = 40963;
        return
    }
    switch (param) {
        case 514:
        case 4097:
        case 4098:
        case 4103:
        case 4105:
        case 4112:
        case 4117:
        case 4118:
        case 4128:
        case 4129:
        case 4131:
        case 4132:
        case 4133:
        case 4134:
        case 4135:
        case 4628:
        case 8201:
        case 8202:
        case 53248:
            GROWABLE_HEAP_I32()[pValue >> 2] = val;
            break;
        default:
            AL.currentCtx.err = 40962;
            return
    }
}

function _alGetString(param) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(28, 1, param);
    if (AL.stringCache[param]) {
        return AL.stringCache[param]
    }
    var ret;
    switch (param) {
        case 0:
            ret = "No Error";
            break;
        case 40961:
            ret = "Invalid Name";
            break;
        case 40962:
            ret = "Invalid Enum";
            break;
        case 40963:
            ret = "Invalid Value";
            break;
        case 40964:
            ret = "Invalid Operation";
            break;
        case 40965:
            ret = "Out of Memory";
            break;
        case 45057:
            ret = "Emscripten";
            break;
        case 45058:
            ret = "1.1";
            break;
        case 45059:
            ret = "WebAudio";
            break;
        case 45060:
            ret = "";
            for (var ext in AL.AL_EXTENSIONS) {
                ret = ret.concat(ext);
                ret = ret.concat(" ")
            }
            ret = ret.trim();
            break;
        default:
            if (AL.currentCtx) {
                AL.currentCtx.err = 40962
            } else {}
            return 0
    }
    ret = allocateUTF8(ret);
    AL.stringCache[param] = ret;
    return ret
}

function _alListener3f(param, value0, value1, value2) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(29, 1, param, value0, value1, value2);
    switch (param) {
        case 4100:
        case 4102:
            AL.paramArray[0] = value0;
            AL.paramArray[1] = value1;
            AL.paramArray[2] = value2;
            AL.setListenerParam("alListener3f", param, AL.paramArray);
            break;
        default:
            AL.setListenerParam("alListener3f", param, null);
            break
    }
}

function _alListenerf(param, value) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(30, 1, param, value);
    switch (param) {
        case 4106:
            AL.setListenerParam("alListenerf", param, value);
            break;
        default:
            AL.setListenerParam("alListenerf", param, null);
            break
    }
}

function _alListenerfv(param, pValues) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(31, 1, param, pValues);
    if (!AL.currentCtx) {
        return
    }
    if (!pValues) {
        AL.currentCtx.err = 40963;
        return
    }
    switch (param) {
        case 4100:
        case 4102:
            AL.paramArray[0] = GROWABLE_HEAP_F32()[pValues >> 2];
            AL.paramArray[1] = GROWABLE_HEAP_F32()[pValues + 4 >> 2];
            AL.paramArray[2] = GROWABLE_HEAP_F32()[pValues + 8 >> 2];
            AL.setListenerParam("alListenerfv", param, AL.paramArray);
            break;
        case 4111:
            AL.paramArray[0] = GROWABLE_HEAP_F32()[pValues >> 2];
            AL.paramArray[1] = GROWABLE_HEAP_F32()[pValues + 4 >> 2];
            AL.paramArray[2] = GROWABLE_HEAP_F32()[pValues + 8 >> 2];
            AL.paramArray[3] = GROWABLE_HEAP_F32()[pValues + 12 >> 2];
            AL.paramArray[4] = GROWABLE_HEAP_F32()[pValues + 16 >> 2];
            AL.paramArray[5] = GROWABLE_HEAP_F32()[pValues + 20 >> 2];
            AL.setListenerParam("alListenerfv", param, AL.paramArray);
            break;
        default:
            AL.setListenerParam("alListenerfv", param, null);
            break
    }
}

function _alSource3f(sourceId, param, value0, value1, value2) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(32, 1, sourceId, param, value0, value1, value2);
    switch (param) {
        case 4100:
        case 4101:
        case 4102:
            AL.paramArray[0] = value0;
            AL.paramArray[1] = value1;
            AL.paramArray[2] = value2;
            AL.setSourceParam("alSource3f", sourceId, param, AL.paramArray);
            break;
        default:
            AL.setSourceParam("alSource3f", sourceId, param, null);
            break
    }
}

function _alSourcePlay(sourceId) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(33, 1, sourceId);
    if (!AL.currentCtx) {
        return
    }
    var src = AL.currentCtx.sources[sourceId];
    if (!src) {
        AL.currentCtx.err = 40961;
        return
    }
    AL.setSourceState(src, 4114)
}

function _alSourceQueueBuffers(sourceId, count, pBufferIds) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(34, 1, sourceId, count, pBufferIds);
    if (!AL.currentCtx) {
        return
    }
    var src = AL.currentCtx.sources[sourceId];
    if (!src) {
        AL.currentCtx.err = 40961;
        return
    }
    if (src.type === 4136) {
        AL.currentCtx.err = 40964;
        return
    }
    if (count === 0) {
        return
    }
    var templateBuf = AL.buffers[0];
    for (var i = 0; i < src.bufQueue.length; i++) {
        if (src.bufQueue[i].id !== 0) {
            templateBuf = src.bufQueue[i];
            break
        }
    }
    for (var i = 0; i < count; ++i) {
        var bufId = GROWABLE_HEAP_I32()[pBufferIds + i * 4 >> 2];
        var buf = AL.buffers[bufId];
        if (!buf) {
            AL.currentCtx.err = 40961;
            return
        }
        if (templateBuf.id !== 0 && (buf.frequency !== templateBuf.frequency || buf.bytesPerSample !== templateBuf.bytesPerSample || buf.channels !== templateBuf.channels)) {
            AL.currentCtx.err = 40964
        }
    }
    if (src.bufQueue.length === 1 && src.bufQueue[0].id === 0) {
        src.bufQueue.length = 0
    }
    src.type = 4137;
    for (var i = 0; i < count; ++i) {
        var bufId = GROWABLE_HEAP_I32()[pBufferIds + i * 4 >> 2];
        var buf = AL.buffers[bufId];
        buf.refCount++;
        src.bufQueue.push(buf)
    }
    if (src.looping) {
        AL.cancelPendingSourceAudio(src)
    }
    AL.initSourcePanner(src);
    AL.scheduleSourceAudio(src)
}

function _alSourceStop(sourceId) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(35, 1, sourceId);
    if (!AL.currentCtx) {
        return
    }
    var src = AL.currentCtx.sources[sourceId];
    if (!src) {
        AL.currentCtx.err = 40961;
        return
    }
    AL.setSourceState(src, 4116)
}

function _alSourcef(sourceId, param, value) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(36, 1, sourceId, param, value);
    switch (param) {
        case 4097:
        case 4098:
        case 4099:
        case 4106:
        case 4109:
        case 4110:
        case 4128:
        case 4129:
        case 4130:
        case 4131:
        case 4132:
        case 4133:
        case 4134:
        case 8203:
            AL.setSourceParam("alSourcef", sourceId, param, value);
            break;
        default:
            AL.setSourceParam("alSourcef", sourceId, param, null);
            break
    }
}

function _alcCloseDevice(deviceId) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(37, 1, deviceId);
    if (!(deviceId in AL.deviceRefCounts) || AL.deviceRefCounts[deviceId] > 0) {
        return 0
    }
    delete AL.deviceRefCounts[deviceId];
    AL.freeIds.push(deviceId);
    return 1
}

function _alcCreateContext(deviceId, pAttrList) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(38, 1, deviceId, pAttrList);
    if (!(deviceId in AL.deviceRefCounts)) {
        AL.alcErr = 40961;
        return 0
    }
    var options = null;
    var attrs = [];
    var hrtf = null;
    pAttrList >>= 2;
    if (pAttrList) {
        var attr = 0;
        var val = 0;
        while (true) {
            attr = GROWABLE_HEAP_I32()[pAttrList++];
            attrs.push(attr);
            if (attr === 0) {
                break
            }
            val = GROWABLE_HEAP_I32()[pAttrList++];
            attrs.push(val);
            switch (attr) {
                case 4103:
                    if (!options) {
                        options = {}
                    }
                    options.sampleRate = val;
                    break;
                case 4112:
                case 4113:
                    break;
                case 6546:
                    switch (val) {
                        case 0:
                            hrtf = false;
                            break;
                        case 1:
                            hrtf = true;
                            break;
                        case 2:
                            break;
                        default:
                            AL.alcErr = 40964;
                            return 0
                    }
                    break;
                case 6550:
                    if (val !== 0) {
                        AL.alcErr = 40964;
                        return 0
                    }
                    break;
                default:
                    AL.alcErr = 40964;
                    return 0
            }
        }
    }
    var AudioContext = window.AudioContext || window.webkitAudioContext;
    var ac = null;
    try {
        if (options) {
            ac = new AudioContext(options)
        } else {
            ac = new AudioContext
        }
    } catch (e) {
        if (e.name === "NotSupportedError") {
            AL.alcErr = 40964
        } else {
            AL.alcErr = 40961
        }
        return 0
    }
    autoResumeAudioContext(ac);
    if (typeof ac.createGain == "undefined") {
        ac.createGain = ac.createGainNode
    }
    var gain = ac.createGain();
    gain.connect(ac.destination);
    var ctx = {
        deviceId: deviceId,
        id: AL.newId(),
        attrs: attrs,
        audioCtx: ac,
        listener: {
            position: [0, 0, 0],
            velocity: [0, 0, 0],
            direction: [0, 0, 0],
            up: [0, 0, 0]
        },
        sources: [],
        interval: setInterval(function() {
            AL.scheduleContextAudio(ctx)
        }, AL.QUEUE_INTERVAL),
        gain: gain,
        distanceModel: 53250,
        speedOfSound: 343.3,
        dopplerFactor: 1,
        sourceDistanceModel: false,
        hrtf: hrtf || false,
        _err: 0,
        get err() {
            return this._err
        },
        set err(val) {
            if (this._err === 0 || val === 0) {
                this._err = val
            }
        }
    };
    AL.deviceRefCounts[deviceId]++;
    AL.contexts[ctx.id] = ctx;
    if (hrtf !== null) {
        for (var ctxId in AL.contexts) {
            var c = AL.contexts[ctxId];
            if (c.deviceId === deviceId) {
                c.hrtf = hrtf;
                AL.updateContextGlobal(c)
            }
        }
    }
    return ctx.id
}

function _alcDestroyContext(contextId) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(39, 1, contextId);
    var ctx = AL.contexts[contextId];
    if (AL.currentCtx === ctx) {
        AL.alcErr = 40962;
        return
    }
    if (AL.contexts[contextId].interval) {
        clearInterval(AL.contexts[contextId].interval)
    }
    AL.deviceRefCounts[ctx.deviceId]--;
    delete AL.contexts[contextId];
    AL.freeIds.push(contextId)
}

function _alcGetIntegerv(deviceId, param, size, pValues) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(40, 1, deviceId, param, size, pValues);
    if (size === 0 || !pValues) {
        return
    }
    switch (param) {
        case 4096:
            GROWABLE_HEAP_I32()[pValues >> 2] = 1;
            break;
        case 4097:
            GROWABLE_HEAP_I32()[pValues >> 2] = 1;
            break;
        case 4098:
            if (!(deviceId in AL.deviceRefCounts)) {
                AL.alcErr = 40961;
                return
            }
            if (!AL.currentCtx) {
                AL.alcErr = 40962;
                return
            }
            GROWABLE_HEAP_I32()[pValues >> 2] = AL.currentCtx.attrs.length;
            break;
        case 4099:
            if (!(deviceId in AL.deviceRefCounts)) {
                AL.alcErr = 40961;
                return
            }
            if (!AL.currentCtx) {
                AL.alcErr = 40962;
                return
            }
            for (var i = 0; i < AL.currentCtx.attrs.length; i++) {
                GROWABLE_HEAP_I32()[pValues + i * 4 >> 2] = AL.currentCtx.attrs[i]
            }
            break;
        case 4103:
            if (!(deviceId in AL.deviceRefCounts)) {
                AL.alcErr = 40961;
                return
            }
            if (!AL.currentCtx) {
                AL.alcErr = 40962;
                return
            }
            GROWABLE_HEAP_I32()[pValues >> 2] = AL.currentCtx.audioCtx.sampleRate;
            break;
        case 4112:
        case 4113:
            if (!(deviceId in AL.deviceRefCounts)) {
                AL.alcErr = 40961;
                return
            }
            if (!AL.currentCtx) {
                AL.alcErr = 40962;
                return
            }
            GROWABLE_HEAP_I32()[pValues >> 2] = 2147483647;
            break;
        case 6546:
        case 6547:
            if (!(deviceId in AL.deviceRefCounts)) {
                AL.alcErr = 40961;
                return
            }
            var hrtfStatus = 0;
            for (var ctxId in AL.contexts) {
                var ctx = AL.contexts[ctxId];
                if (ctx.deviceId === deviceId) {
                    hrtfStatus = ctx.hrtf ? 1 : 0
                }
            }
            GROWABLE_HEAP_I32()[pValues >> 2] = hrtfStatus;
            break;
        case 6548:
            if (!(deviceId in AL.deviceRefCounts)) {
                AL.alcErr = 40961;
                return
            }
            GROWABLE_HEAP_I32()[pValues >> 2] = 1;
            break;
        case 131075:
            if (!(deviceId in AL.deviceRefCounts)) {
                AL.alcErr = 40961;
                return
            }
            if (!AL.currentCtx) {
                AL.alcErr = 40962;
                return
            }
            GROWABLE_HEAP_I32()[pValues >> 2] = 1;
        case 786:
            var c = AL.requireValidCaptureDevice(deviceId, "alcGetIntegerv");
            if (!c) {
                return
            }
            var n = c.capturedFrameCount;
            var dstfreq = c.requestedSampleRate;
            var srcfreq = c.audioCtx.sampleRate;
            var nsamples = Math.floor(n * (dstfreq / srcfreq));
            GROWABLE_HEAP_I32()[pValues >> 2] = nsamples;
            break;
        default:
            AL.alcErr = 40963;
            return
    }
}

function _alcMakeContextCurrent(contextId) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(41, 1, contextId);
    if (contextId === 0) {
        AL.currentCtx = null;
        return 0
    }
    AL.currentCtx = AL.contexts[contextId];
    return 1
}

function _alcOpenDevice(pDeviceName) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(42, 1, pDeviceName);
    if (pDeviceName) {
        var name = UTF8ToString(pDeviceName);
        if (name !== AL.DEVICE_NAME) {
            return 0
        }
    }
    if (typeof AudioContext != "undefined" || typeof webkitAudioContext != "undefined") {
        var deviceId = AL.newId();
        AL.deviceRefCounts[deviceId] = 0;
        return deviceId
    }
    return 0
}
var EGL = {
    errorCode: 12288,
    defaultDisplayInitialized: false,
    currentContext: 0,
    currentReadSurface: 0,
    currentDrawSurface: 0,
    contextAttributes: {
        alpha: false,
        depth: false,
        stencil: false,
        antialias: false
    },
    stringCache: {},
    setErrorCode: function(code) {
        EGL.errorCode = code
    },
    chooseConfig: function(display, attribList, config, config_size, numConfigs) {
        if (display != 62e3) {
            EGL.setErrorCode(12296);
            return 0
        }
        if (attribList) {
            for (;;) {
                var param = GROWABLE_HEAP_I32()[attribList >> 2];
                if (param == 12321) {
                    var alphaSize = GROWABLE_HEAP_I32()[attribList + 4 >> 2];
                    EGL.contextAttributes.alpha = alphaSize > 0
                } else if (param == 12325) {
                    var depthSize = GROWABLE_HEAP_I32()[attribList + 4 >> 2];
                    EGL.contextAttributes.depth = depthSize > 0
                } else if (param == 12326) {
                    var stencilSize = GROWABLE_HEAP_I32()[attribList + 4 >> 2];
                    EGL.contextAttributes.stencil = stencilSize > 0
                } else if (param == 12337) {
                    var samples = GROWABLE_HEAP_I32()[attribList + 4 >> 2];
                    EGL.contextAttributes.antialias = samples > 0
                } else if (param == 12338) {
                    var samples = GROWABLE_HEAP_I32()[attribList + 4 >> 2];
                    EGL.contextAttributes.antialias = samples == 1
                } else if (param == 12544) {
                    var requestedPriority = GROWABLE_HEAP_I32()[attribList + 4 >> 2];
                    EGL.contextAttributes.lowLatency = requestedPriority != 12547
                } else if (param == 12344) {
                    break
                }
                attribList += 8
            }
        }
        if ((!config || !config_size) && !numConfigs) {
            EGL.setErrorCode(12300);
            return 0
        }
        if (numConfigs) {
            GROWABLE_HEAP_I32()[numConfigs >> 2] = 1
        }
        if (config && config_size > 0) {
            GROWABLE_HEAP_I32()[config >> 2] = 62002
        }
        EGL.setErrorCode(12288);
        return 1
    }
};

function _eglBindAPI(api) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(43, 1, api);
    if (api == 12448) {
        EGL.setErrorCode(12288);
        return 1
    }
    EGL.setErrorCode(12300);
    return 0
}

function _eglChooseConfig(display, attrib_list, configs, config_size, numConfigs) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(44, 1, display, attrib_list, configs, config_size, numConfigs);
    return EGL.chooseConfig(display, attrib_list, configs, config_size, numConfigs)
}

function __webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance(ctx) {
    return !!(ctx.dibvbi = ctx.getExtension("WEBGL_draw_instanced_base_vertex_base_instance"))
}

function __webgl_enable_WEBGL_multi_draw_instanced_base_vertex_base_instance(ctx) {
    return !!(ctx.mdibvbi = ctx.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance"))
}

function __webgl_enable_WEBGL_multi_draw(ctx) {
    return !!(ctx.multiDrawWebgl = ctx.getExtension("WEBGL_multi_draw"))
}
var GL = {
    counter: 1,
    buffers: [],
    mappedBuffers: {},
    programs: [],
    framebuffers: [],
    renderbuffers: [],
    textures: [],
    shaders: [],
    vaos: [],
    contexts: {},
    offscreenCanvases: {},
    queries: [],
    samplers: [],
    transformFeedbacks: [],
    syncs: [],
    byteSizeByTypeRoot: 5120,
    byteSizeByType: [1, 1, 2, 2, 4, 4, 4, 2, 3, 4, 8],
    stringCache: {},
    stringiCache: {},
    unpackAlignment: 4,
    recordError: function recordError(errorCode) {
        if (!GL.lastError) {
            GL.lastError = errorCode
        }
    },
    getNewId: function(table) {
        var ret = GL.counter++;
        for (var i = table.length; i < ret; i++) {
            table[i] = null
        }
        return ret
    },
    MAX_TEMP_BUFFER_SIZE: 2097152,
    numTempVertexBuffersPerSize: 64,
    log2ceilLookup: function(i) {
        return 32 - Math.clz32(i === 0 ? 0 : i - 1)
    },
    generateTempBuffers: function(quads, context) {
        var largestIndex = GL.log2ceilLookup(GL.MAX_TEMP_BUFFER_SIZE);
        context.tempVertexBufferCounters1 = [];
        context.tempVertexBufferCounters2 = [];
        context.tempVertexBufferCounters1.length = context.tempVertexBufferCounters2.length = largestIndex + 1;
        context.tempVertexBuffers1 = [];
        context.tempVertexBuffers2 = [];
        context.tempVertexBuffers1.length = context.tempVertexBuffers2.length = largestIndex + 1;
        context.tempIndexBuffers = [];
        context.tempIndexBuffers.length = largestIndex + 1;
        for (var i = 0; i <= largestIndex; ++i) {
            context.tempIndexBuffers[i] = null;
            context.tempVertexBufferCounters1[i] = context.tempVertexBufferCounters2[i] = 0;
            var ringbufferLength = GL.numTempVertexBuffersPerSize;
            context.tempVertexBuffers1[i] = [];
            context.tempVertexBuffers2[i] = [];
            var ringbuffer1 = context.tempVertexBuffers1[i];
            var ringbuffer2 = context.tempVertexBuffers2[i];
            ringbuffer1.length = ringbuffer2.length = ringbufferLength;
            for (var j = 0; j < ringbufferLength; ++j) {
                ringbuffer1[j] = ringbuffer2[j] = null
            }
        }
        if (quads) {
            context.tempQuadIndexBuffer = GLctx.createBuffer();
            context.GLctx.bindBuffer(34963, context.tempQuadIndexBuffer);
            var numIndexes = GL.MAX_TEMP_BUFFER_SIZE >> 1;
            var quadIndexes = new Uint16Array(numIndexes);
            var i = 0,
                v = 0;
            while (1) {
                quadIndexes[i++] = v;
                if (i >= numIndexes) break;
                quadIndexes[i++] = v + 1;
                if (i >= numIndexes) break;
                quadIndexes[i++] = v + 2;
                if (i >= numIndexes) break;
                quadIndexes[i++] = v;
                if (i >= numIndexes) break;
                quadIndexes[i++] = v + 2;
                if (i >= numIndexes) break;
                quadIndexes[i++] = v + 3;
                if (i >= numIndexes) break;
                v += 4
            }
            context.GLctx.bufferData(34963, quadIndexes, 35044);
            context.GLctx.bindBuffer(34963, null)
        }
    },
    getTempVertexBuffer: function getTempVertexBuffer(sizeBytes) {
        var idx = GL.log2ceilLookup(sizeBytes);
        var ringbuffer = GL.currentContext.tempVertexBuffers1[idx];
        var nextFreeBufferIndex = GL.currentContext.tempVertexBufferCounters1[idx];
        GL.currentContext.tempVertexBufferCounters1[idx] = GL.currentContext.tempVertexBufferCounters1[idx] + 1 & GL.numTempVertexBuffersPerSize - 1;
        var vbo = ringbuffer[nextFreeBufferIndex];
        if (vbo) {
            return vbo
        }
        var prevVBO = GLctx.getParameter(34964);
        ringbuffer[nextFreeBufferIndex] = GLctx.createBuffer();
        GLctx.bindBuffer(34962, ringbuffer[nextFreeBufferIndex]);
        GLctx.bufferData(34962, 1 << idx, 35048);
        GLctx.bindBuffer(34962, prevVBO);
        return ringbuffer[nextFreeBufferIndex]
    },
    getTempIndexBuffer: function getTempIndexBuffer(sizeBytes) {
        var idx = GL.log2ceilLookup(sizeBytes);
        var ibo = GL.currentContext.tempIndexBuffers[idx];
        if (ibo) {
            return ibo
        }
        var prevIBO = GLctx.getParameter(34965);
        GL.currentContext.tempIndexBuffers[idx] = GLctx.createBuffer();
        GLctx.bindBuffer(34963, GL.currentContext.tempIndexBuffers[idx]);
        GLctx.bufferData(34963, 1 << idx, 35048);
        GLctx.bindBuffer(34963, prevIBO);
        return GL.currentContext.tempIndexBuffers[idx]
    },
    newRenderingFrameStarted: function newRenderingFrameStarted() {
        if (!GL.currentContext) {
            return
        }
        var vb = GL.currentContext.tempVertexBuffers1;
        GL.currentContext.tempVertexBuffers1 = GL.currentContext.tempVertexBuffers2;
        GL.currentContext.tempVertexBuffers2 = vb;
        vb = GL.currentContext.tempVertexBufferCounters1;
        GL.currentContext.tempVertexBufferCounters1 = GL.currentContext.tempVertexBufferCounters2;
        GL.currentContext.tempVertexBufferCounters2 = vb;
        var largestIndex = GL.log2ceilLookup(GL.MAX_TEMP_BUFFER_SIZE);
        for (var i = 0; i <= largestIndex; ++i) {
            GL.currentContext.tempVertexBufferCounters1[i] = 0
        }
    },
    getSource: function(shader, count, string, length) {
        var source = "";
        for (var i = 0; i < count; ++i) {
            var len = length ? GROWABLE_HEAP_I32()[length + i * 4 >> 2] : -1;
            source += UTF8ToString(GROWABLE_HEAP_I32()[string + i * 4 >> 2], len < 0 ? undefined : len)
        }
        return source
    },
    calcBufLength: function calcBufLength(size, type, stride, count) {
        if (stride > 0) {
            return count * stride
        }
        var typeSize = GL.byteSizeByType[type - GL.byteSizeByTypeRoot];
        return size * typeSize * count
    },
    usedTempBuffers: [],
    preDrawHandleClientVertexAttribBindings: function preDrawHandleClientVertexAttribBindings(count) {
        GL.resetBufferBinding = false;
        for (var i = 0; i < GL.currentContext.maxVertexAttribs; ++i) {
            var cb = GL.currentContext.clientBuffers[i];
            if (!cb.clientside || !cb.enabled) continue;
            GL.resetBufferBinding = true;
            var size = GL.calcBufLength(cb.size, cb.type, cb.stride, count);
            var buf = GL.getTempVertexBuffer(size);
            GLctx.bindBuffer(34962, buf);
            GLctx.bufferSubData(34962, 0, GROWABLE_HEAP_U8().subarray(cb.ptr, cb.ptr + size));
            cb.vertexAttribPointerAdaptor.call(GLctx, i, cb.size, cb.type, cb.normalized, cb.stride, 0)
        }
    },
    postDrawHandleClientVertexAttribBindings: function postDrawHandleClientVertexAttribBindings() {
        if (GL.resetBufferBinding) {
            GLctx.bindBuffer(34962, GL.buffers[GLctx.currentArrayBufferBinding])
        }
    },
    createContext: function(canvas, webGLContextAttributes) {
        if (!canvas.getContextSafariWebGL2Fixed) {
            canvas.getContextSafariWebGL2Fixed = canvas.getContext;

            function fixedGetContext(ver, attrs) {
                var gl = canvas.getContextSafariWebGL2Fixed(ver, attrs);
                return ver == "webgl" == gl instanceof WebGLRenderingContext ? gl : null
            }
            canvas.getContext = fixedGetContext
        }
        var ctx = canvas.getContext("webgl2", webGLContextAttributes);
        if (!ctx) return 0;
        var handle = GL.registerContext(ctx, webGLContextAttributes);
        return handle
    },
    registerContext: function(ctx, webGLContextAttributes) {
        var handle = _malloc(8);
        GROWABLE_HEAP_I32()[handle + 4 >> 2] = _pthread_self();
        var context = {
            handle: handle,
            attributes: webGLContextAttributes,
            version: webGLContextAttributes.majorVersion,
            GLctx: ctx
        };
        if (ctx.canvas) ctx.canvas.GLctxObject = context;
        GL.contexts[handle] = context;
        if (typeof webGLContextAttributes.enableExtensionsByDefault == "undefined" || webGLContextAttributes.enableExtensionsByDefault) {
            GL.initExtensions(context)
        }
        context.maxVertexAttribs = context.GLctx.getParameter(34921);
        context.clientBuffers = [];
        for (var i = 0; i < context.maxVertexAttribs; i++) {
            context.clientBuffers[i] = {
                enabled: false,
                clientside: false,
                size: 0,
                type: 0,
                normalized: 0,
                stride: 0,
                ptr: 0,
                vertexAttribPointerAdaptor: null
            }
        }
        GL.generateTempBuffers(false, context);
        return handle
    },
    makeContextCurrent: function(contextHandle) {
        GL.currentContext = GL.contexts[contextHandle];
        Module.ctx = GLctx = GL.currentContext && GL.currentContext.GLctx;
        return !(contextHandle && !GLctx)
    },
    getContext: function(contextHandle) {
        return GL.contexts[contextHandle]
    },
    deleteContext: function(contextHandle) {
        if (GL.currentContext === GL.contexts[contextHandle]) GL.currentContext = null;
        if (typeof JSEvents == "object") JSEvents.removeAllHandlersOnTarget(GL.contexts[contextHandle].GLctx.canvas);
        if (GL.contexts[contextHandle] && GL.contexts[contextHandle].GLctx.canvas) GL.contexts[contextHandle].GLctx.canvas.GLctxObject = undefined;
        _free(GL.contexts[contextHandle].handle);
        GL.contexts[contextHandle] = null
    },
    initExtensions: function(context) {
        if (!context) context = GL.currentContext;
        if (context.initExtensionsDone) return;
        context.initExtensionsDone = true;
        var GLctx = context.GLctx;
        __webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance(GLctx);
        __webgl_enable_WEBGL_multi_draw_instanced_base_vertex_base_instance(GLctx);
        if (context.version >= 2) {
            GLctx.disjointTimerQueryExt = GLctx.getExtension("EXT_disjoint_timer_query_webgl2")
        }
        if (context.version < 2 || !GLctx.disjointTimerQueryExt) {
            GLctx.disjointTimerQueryExt = GLctx.getExtension("EXT_disjoint_timer_query")
        }
        __webgl_enable_WEBGL_multi_draw(GLctx);
        var exts = GLctx.getSupportedExtensions() || [];
        exts.forEach(function(ext) {
            if (!ext.includes("lose_context") && !ext.includes("debug")) {
                GLctx.getExtension(ext)
            }
        })
    }
};

function _eglCreateContext(display, config, hmm, contextAttribs) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(45, 1, display, config, hmm, contextAttribs);
    if (display != 62e3) {
        EGL.setErrorCode(12296);
        return 0
    }
    var glesContextVersion = 1;
    for (;;) {
        var param = GROWABLE_HEAP_I32()[contextAttribs >> 2];
        if (param == 12440) {
            glesContextVersion = GROWABLE_HEAP_I32()[contextAttribs + 4 >> 2]
        } else if (param == 12344) {
            break
        } else {
            EGL.setErrorCode(12292);
            return 0
        }
        contextAttribs += 8
    }
    if (glesContextVersion < 2 || glesContextVersion > 3) {
        EGL.setErrorCode(12293);
        return 0
    }
    EGL.contextAttributes.majorVersion = glesContextVersion - 1;
    EGL.contextAttributes.minorVersion = 0;
    EGL.context = GL.createContext(Module["canvas"], EGL.contextAttributes);
    if (EGL.context != 0) {
        EGL.setErrorCode(12288);
        GL.makeContextCurrent(EGL.context);
        Module.useWebGL = true;
        Browser.moduleContextCreatedCallbacks.forEach(function(callback) {
            callback()
        });
        GL.makeContextCurrent(null);
        return 62004
    } else {
        EGL.setErrorCode(12297);
        return 0
    }
}

function _eglCreateWindowSurface(display, config, win, attrib_list) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(46, 1, display, config, win, attrib_list);
    if (display != 62e3) {
        EGL.setErrorCode(12296);
        return 0
    }
    if (config != 62002) {
        EGL.setErrorCode(12293);
        return 0
    }
    EGL.setErrorCode(12288);
    return 62006
}

function _eglDestroyContext(display, context) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(47, 1, display, context);
    if (display != 62e3) {
        EGL.setErrorCode(12296);
        return 0
    }
    if (context != 62004) {
        EGL.setErrorCode(12294);
        return 0
    }
    GL.deleteContext(EGL.context);
    EGL.setErrorCode(12288);
    if (EGL.currentContext == context) {
        EGL.currentContext = 0
    }
    return 1
}

function _eglDestroySurface(display, surface) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(48, 1, display, surface);
    if (display != 62e3) {
        EGL.setErrorCode(12296);
        return 0
    }
    if (surface != 62006) {
        EGL.setErrorCode(12301);
        return 1
    }
    if (EGL.currentReadSurface == surface) {
        EGL.currentReadSurface = 0
    }
    if (EGL.currentDrawSurface == surface) {
        EGL.currentDrawSurface = 0
    }
    EGL.setErrorCode(12288);
    return 1
}

function _eglGetConfigAttrib(display, config, attribute, value) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(49, 1, display, config, attribute, value);
    if (display != 62e3) {
        EGL.setErrorCode(12296);
        return 0
    }
    if (config != 62002) {
        EGL.setErrorCode(12293);
        return 0
    }
    if (!value) {
        EGL.setErrorCode(12300);
        return 0
    }
    EGL.setErrorCode(12288);
    switch (attribute) {
        case 12320:
            GROWABLE_HEAP_I32()[value >> 2] = EGL.contextAttributes.alpha ? 32 : 24;
            return 1;
        case 12321:
            GROWABLE_HEAP_I32()[value >> 2] = EGL.contextAttributes.alpha ? 8 : 0;
            return 1;
        case 12322:
            GROWABLE_HEAP_I32()[value >> 2] = 8;
            return 1;
        case 12323:
            GROWABLE_HEAP_I32()[value >> 2] = 8;
            return 1;
        case 12324:
            GROWABLE_HEAP_I32()[value >> 2] = 8;
            return 1;
        case 12325:
            GROWABLE_HEAP_I32()[value >> 2] = EGL.contextAttributes.depth ? 24 : 0;
            return 1;
        case 12326:
            GROWABLE_HEAP_I32()[value >> 2] = EGL.contextAttributes.stencil ? 8 : 0;
            return 1;
        case 12327:
            GROWABLE_HEAP_I32()[value >> 2] = 12344;
            return 1;
        case 12328:
            GROWABLE_HEAP_I32()[value >> 2] = 62002;
            return 1;
        case 12329:
            GROWABLE_HEAP_I32()[value >> 2] = 0;
            return 1;
        case 12330:
            GROWABLE_HEAP_I32()[value >> 2] = 4096;
            return 1;
        case 12331:
            GROWABLE_HEAP_I32()[value >> 2] = 16777216;
            return 1;
        case 12332:
            GROWABLE_HEAP_I32()[value >> 2] = 4096;
            return 1;
        case 12333:
            GROWABLE_HEAP_I32()[value >> 2] = 0;
            return 1;
        case 12334:
            GROWABLE_HEAP_I32()[value >> 2] = 0;
            return 1;
        case 12335:
            GROWABLE_HEAP_I32()[value >> 2] = 12344;
            return 1;
        case 12337:
            GROWABLE_HEAP_I32()[value >> 2] = EGL.contextAttributes.antialias ? 4 : 0;
            return 1;
        case 12338:
            GROWABLE_HEAP_I32()[value >> 2] = EGL.contextAttributes.antialias ? 1 : 0;
            return 1;
        case 12339:
            GROWABLE_HEAP_I32()[value >> 2] = 4;
            return 1;
        case 12340:
            GROWABLE_HEAP_I32()[value >> 2] = 12344;
            return 1;
        case 12341:
        case 12342:
        case 12343:
            GROWABLE_HEAP_I32()[value >> 2] = -1;
            return 1;
        case 12345:
        case 12346:
            GROWABLE_HEAP_I32()[value >> 2] = 0;
            return 1;
        case 12347:
            GROWABLE_HEAP_I32()[value >> 2] = 0;
            return 1;
        case 12348:
            GROWABLE_HEAP_I32()[value >> 2] = 1;
            return 1;
        case 12349:
        case 12350:
            GROWABLE_HEAP_I32()[value >> 2] = 0;
            return 1;
        case 12351:
            GROWABLE_HEAP_I32()[value >> 2] = 12430;
            return 1;
        case 12352:
            GROWABLE_HEAP_I32()[value >> 2] = 4;
            return 1;
        case 12354:
            GROWABLE_HEAP_I32()[value >> 2] = 0;
            return 1;
        default:
            EGL.setErrorCode(12292);
            return 0
    }
}

function _eglGetDisplay(nativeDisplayType) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(50, 1, nativeDisplayType);
    EGL.setErrorCode(12288);
    return 62e3
}

function _eglGetError() {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(51, 1);
    return EGL.errorCode
}

function _eglInitialize(display, majorVersion, minorVersion) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(52, 1, display, majorVersion, minorVersion);
    if (display != 62e3) {
        EGL.setErrorCode(12296);
        return 0
    }
    if (majorVersion) {
        GROWABLE_HEAP_I32()[majorVersion >> 2] = 1
    }
    if (minorVersion) {
        GROWABLE_HEAP_I32()[minorVersion >> 2] = 4
    }
    EGL.defaultDisplayInitialized = true;
    EGL.setErrorCode(12288);
    return 1
}

function _eglMakeCurrent(display, draw, read, context) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(53, 1, display, draw, read, context);
    if (display != 62e3) {
        EGL.setErrorCode(12296);
        return 0
    }
    if (context != 0 && context != 62004) {
        EGL.setErrorCode(12294);
        return 0
    }
    if (read != 0 && read != 62006 || draw != 0 && draw != 62006) {
        EGL.setErrorCode(12301);
        return 0
    }
    GL.makeContextCurrent(context ? EGL.context : null);
    EGL.currentContext = context;
    EGL.currentDrawSurface = draw;
    EGL.currentReadSurface = read;
    EGL.setErrorCode(12288);
    return 1
}

function _eglQueryString(display, name) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(54, 1, display, name);
    if (display != 62e3) {
        EGL.setErrorCode(12296);
        return 0
    }
    EGL.setErrorCode(12288);
    if (EGL.stringCache[name]) return EGL.stringCache[name];
    var ret;
    switch (name) {
        case 12371:
            ret = allocateUTF8("Emscripten");
            break;
        case 12372:
            ret = allocateUTF8("1.4 Emscripten EGL");
            break;
        case 12373:
            ret = allocateUTF8("");
            break;
        case 12429:
            ret = allocateUTF8("OpenGL_ES");
            break;
        default:
            EGL.setErrorCode(12300);
            return 0
    }
    EGL.stringCache[name] = ret;
    return ret
}

function _eglSwapBuffers() {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(55, 1);
    if (!EGL.defaultDisplayInitialized) {
        EGL.setErrorCode(12289)
    } else if (!Module.ctx) {
        EGL.setErrorCode(12290)
    } else if (Module.ctx.isContextLost()) {
        EGL.setErrorCode(12302)
    } else {
        EGL.setErrorCode(12288);
        return 1
    }
    return 0
}

function _eglSwapInterval(display, interval) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(56, 1, display, interval);
    if (display != 62e3) {
        EGL.setErrorCode(12296);
        return 0
    }
    if (interval == 0) _emscripten_set_main_loop_timing(0, 0);
    else _emscripten_set_main_loop_timing(1, interval);
    EGL.setErrorCode(12288);
    return 1
}

function _eglTerminate(display) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(57, 1, display);
    if (display != 62e3) {
        EGL.setErrorCode(12296);
        return 0
    }
    EGL.currentContext = 0;
    EGL.currentReadSurface = 0;
    EGL.currentDrawSurface = 0;
    EGL.defaultDisplayInitialized = false;
    EGL.setErrorCode(12288);
    return 1
}

function _eglWaitClient() {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(58, 1);
    EGL.setErrorCode(12288);
    return 1
}
var _eglWaitGL = _eglWaitClient;

function _eglWaitNative(nativeEngineId) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(59, 1, nativeEngineId);
    EGL.setErrorCode(12288);
    return 1
}
var readAsmConstArgsArray = [];

function readAsmConstArgs(sigPtr, buf) {
    readAsmConstArgsArray.length = 0;
    var ch;
    buf >>= 2;
    while (ch = GROWABLE_HEAP_U8()[sigPtr++]) {
        buf += ch != 105 & buf;
        readAsmConstArgsArray.push(ch == 105 ? GROWABLE_HEAP_I32()[buf] : GROWABLE_HEAP_F64()[buf++ >> 1]);
        ++buf
    }
    return readAsmConstArgsArray
}

function _emscripten_asm_const_int(code, sigPtr, argbuf) {
    var args = readAsmConstArgs(sigPtr, argbuf);
    return ASM_CONSTS[code].apply(null, args)
}

function mainThreadEM_ASM(code, sigPtr, argbuf, sync) {
    var args = readAsmConstArgs(sigPtr, argbuf);
    if (ENVIRONMENT_IS_PTHREAD) {
        return _emscripten_proxy_to_main_thread_js.apply(null, [-1 - code, sync].concat(args))
    }
    return ASM_CONSTS[code].apply(null, args)
}

function _emscripten_asm_const_int_sync_on_main_thread(code, sigPtr, argbuf) {
    return mainThreadEM_ASM(code, sigPtr, argbuf, 1)
}

function _emscripten_check_blocking_allowed() {
    if (ENVIRONMENT_IS_WORKER) return;
    warnOnce("Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread")
}
var JSEvents = {
    inEventHandler: 0,
    removeAllEventListeners: function() {
        for (var i = JSEvents.eventHandlers.length - 1; i >= 0; --i) {
            JSEvents._removeHandler(i)
        }
        JSEvents.eventHandlers = [];
        JSEvents.deferredCalls = []
    },
    registerRemoveEventListeners: function() {
        if (!JSEvents.removeEventListenersRegistered) {
            __ATEXIT__.push(JSEvents.removeAllEventListeners);
            JSEvents.removeEventListenersRegistered = true
        }
    },
    deferredCalls: [],
    deferCall: function(targetFunction, precedence, argsList) {
        function arraysHaveEqualContent(arrA, arrB) {
            if (arrA.length != arrB.length) return false;
            for (var i in arrA) {
                if (arrA[i] != arrB[i]) return false
            }
            return true
        }
        for (var i in JSEvents.deferredCalls) {
            var call = JSEvents.deferredCalls[i];
            if (call.targetFunction == targetFunction && arraysHaveEqualContent(call.argsList, argsList)) {
                return
            }
        }
        JSEvents.deferredCalls.push({
            targetFunction: targetFunction,
            precedence: precedence,
            argsList: argsList
        });
        JSEvents.deferredCalls.sort(function(x, y) {
            return x.precedence < y.precedence
        })
    },
    removeDeferredCalls: function(targetFunction) {
        for (var i = 0; i < JSEvents.deferredCalls.length; ++i) {
            if (JSEvents.deferredCalls[i].targetFunction == targetFunction) {
                JSEvents.deferredCalls.splice(i, 1);
                --i
            }
        }
    },
    canPerformEventHandlerRequests: function() {
        return JSEvents.inEventHandler && JSEvents.currentEventHandler.allowsDeferredCalls
    },
    runDeferredCalls: function() {
        if (!JSEvents.canPerformEventHandlerRequests()) {
            return
        }
        for (var i = 0; i < JSEvents.deferredCalls.length; ++i) {
            var call = JSEvents.deferredCalls[i];
            JSEvents.deferredCalls.splice(i, 1);
            --i;
            call.targetFunction.apply(null, call.argsList)
        }
    },
    eventHandlers: [],
    removeAllHandlersOnTarget: function(target, eventTypeString) {
        for (var i = 0; i < JSEvents.eventHandlers.length; ++i) {
            if (JSEvents.eventHandlers[i].target == target && (!eventTypeString || eventTypeString == JSEvents.eventHandlers[i].eventTypeString)) {
                JSEvents._removeHandler(i--)
            }
        }
    },
    _removeHandler: function(i) {
        var h = JSEvents.eventHandlers[i];
        h.target.removeEventListener(h.eventTypeString, h.eventListenerFunc, h.useCapture);
        JSEvents.eventHandlers.splice(i, 1)
    },
    registerOrRemoveHandler: function(eventHandler) {
        var jsEventHandler = function jsEventHandler(event) {
            ++JSEvents.inEventHandler;
            JSEvents.currentEventHandler = eventHandler;
            JSEvents.runDeferredCalls();
            eventHandler.handlerFunc(event);
            JSEvents.runDeferredCalls();
            --JSEvents.inEventHandler
        };
        if (eventHandler.callbackfunc) {
            eventHandler.eventListenerFunc = jsEventHandler;
            eventHandler.target.addEventListener(eventHandler.eventTypeString, jsEventHandler, eventHandler.useCapture);
            JSEvents.eventHandlers.push(eventHandler);
            JSEvents.registerRemoveEventListeners()
        } else {
            for (var i = 0; i < JSEvents.eventHandlers.length; ++i) {
                if (JSEvents.eventHandlers[i].target == eventHandler.target && JSEvents.eventHandlers[i].eventTypeString == eventHandler.eventTypeString) {
                    JSEvents._removeHandler(i--)
                }
            }
        }
    },
    queueEventHandlerOnThread_iiii: function(targetThread, eventHandlerFunc, eventTypeId, eventData, userData) {
        withStackSave(function() {
            var varargs = stackAlloc(12);
            GROWABLE_HEAP_I32()[varargs >> 2] = eventTypeId;
            GROWABLE_HEAP_I32()[varargs + 4 >> 2] = eventData;
            GROWABLE_HEAP_I32()[varargs + 8 >> 2] = userData;
            _emscripten_dispatch_to_thread_(targetThread, 637534208, eventHandlerFunc, eventData, varargs)
        })
    },
    getTargetThreadForEventCallback: function(targetThread) {
        switch (targetThread) {
            case 1:
                return 0;
            case 2:
                return PThread.currentProxiedOperationCallerThread;
            default:
                return targetThread
        }
    },
    getNodeNameForTarget: function(target) {
        if (!target) return "";
        if (target == window) return "#window";
        if (target == screen) return "#screen";
        return target && target.nodeName ? target.nodeName : ""
    },
    fullscreenEnabled: function() {
        return document.fullscreenEnabled || document.webkitFullscreenEnabled
    }
};
var currentFullscreenStrategy = {};

function maybeCStringToJsString(cString) {
    return cString > 2 ? UTF8ToString(cString) : cString
}
var specialHTMLTargets = [0, typeof document != "undefined" ? document : 0, typeof window != "undefined" ? window : 0];

function findEventTarget(target) {
    target = maybeCStringToJsString(target);
    var domElement = specialHTMLTargets[target] || (typeof document != "undefined" ? document.querySelector(target) : undefined);
    return domElement
}

function findCanvasEventTarget(target) {
    return findEventTarget(target)
}

function _emscripten_get_canvas_element_size_calling_thread(target, width, height) {
    var canvas = findCanvasEventTarget(target);
    if (!canvas) return -4;
    if (!canvas.controlTransferredOffscreen) {
        GROWABLE_HEAP_I32()[width >> 2] = canvas.width;
        GROWABLE_HEAP_I32()[height >> 2] = canvas.height
    } else {
        return -4
    }
    return 0
}

function _emscripten_get_canvas_element_size_main_thread(target, width, height) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(61, 1, target, width, height);
    return _emscripten_get_canvas_element_size_calling_thread(target, width, height)
}

function _emscripten_get_canvas_element_size(target, width, height) {
    var canvas = findCanvasEventTarget(target);
    if (canvas) {
        return _emscripten_get_canvas_element_size_calling_thread(target, width, height)
    }
    return _emscripten_get_canvas_element_size_main_thread(target, width, height)
}

function getCanvasElementSize(target) {
    return withStackSave(function() {
        var w = stackAlloc(8);
        var h = w + 4;
        var targetInt = stackAlloc(target.id.length + 1);
        stringToUTF8(target.id, targetInt, target.id.length + 1);
        var ret = _emscripten_get_canvas_element_size(targetInt, w, h);
        var size = [GROWABLE_HEAP_I32()[w >> 2], GROWABLE_HEAP_I32()[h >> 2]];
        return size
    })
}

function _emscripten_set_canvas_element_size_calling_thread(target, width, height) {
    var canvas = findCanvasEventTarget(target);
    if (!canvas) return -4;
    if (!canvas.controlTransferredOffscreen) {
        var autoResizeViewport = false;
        if (canvas.GLctxObject && canvas.GLctxObject.GLctx) {
            var prevViewport = canvas.GLctxObject.GLctx.getParameter(2978);
            autoResizeViewport = prevViewport[0] === 0 && prevViewport[1] === 0 && prevViewport[2] === canvas.width && prevViewport[3] === canvas.height
        }
        canvas.width = width;
        canvas.height = height;
        if (autoResizeViewport) {
            canvas.GLctxObject.GLctx.viewport(0, 0, width, height)
        }
    } else {
        return -4
    }
    return 0
}

function _emscripten_set_canvas_element_size_main_thread(target, width, height) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(62, 1, target, width, height);
    return _emscripten_set_canvas_element_size_calling_thread(target, width, height)
}

function _emscripten_set_canvas_element_size(target, width, height) {
    var canvas = findCanvasEventTarget(target);
    if (canvas) {
        return _emscripten_set_canvas_element_size_calling_thread(target, width, height)
    }
    return _emscripten_set_canvas_element_size_main_thread(target, width, height)
}

function setCanvasElementSize(target, width, height) {
    if (!target.controlTransferredOffscreen) {
        target.width = width;
        target.height = height
    } else {
        withStackSave(function() {
            var targetInt = stackAlloc(target.id.length + 1);
            stringToUTF8(target.id, targetInt, target.id.length + 1);
            _emscripten_set_canvas_element_size(targetInt, width, height)
        })
    }
}

function registerRestoreOldStyle(canvas) {
    var canvasSize = getCanvasElementSize(canvas);
    var oldWidth = canvasSize[0];
    var oldHeight = canvasSize[1];
    var oldCssWidth = canvas.style.width;
    var oldCssHeight = canvas.style.height;
    var oldBackgroundColor = canvas.style.backgroundColor;
    var oldDocumentBackgroundColor = document.body.style.backgroundColor;
    var oldPaddingLeft = canvas.style.paddingLeft;
    var oldPaddingRight = canvas.style.paddingRight;
    var oldPaddingTop = canvas.style.paddingTop;
    var oldPaddingBottom = canvas.style.paddingBottom;
    var oldMarginLeft = canvas.style.marginLeft;
    var oldMarginRight = canvas.style.marginRight;
    var oldMarginTop = canvas.style.marginTop;
    var oldMarginBottom = canvas.style.marginBottom;
    var oldDocumentBodyMargin = document.body.style.margin;
    var oldDocumentOverflow = document.documentElement.style.overflow;
    var oldDocumentScroll = document.body.scroll;
    var oldImageRendering = canvas.style.imageRendering;

    function restoreOldStyle() {
        var fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
        if (!fullscreenElement) {
            document.removeEventListener("fullscreenchange", restoreOldStyle);
            document.removeEventListener("webkitfullscreenchange", restoreOldStyle);
            setCanvasElementSize(canvas, oldWidth, oldHeight);
            canvas.style.width = oldCssWidth;
            canvas.style.height = oldCssHeight;
            canvas.style.backgroundColor = oldBackgroundColor;
            if (!oldDocumentBackgroundColor) document.body.style.backgroundColor = "white";
            document.body.style.backgroundColor = oldDocumentBackgroundColor;
            canvas.style.paddingLeft = oldPaddingLeft;
            canvas.style.paddingRight = oldPaddingRight;
            canvas.style.paddingTop = oldPaddingTop;
            canvas.style.paddingBottom = oldPaddingBottom;
            canvas.style.marginLeft = oldMarginLeft;
            canvas.style.marginRight = oldMarginRight;
            canvas.style.marginTop = oldMarginTop;
            canvas.style.marginBottom = oldMarginBottom;
            document.body.style.margin = oldDocumentBodyMargin;
            document.documentElement.style.overflow = oldDocumentOverflow;
            document.body.scroll = oldDocumentScroll;
            canvas.style.imageRendering = oldImageRendering;
            if (canvas.GLctxObject) canvas.GLctxObject.GLctx.viewport(0, 0, oldWidth, oldHeight);
            if (currentFullscreenStrategy.canvasResizedCallback) {
                if (currentFullscreenStrategy.canvasResizedCallbackTargetThread) JSEvents.queueEventHandlerOnThread_iiii(currentFullscreenStrategy.canvasResizedCallbackTargetThread, currentFullscreenStrategy.canvasResizedCallback, 37, 0, currentFullscreenStrategy.canvasResizedCallbackUserData);
                else getWasmTableEntry(currentFullscreenStrategy.canvasResizedCallback)(37, 0, currentFullscreenStrategy.canvasResizedCallbackUserData)
            }
        }
    }
    document.addEventListener("fullscreenchange", restoreOldStyle);
    document.addEventListener("webkitfullscreenchange", restoreOldStyle);
    return restoreOldStyle
}

function setLetterbox(element, topBottom, leftRight) {
    element.style.paddingLeft = element.style.paddingRight = leftRight + "px";
    element.style.paddingTop = element.style.paddingBottom = topBottom + "px"
}

function getBoundingClientRect(e) {
    return specialHTMLTargets.indexOf(e) < 0 ? e.getBoundingClientRect() : {
        "left": 0,
        "top": 0
    }
}

function JSEvents_resizeCanvasForFullscreen(target, strategy) {
    var restoreOldStyle = registerRestoreOldStyle(target);
    var cssWidth = strategy.softFullscreen ? innerWidth : screen.width;
    var cssHeight = strategy.softFullscreen ? innerHeight : screen.height;
    var rect = getBoundingClientRect(target);
    var windowedCssWidth = rect.width;
    var windowedCssHeight = rect.height;
    var canvasSize = getCanvasElementSize(target);
    var windowedRttWidth = canvasSize[0];
    var windowedRttHeight = canvasSize[1];
    if (strategy.scaleMode == 3) {
        setLetterbox(target, (cssHeight - windowedCssHeight) / 2, (cssWidth - windowedCssWidth) / 2);
        cssWidth = windowedCssWidth;
        cssHeight = windowedCssHeight
    } else if (strategy.scaleMode == 2) {
        if (cssWidth * windowedRttHeight < windowedRttWidth * cssHeight) {
            var desiredCssHeight = windowedRttHeight * cssWidth / windowedRttWidth;
            setLetterbox(target, (cssHeight - desiredCssHeight) / 2, 0);
            cssHeight = desiredCssHeight
        } else {
            var desiredCssWidth = windowedRttWidth * cssHeight / windowedRttHeight;
            setLetterbox(target, 0, (cssWidth - desiredCssWidth) / 2);
            cssWidth = desiredCssWidth
        }
    }
    if (!target.style.backgroundColor) target.style.backgroundColor = "black";
    if (!document.body.style.backgroundColor) document.body.style.backgroundColor = "black";
    target.style.width = cssWidth + "px";
    target.style.height = cssHeight + "px";
    if (strategy.filteringMode == 1) {
        target.style.imageRendering = "optimizeSpeed";
        target.style.imageRendering = "-moz-crisp-edges";
        target.style.imageRendering = "-o-crisp-edges";
        target.style.imageRendering = "-webkit-optimize-contrast";
        target.style.imageRendering = "optimize-contrast";
        target.style.imageRendering = "crisp-edges";
        target.style.imageRendering = "pixelated"
    }
    var dpiScale = strategy.canvasResolutionScaleMode == 2 ? devicePixelRatio : 1;
    if (strategy.canvasResolutionScaleMode != 0) {
        var newWidth = cssWidth * dpiScale | 0;
        var newHeight = cssHeight * dpiScale | 0;
        setCanvasElementSize(target, newWidth, newHeight);
        if (target.GLctxObject) target.GLctxObject.GLctx.viewport(0, 0, newWidth, newHeight)
    }
    return restoreOldStyle
}

function JSEvents_requestFullscreen(target, strategy) {
    if (strategy.scaleMode != 0 || strategy.canvasResolutionScaleMode != 0) {
        JSEvents_resizeCanvasForFullscreen(target, strategy)
    }
    if (target.requestFullscreen) {
        target.requestFullscreen()
    } else if (target.webkitRequestFullscreen) {
        target.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
    } else {
        return JSEvents.fullscreenEnabled() ? -3 : -1
    }
    currentFullscreenStrategy = strategy;
    if (strategy.canvasResizedCallback) {
        if (strategy.canvasResizedCallbackTargetThread) JSEvents.queueEventHandlerOnThread_iiii(strategy.canvasResizedCallbackTargetThread, strategy.canvasResizedCallback, 37, 0, strategy.canvasResizedCallbackUserData);
        else getWasmTableEntry(strategy.canvasResizedCallback)(37, 0, strategy.canvasResizedCallbackUserData)
    }
    return 0
}

function _emscripten_exit_fullscreen() {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(60, 1);
    if (!JSEvents.fullscreenEnabled()) return -1;
    JSEvents.removeDeferredCalls(JSEvents_requestFullscreen);
    var d = specialHTMLTargets[1];
    if (d.exitFullscreen) {
        d.fullscreenElement && d.exitFullscreen()
    } else if (d.webkitExitFullscreen) {
        d.webkitFullscreenElement && d.webkitExitFullscreen()
    } else {
        return -1
    }
    return 0
}

function requestPointerLock(target) {
    if (target.requestPointerLock) {
        target.requestPointerLock()
    } else if (target.msRequestPointerLock) {
        target.msRequestPointerLock()
    } else {
        if (document.body.requestPointerLock || document.body.msRequestPointerLock) {
            return -3
        }
        return -1
    }
    return 0
}

function _emscripten_exit_pointerlock() {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(63, 1);
    JSEvents.removeDeferredCalls(requestPointerLock);
    if (document.exitPointerLock) {
        document.exitPointerLock()
    } else if (document.msExitPointerLock) {
        document.msExitPointerLock()
    } else {
        return -1
    }
    return 0
}

function _emscripten_get_device_pixel_ratio() {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(64, 1);
    return devicePixelRatio
}

function _emscripten_get_element_css_size(target, width, height) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(65, 1, target, width, height);
    target = findEventTarget(target);
    if (!target) return -4;
    var rect = getBoundingClientRect(target);
    GROWABLE_HEAP_F64()[width >> 3] = rect.width;
    GROWABLE_HEAP_F64()[height >> 3] = rect.height;
    return 0
}

function fillGamepadEventData(eventStruct, e) {
    GROWABLE_HEAP_F64()[eventStruct >> 3] = e.timestamp;
    for (var i = 0; i < e.axes.length; ++i) {
        GROWABLE_HEAP_F64()[eventStruct + i * 8 + 16 >> 3] = e.axes[i]
    }
    for (var i = 0; i < e.buttons.length; ++i) {
        if (typeof e.buttons[i] == "object") {
            GROWABLE_HEAP_F64()[eventStruct + i * 8 + 528 >> 3] = e.buttons[i].value
        } else {
            GROWABLE_HEAP_F64()[eventStruct + i * 8 + 528 >> 3] = e.buttons[i]
        }
    }
    for (var i = 0; i < e.buttons.length; ++i) {
        if (typeof e.buttons[i] == "object") {
            GROWABLE_HEAP_I32()[eventStruct + i * 4 + 1040 >> 2] = e.buttons[i].pressed
        } else {
            GROWABLE_HEAP_I32()[eventStruct + i * 4 + 1040 >> 2] = e.buttons[i] == 1
        }
    }
    GROWABLE_HEAP_I32()[eventStruct + 1296 >> 2] = e.connected;
    GROWABLE_HEAP_I32()[eventStruct + 1300 >> 2] = e.index;
    GROWABLE_HEAP_I32()[eventStruct + 8 >> 2] = e.axes.length;
    GROWABLE_HEAP_I32()[eventStruct + 12 >> 2] = e.buttons.length;
    stringToUTF8(e.id, eventStruct + 1304, 64);
    stringToUTF8(e.mapping, eventStruct + 1368, 64)
}

function _emscripten_get_gamepad_status(index, gamepadState) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(66, 1, index, gamepadState);
    if (index < 0 || index >= JSEvents.lastGamepadState.length) return -5;
    if (!JSEvents.lastGamepadState[index]) return -7;
    fillGamepadEventData(gamepadState, JSEvents.lastGamepadState[index]);
    return 0
}

function getHeapMax() {
    return 2147483648
}

function _emscripten_get_heap_max() {
    return getHeapMax()
}

function _emscripten_get_num_gamepads() {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(67, 1);
    return JSEvents.lastGamepadState.length
}

function _emscripten_get_screen_size(width, height) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(68, 1, width, height);
    GROWABLE_HEAP_I32()[width >> 2] = screen.width;
    GROWABLE_HEAP_I32()[height >> 2] = screen.height
}

function _emscripten_glActiveTexture(x0) {
    GLctx["activeTexture"](x0)
}

function _emscripten_glAttachShader(program, shader) {
    GLctx.attachShader(GL.programs[program], GL.shaders[shader])
}

function _emscripten_glBeginQuery(target, id) {
    GLctx["beginQuery"](target, GL.queries[id])
}

function _emscripten_glBeginQueryEXT(target, id) {
    GLctx.disjointTimerQueryExt["beginQueryEXT"](target, GL.queries[id])
}

function _emscripten_glBeginTransformFeedback(x0) {
    GLctx["beginTransformFeedback"](x0)
}

function _emscripten_glBindAttribLocation(program, index, name) {
    GLctx.bindAttribLocation(GL.programs[program], index, UTF8ToString(name))
}

function _emscripten_glBindBuffer(target, buffer) {
    if (target == 34962) {
        GLctx.currentArrayBufferBinding = buffer
    } else if (target == 34963) {
        GLctx.currentElementArrayBufferBinding = buffer
    }
    if (target == 35051) {
        GLctx.currentPixelPackBufferBinding = buffer
    } else if (target == 35052) {
        GLctx.currentPixelUnpackBufferBinding = buffer
    }
    GLctx.bindBuffer(target, GL.buffers[buffer])
}

function _emscripten_glBindBufferBase(target, index, buffer) {
    GLctx["bindBufferBase"](target, index, GL.buffers[buffer])
}

function _emscripten_glBindBufferRange(target, index, buffer, offset, ptrsize) {
    GLctx["bindBufferRange"](target, index, GL.buffers[buffer], offset, ptrsize)
}

function _emscripten_glBindFramebuffer(target, framebuffer) {
    GLctx.bindFramebuffer(target, GL.framebuffers[framebuffer])
}

function _emscripten_glBindRenderbuffer(target, renderbuffer) {
    GLctx.bindRenderbuffer(target, GL.renderbuffers[renderbuffer])
}

function _emscripten_glBindSampler(unit, sampler) {
    GLctx["bindSampler"](unit, GL.samplers[sampler])
}

function _emscripten_glBindTexture(target, texture) {
    GLctx.bindTexture(target, GL.textures[texture])
}

function _emscripten_glBindTransformFeedback(target, id) {
    GLctx["bindTransformFeedback"](target, GL.transformFeedbacks[id])
}

function _emscripten_glBindVertexArray(vao) {
    GLctx["bindVertexArray"](GL.vaos[vao]);
    var ibo = GLctx.getParameter(34965);
    GLctx.currentElementArrayBufferBinding = ibo ? ibo.name | 0 : 0
}

function _emscripten_glBindVertexArrayOES(vao) {
    GLctx["bindVertexArray"](GL.vaos[vao]);
    var ibo = GLctx.getParameter(34965);
    GLctx.currentElementArrayBufferBinding = ibo ? ibo.name | 0 : 0
}

function _emscripten_glBlendColor(x0, x1, x2, x3) {
    GLctx["blendColor"](x0, x1, x2, x3)
}

function _emscripten_glBlendEquation(x0) {
    GLctx["blendEquation"](x0)
}

function _emscripten_glBlendEquationSeparate(x0, x1) {
    GLctx["blendEquationSeparate"](x0, x1)
}

function _emscripten_glBlendFunc(x0, x1) {
    GLctx["blendFunc"](x0, x1)
}

function _emscripten_glBlendFuncSeparate(x0, x1, x2, x3) {
    GLctx["blendFuncSeparate"](x0, x1, x2, x3)
}

function _emscripten_glBlitFramebuffer(x0, x1, x2, x3, x4, x5, x6, x7, x8, x9) {
    GLctx["blitFramebuffer"](x0, x1, x2, x3, x4, x5, x6, x7, x8, x9)
}

function _emscripten_glBufferData(target, size, data, usage) {
    if (true) {
        if (data && size) {
            GLctx.bufferData(target, GROWABLE_HEAP_U8(), usage, data, size)
        } else {
            GLctx.bufferData(target, size, usage)
        }
    } else {
        GLctx.bufferData(target, data ? GROWABLE_HEAP_U8().subarray(data, data + size) : size, usage)
    }
}

function _emscripten_glBufferSubData(target, offset, size, data) {
    if (true) {
        size && GLctx.bufferSubData(target, offset, GROWABLE_HEAP_U8(), data, size);
        return
    }
    GLctx.bufferSubData(target, offset, GROWABLE_HEAP_U8().subarray(data, data + size))
}

function _emscripten_glCheckFramebufferStatus(x0) {
    return GLctx["checkFramebufferStatus"](x0)
}

function _emscripten_glClear(x0) {
    GLctx["clear"](x0)
}

function _emscripten_glClearBufferfi(x0, x1, x2, x3) {
    GLctx["clearBufferfi"](x0, x1, x2, x3)
}

function _emscripten_glClearBufferfv(buffer, drawbuffer, value) {
    GLctx["clearBufferfv"](buffer, drawbuffer, GROWABLE_HEAP_F32(), value >> 2)
}

function _emscripten_glClearBufferiv(buffer, drawbuffer, value) {
    GLctx["clearBufferiv"](buffer, drawbuffer, GROWABLE_HEAP_I32(), value >> 2)
}

function _emscripten_glClearBufferuiv(buffer, drawbuffer, value) {
    GLctx["clearBufferuiv"](buffer, drawbuffer, GROWABLE_HEAP_U32(), value >> 2)
}

function _emscripten_glClearColor(x0, x1, x2, x3) {
    GLctx["clearColor"](x0, x1, x2, x3)
}

function _emscripten_glClearDepthf(x0) {
    GLctx["clearDepth"](x0)
}

function _emscripten_glClearStencil(x0) {
    GLctx["clearStencil"](x0)
}

function convertI32PairToI53(lo, hi) {
    return (lo >>> 0) + hi * 4294967296
}

function _emscripten_glClientWaitSync(sync, flags, timeoutLo, timeoutHi) {
    return GLctx.clientWaitSync(GL.syncs[sync], flags, convertI32PairToI53(timeoutLo, timeoutHi))
}

function _emscripten_glColorMask(red, green, blue, alpha) {
    GLctx.colorMask(!!red, !!green, !!blue, !!alpha)
}

function _emscripten_glCompileShader(shader) {
    GLctx.compileShader(GL.shaders[shader])
}

function _emscripten_glCompressedTexImage2D(target, level, internalFormat, width, height, border, imageSize, data) {
    if (true) {
        if (GLctx.currentPixelUnpackBufferBinding || !imageSize) {
            GLctx["compressedTexImage2D"](target, level, internalFormat, width, height, border, imageSize, data)
        } else {
            GLctx["compressedTexImage2D"](target, level, internalFormat, width, height, border, GROWABLE_HEAP_U8(), data, imageSize)
        }
        return
    }
    GLctx["compressedTexImage2D"](target, level, internalFormat, width, height, border, data ? GROWABLE_HEAP_U8().subarray(data, data + imageSize) : null)
}

function _emscripten_glCompressedTexImage3D(target, level, internalFormat, width, height, depth, border, imageSize, data) {
    if (GLctx.currentPixelUnpackBufferBinding) {
        GLctx["compressedTexImage3D"](target, level, internalFormat, width, height, depth, border, imageSize, data)
    } else {
        GLctx["compressedTexImage3D"](target, level, internalFormat, width, height, depth, border, GROWABLE_HEAP_U8(), data, imageSize)
    }
}

function _emscripten_glCompressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, imageSize, data) {
    if (true) {
        if (GLctx.currentPixelUnpackBufferBinding || !imageSize) {
            GLctx["compressedTexSubImage2D"](target, level, xoffset, yoffset, width, height, format, imageSize, data)
        } else {
            GLctx["compressedTexSubImage2D"](target, level, xoffset, yoffset, width, height, format, GROWABLE_HEAP_U8(), data, imageSize)
        }
        return
    }
    GLctx["compressedTexSubImage2D"](target, level, xoffset, yoffset, width, height, format, data ? GROWABLE_HEAP_U8().subarray(data, data + imageSize) : null)
}

function _emscripten_glCompressedTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, imageSize, data) {
    if (GLctx.currentPixelUnpackBufferBinding) {
        GLctx["compressedTexSubImage3D"](target, level, xoffset, yoffset, zoffset, width, height, depth, format, imageSize, data)
    } else {
        GLctx["compressedTexSubImage3D"](target, level, xoffset, yoffset, zoffset, width, height, depth, format, GROWABLE_HEAP_U8(), data, imageSize)
    }
}

function _emscripten_glCopyBufferSubData(x0, x1, x2, x3, x4) {
    GLctx["copyBufferSubData"](x0, x1, x2, x3, x4)
}

function _emscripten_glCopyTexImage2D(x0, x1, x2, x3, x4, x5, x6, x7) {
    GLctx["copyTexImage2D"](x0, x1, x2, x3, x4, x5, x6, x7)
}

function _emscripten_glCopyTexSubImage2D(x0, x1, x2, x3, x4, x5, x6, x7) {
    GLctx["copyTexSubImage2D"](x0, x1, x2, x3, x4, x5, x6, x7)
}

function _emscripten_glCopyTexSubImage3D(x0, x1, x2, x3, x4, x5, x6, x7, x8) {
    GLctx["copyTexSubImage3D"](x0, x1, x2, x3, x4, x5, x6, x7, x8)
}

function _emscripten_glCreateProgram() {
    var id = GL.getNewId(GL.programs);
    var program = GLctx.createProgram();
    program.name = id;
    program.maxUniformLength = program.maxAttributeLength = program.maxUniformBlockNameLength = 0;
    program.uniformIdCounter = 1;
    GL.programs[id] = program;
    return id
}

function _emscripten_glCreateShader(shaderType) {
    var id = GL.getNewId(GL.shaders);
    GL.shaders[id] = GLctx.createShader(shaderType);
    return id
}

function _emscripten_glCullFace(x0) {
    GLctx["cullFace"](x0)
}

function _emscripten_glDeleteBuffers(n, buffers) {
    for (var i = 0; i < n; i++) {
        var id = GROWABLE_HEAP_I32()[buffers + i * 4 >> 2];
        var buffer = GL.buffers[id];
        if (!buffer) continue;
        GLctx.deleteBuffer(buffer);
        buffer.name = 0;
        GL.buffers[id] = null;
        if (id == GLctx.currentArrayBufferBinding) GLctx.currentArrayBufferBinding = 0;
        if (id == GLctx.currentElementArrayBufferBinding) GLctx.currentElementArrayBufferBinding = 0;
        if (id == GLctx.currentPixelPackBufferBinding) GLctx.currentPixelPackBufferBinding = 0;
        if (id == GLctx.currentPixelUnpackBufferBinding) GLctx.currentPixelUnpackBufferBinding = 0
    }
}

function _emscripten_glDeleteFramebuffers(n, framebuffers) {
    for (var i = 0; i < n; ++i) {
        var id = GROWABLE_HEAP_I32()[framebuffers + i * 4 >> 2];
        var framebuffer = GL.framebuffers[id];
        if (!framebuffer) continue;
        GLctx.deleteFramebuffer(framebuffer);
        framebuffer.name = 0;
        GL.framebuffers[id] = null
    }
}

function _emscripten_glDeleteProgram(id) {
    if (!id) return;
    var program = GL.programs[id];
    if (!program) {
        GL.recordError(1281);
        return
    }
    GLctx.deleteProgram(program);
    program.name = 0;
    GL.programs[id] = null
}

function _emscripten_glDeleteQueries(n, ids) {
    for (var i = 0; i < n; i++) {
        var id = GROWABLE_HEAP_I32()[ids + i * 4 >> 2];
        var query = GL.queries[id];
        if (!query) continue;
        GLctx["deleteQuery"](query);
        GL.queries[id] = null
    }
}

function _emscripten_glDeleteQueriesEXT(n, ids) {
    for (var i = 0; i < n; i++) {
        var id = GROWABLE_HEAP_I32()[ids + i * 4 >> 2];
        var query = GL.queries[id];
        if (!query) continue;
        GLctx.disjointTimerQueryExt["deleteQueryEXT"](query);
        GL.queries[id] = null
    }
}

function _emscripten_glDeleteRenderbuffers(n, renderbuffers) {
    for (var i = 0; i < n; i++) {
        var id = GROWABLE_HEAP_I32()[renderbuffers + i * 4 >> 2];
        var renderbuffer = GL.renderbuffers[id];
        if (!renderbuffer) continue;
        GLctx.deleteRenderbuffer(renderbuffer);
        renderbuffer.name = 0;
        GL.renderbuffers[id] = null
    }
}

function _emscripten_glDeleteSamplers(n, samplers) {
    for (var i = 0; i < n; i++) {
        var id = GROWABLE_HEAP_I32()[samplers + i * 4 >> 2];
        var sampler = GL.samplers[id];
        if (!sampler) continue;
        GLctx["deleteSampler"](sampler);
        sampler.name = 0;
        GL.samplers[id] = null
    }
}

function _emscripten_glDeleteShader(id) {
    if (!id) return;
    var shader = GL.shaders[id];
    if (!shader) {
        GL.recordError(1281);
        return
    }
    GLctx.deleteShader(shader);
    GL.shaders[id] = null
}

function _emscripten_glDeleteSync(id) {
    if (!id) return;
    var sync = GL.syncs[id];
    if (!sync) {
        GL.recordError(1281);
        return
    }
    GLctx.deleteSync(sync);
    sync.name = 0;
    GL.syncs[id] = null
}

function _emscripten_glDeleteTextures(n, textures) {
    for (var i = 0; i < n; i++) {
        var id = GROWABLE_HEAP_I32()[textures + i * 4 >> 2];
        var texture = GL.textures[id];
        if (!texture) continue;
        GLctx.deleteTexture(texture);
        texture.name = 0;
        GL.textures[id] = null
    }
}

function _emscripten_glDeleteTransformFeedbacks(n, ids) {
    for (var i = 0; i < n; i++) {
        var id = GROWABLE_HEAP_I32()[ids + i * 4 >> 2];
        var transformFeedback = GL.transformFeedbacks[id];
        if (!transformFeedback) continue;
        GLctx["deleteTransformFeedback"](transformFeedback);
        transformFeedback.name = 0;
        GL.transformFeedbacks[id] = null
    }
}

function _emscripten_glDeleteVertexArrays(n, vaos) {
    for (var i = 0; i < n; i++) {
        var id = GROWABLE_HEAP_I32()[vaos + i * 4 >> 2];
        GLctx["deleteVertexArray"](GL.vaos[id]);
        GL.vaos[id] = null
    }
}

function _emscripten_glDeleteVertexArraysOES(n, vaos) {
    for (var i = 0; i < n; i++) {
        var id = GROWABLE_HEAP_I32()[vaos + i * 4 >> 2];
        GLctx["deleteVertexArray"](GL.vaos[id]);
        GL.vaos[id] = null
    }
}

function _emscripten_glDepthFunc(x0) {
    GLctx["depthFunc"](x0)
}

function _emscripten_glDepthMask(flag) {
    GLctx.depthMask(!!flag)
}

function _emscripten_glDepthRangef(x0, x1) {
    GLctx["depthRange"](x0, x1)
}

function _emscripten_glDetachShader(program, shader) {
    GLctx.detachShader(GL.programs[program], GL.shaders[shader])
}

function _emscripten_glDisable(x0) {
    GLctx["disable"](x0)
}

function _emscripten_glDisableVertexAttribArray(index) {
    var cb = GL.currentContext.clientBuffers[index];
    cb.enabled = false;
    GLctx.disableVertexAttribArray(index)
}

function _emscripten_glDrawArrays(mode, first, count) {
    GL.preDrawHandleClientVertexAttribBindings(first + count);
    GLctx.drawArrays(mode, first, count);
    GL.postDrawHandleClientVertexAttribBindings()
}

function _emscripten_glDrawArraysInstanced(mode, first, count, primcount) {
    GLctx["drawArraysInstanced"](mode, first, count, primcount)
}

function _emscripten_glDrawArraysInstancedANGLE(mode, first, count, primcount) {
    GLctx["drawArraysInstanced"](mode, first, count, primcount)
}

function _emscripten_glDrawArraysInstancedARB(mode, first, count, primcount) {
    GLctx["drawArraysInstanced"](mode, first, count, primcount)
}

function _emscripten_glDrawArraysInstancedEXT(mode, first, count, primcount) {
    GLctx["drawArraysInstanced"](mode, first, count, primcount)
}

function _emscripten_glDrawArraysInstancedNV(mode, first, count, primcount) {
    GLctx["drawArraysInstanced"](mode, first, count, primcount)
}
var tempFixedLengthArray = [];

function _emscripten_glDrawBuffers(n, bufs) {
    var bufArray = tempFixedLengthArray[n];
    for (var i = 0; i < n; i++) {
        bufArray[i] = GROWABLE_HEAP_I32()[bufs + i * 4 >> 2]
    }
    GLctx["drawBuffers"](bufArray)
}

function _emscripten_glDrawBuffersEXT(n, bufs) {
    var bufArray = tempFixedLengthArray[n];
    for (var i = 0; i < n; i++) {
        bufArray[i] = GROWABLE_HEAP_I32()[bufs + i * 4 >> 2]
    }
    GLctx["drawBuffers"](bufArray)
}

function _emscripten_glDrawBuffersWEBGL(n, bufs) {
    var bufArray = tempFixedLengthArray[n];
    for (var i = 0; i < n; i++) {
        bufArray[i] = GROWABLE_HEAP_I32()[bufs + i * 4 >> 2]
    }
    GLctx["drawBuffers"](bufArray)
}

function _emscripten_glDrawElements(mode, count, type, indices) {
    var buf;
    if (!GLctx.currentElementArrayBufferBinding) {
        var size = GL.calcBufLength(1, type, 0, count);
        buf = GL.getTempIndexBuffer(size);
        GLctx.bindBuffer(34963, buf);
        GLctx.bufferSubData(34963, 0, GROWABLE_HEAP_U8().subarray(indices, indices + size));
        indices = 0
    }
    GL.preDrawHandleClientVertexAttribBindings(count);
    GLctx.drawElements(mode, count, type, indices);
    GL.postDrawHandleClientVertexAttribBindings(count);
    if (!GLctx.currentElementArrayBufferBinding) {
        GLctx.bindBuffer(34963, null)
    }
}

function _emscripten_glDrawElementsInstanced(mode, count, type, indices, primcount) {
    GLctx["drawElementsInstanced"](mode, count, type, indices, primcount)
}

function _emscripten_glDrawElementsInstancedANGLE(mode, count, type, indices, primcount) {
    GLctx["drawElementsInstanced"](mode, count, type, indices, primcount)
}

function _emscripten_glDrawElementsInstancedARB(mode, count, type, indices, primcount) {
    GLctx["drawElementsInstanced"](mode, count, type, indices, primcount)
}

function _emscripten_glDrawElementsInstancedEXT(mode, count, type, indices, primcount) {
    GLctx["drawElementsInstanced"](mode, count, type, indices, primcount)
}

function _emscripten_glDrawElementsInstancedNV(mode, count, type, indices, primcount) {
    GLctx["drawElementsInstanced"](mode, count, type, indices, primcount)
}

function _glDrawElements(mode, count, type, indices) {
    var buf;
    if (!GLctx.currentElementArrayBufferBinding) {
        var size = GL.calcBufLength(1, type, 0, count);
        buf = GL.getTempIndexBuffer(size);
        GLctx.bindBuffer(34963, buf);
        GLctx.bufferSubData(34963, 0, GROWABLE_HEAP_U8().subarray(indices, indices + size));
        indices = 0
    }
    GL.preDrawHandleClientVertexAttribBindings(count);
    GLctx.drawElements(mode, count, type, indices);
    GL.postDrawHandleClientVertexAttribBindings(count);
    if (!GLctx.currentElementArrayBufferBinding) {
        GLctx.bindBuffer(34963, null)
    }
}

function _emscripten_glDrawRangeElements(mode, start, end, count, type, indices) {
    _glDrawElements(mode, count, type, indices)
}

function _emscripten_glEnable(x0) {
    GLctx["enable"](x0)
}

function _emscripten_glEnableVertexAttribArray(index) {
    var cb = GL.currentContext.clientBuffers[index];
    cb.enabled = true;
    GLctx.enableVertexAttribArray(index)
}

function _emscripten_glEndQuery(x0) {
    GLctx["endQuery"](x0)
}

function _emscripten_glEndQueryEXT(target) {
    GLctx.disjointTimerQueryExt["endQueryEXT"](target)
}

function _emscripten_glEndTransformFeedback() {
    GLctx["endTransformFeedback"]()
}

function _emscripten_glFenceSync(condition, flags) {
    var sync = GLctx.fenceSync(condition, flags);
    if (sync) {
        var id = GL.getNewId(GL.syncs);
        sync.name = id;
        GL.syncs[id] = sync;
        return id
    }
    return 0
}

function _emscripten_glFinish() {
    GLctx["finish"]()
}

function _emscripten_glFlush() {
    GLctx["flush"]()
}

function emscriptenWebGLGetBufferBinding(target) {
    switch (target) {
        case 34962:
            target = 34964;
            break;
        case 34963:
            target = 34965;
            break;
        case 35051:
            target = 35053;
            break;
        case 35052:
            target = 35055;
            break;
        case 35982:
            target = 35983;
            break;
        case 36662:
            target = 36662;
            break;
        case 36663:
            target = 36663;
            break;
        case 35345:
            target = 35368;
            break
    }
    var buffer = GLctx.getParameter(target);
    if (buffer) return buffer.name | 0;
    else return 0
}

function emscriptenWebGLValidateMapBufferTarget(target) {
    switch (target) {
        case 34962:
        case 34963:
        case 36662:
        case 36663:
        case 35051:
        case 35052:
        case 35882:
        case 35982:
        case 35345:
            return true;
        default:
            return false
    }
}

function _emscripten_glFlushMappedBufferRange(target, offset, length) {
    if (!emscriptenWebGLValidateMapBufferTarget(target)) {
        GL.recordError(1280);
        err("GL_INVALID_ENUM in glFlushMappedBufferRange");
        return
    }
    var mapping = GL.mappedBuffers[emscriptenWebGLGetBufferBinding(target)];
    if (!mapping) {
        GL.recordError(1282);
        err("buffer was never mapped in glFlushMappedBufferRange");
        return
    }
    if (!(mapping.access & 16)) {
        GL.recordError(1282);
        err("buffer was not mapped with GL_MAP_FLUSH_EXPLICIT_BIT in glFlushMappedBufferRange");
        return
    }
    if (offset < 0 || length < 0 || offset + length > mapping.length) {
        GL.recordError(1281);
        err("invalid range in glFlushMappedBufferRange");
        return
    }
    GLctx.bufferSubData(target, mapping.offset, GROWABLE_HEAP_U8().subarray(mapping.mem + offset, mapping.mem + offset + length))
}

function _emscripten_glFramebufferRenderbuffer(target, attachment, renderbuffertarget, renderbuffer) {
    GLctx.framebufferRenderbuffer(target, attachment, renderbuffertarget, GL.renderbuffers[renderbuffer])
}

function _emscripten_glFramebufferTexture2D(target, attachment, textarget, texture, level) {
    GLctx.framebufferTexture2D(target, attachment, textarget, GL.textures[texture], level)
}

function _emscripten_glFramebufferTextureLayer(target, attachment, texture, level, layer) {
    GLctx.framebufferTextureLayer(target, attachment, GL.textures[texture], level, layer)
}

function _emscripten_glFrontFace(x0) {
    GLctx["frontFace"](x0)
}

function __glGenObject(n, buffers, createFunction, objectTable) {
    for (var i = 0; i < n; i++) {
        var buffer = GLctx[createFunction]();
        var id = buffer && GL.getNewId(objectTable);
        if (buffer) {
            buffer.name = id;
            objectTable[id] = buffer
        } else {
            GL.recordError(1282)
        }
        GROWABLE_HEAP_I32()[buffers + i * 4 >> 2] = id
    }
}

function _emscripten_glGenBuffers(n, buffers) {
    __glGenObject(n, buffers, "createBuffer", GL.buffers)
}

function _emscripten_glGenFramebuffers(n, ids) {
    __glGenObject(n, ids, "createFramebuffer", GL.framebuffers)
}

function _emscripten_glGenQueries(n, ids) {
    __glGenObject(n, ids, "createQuery", GL.queries)
}

function _emscripten_glGenQueriesEXT(n, ids) {
    for (var i = 0; i < n; i++) {
        var query = GLctx.disjointTimerQueryExt["createQueryEXT"]();
        if (!query) {
            GL.recordError(1282);
            while (i < n) GROWABLE_HEAP_I32()[ids + i++ * 4 >> 2] = 0;
            return
        }
        var id = GL.getNewId(GL.queries);
        query.name = id;
        GL.queries[id] = query;
        GROWABLE_HEAP_I32()[ids + i * 4 >> 2] = id
    }
}

function _emscripten_glGenRenderbuffers(n, renderbuffers) {
    __glGenObject(n, renderbuffers, "createRenderbuffer", GL.renderbuffers)
}

function _emscripten_glGenSamplers(n, samplers) {
    __glGenObject(n, samplers, "createSampler", GL.samplers)
}

function _emscripten_glGenTextures(n, textures) {
    __glGenObject(n, textures, "createTexture", GL.textures)
}

function _emscripten_glGenTransformFeedbacks(n, ids) {
    __glGenObject(n, ids, "createTransformFeedback", GL.transformFeedbacks)
}

function _emscripten_glGenVertexArrays(n, arrays) {
    __glGenObject(n, arrays, "createVertexArray", GL.vaos)
}

function _emscripten_glGenVertexArraysOES(n, arrays) {
    __glGenObject(n, arrays, "createVertexArray", GL.vaos)
}

function _emscripten_glGenerateMipmap(x0) {
    GLctx["generateMipmap"](x0)
}

function __glGetActiveAttribOrUniform(funcName, program, index, bufSize, length, size, type, name) {
    program = GL.programs[program];
    var info = GLctx[funcName](program, index);
    if (info) {
        var numBytesWrittenExclNull = name && stringToUTF8(info.name, name, bufSize);
        if (length) GROWABLE_HEAP_I32()[length >> 2] = numBytesWrittenExclNull;
        if (size) GROWABLE_HEAP_I32()[size >> 2] = info.size;
        if (type) GROWABLE_HEAP_I32()[type >> 2] = info.type
    }
}

function _emscripten_glGetActiveAttrib(program, index, bufSize, length, size, type, name) {
    __glGetActiveAttribOrUniform("getActiveAttrib", program, index, bufSize, length, size, type, name)
}

function _emscripten_glGetActiveUniform(program, index, bufSize, length, size, type, name) {
    __glGetActiveAttribOrUniform("getActiveUniform", program, index, bufSize, length, size, type, name)
}

function _emscripten_glGetActiveUniformBlockName(program, uniformBlockIndex, bufSize, length, uniformBlockName) {
    program = GL.programs[program];
    var result = GLctx["getActiveUniformBlockName"](program, uniformBlockIndex);
    if (!result) return;
    if (uniformBlockName && bufSize > 0) {
        var numBytesWrittenExclNull = stringToUTF8(result, uniformBlockName, bufSize);
        if (length) GROWABLE_HEAP_I32()[length >> 2] = numBytesWrittenExclNull
    } else {
        if (length) GROWABLE_HEAP_I32()[length >> 2] = 0
    }
}

function _emscripten_glGetActiveUniformBlockiv(program, uniformBlockIndex, pname, params) {
    if (!params) {
        GL.recordError(1281);
        return
    }
    program = GL.programs[program];
    if (pname == 35393) {
        var name = GLctx["getActiveUniformBlockName"](program, uniformBlockIndex);
        GROWABLE_HEAP_I32()[params >> 2] = name.length + 1;
        return
    }
    var result = GLctx["getActiveUniformBlockParameter"](program, uniformBlockIndex, pname);
    if (result === null) return;
    if (pname == 35395) {
        for (var i = 0; i < result.length; i++) {
            GROWABLE_HEAP_I32()[params + i * 4 >> 2] = result[i]
        }
    } else {
        GROWABLE_HEAP_I32()[params >> 2] = result
    }
}

function _emscripten_glGetActiveUniformsiv(program, uniformCount, uniformIndices, pname, params) {
    if (!params) {
        GL.recordError(1281);
        return
    }
    if (uniformCount > 0 && uniformIndices == 0) {
        GL.recordError(1281);
        return
    }
    program = GL.programs[program];
    var ids = [];
    for (var i = 0; i < uniformCount; i++) {
        ids.push(GROWABLE_HEAP_I32()[uniformIndices + i * 4 >> 2])
    }
    var result = GLctx["getActiveUniforms"](program, ids, pname);
    if (!result) return;
    var len = result.length;
    for (var i = 0; i < len; i++) {
        GROWABLE_HEAP_I32()[params + i * 4 >> 2] = result[i]
    }
}

function _emscripten_glGetAttachedShaders(program, maxCount, count, shaders) {
    var result = GLctx.getAttachedShaders(GL.programs[program]);
    var len = result.length;
    if (len > maxCount) {
        len = maxCount
    }
    GROWABLE_HEAP_I32()[count >> 2] = len;
    for (var i = 0; i < len; ++i) {
        var id = GL.shaders.indexOf(result[i]);
        GROWABLE_HEAP_I32()[shaders + i * 4 >> 2] = id
    }
}

function _emscripten_glGetAttribLocation(program, name) {
    return GLctx.getAttribLocation(GL.programs[program], UTF8ToString(name))
}

function writeI53ToI64(ptr, num) {
    GROWABLE_HEAP_U32()[ptr >> 2] = num;
    GROWABLE_HEAP_U32()[ptr + 4 >> 2] = (num - GROWABLE_HEAP_U32()[ptr >> 2]) / 4294967296
}

function emscriptenWebGLGet(name_, p, type) {
    if (!p) {
        GL.recordError(1281);
        return
    }
    var ret = undefined;
    switch (name_) {
        case 36346:
            ret = 1;
            break;
        case 36344:
            if (type != 0 && type != 1) {
                GL.recordError(1280)
            }
            return;
        case 34814:
        case 36345:
            ret = 0;
            break;
        case 34466:
            var formats = GLctx.getParameter(34467);
            ret = formats ? formats.length : 0;
            break;
        case 33309:
            if (GL.currentContext.version < 2) {
                GL.recordError(1282);
                return
            }
            var exts = GLctx.getSupportedExtensions() || [];
            ret = 2 * exts.length;
            break;
        case 33307:
        case 33308:
            if (GL.currentContext.version < 2) {
                GL.recordError(1280);
                return
            }
            ret = name_ == 33307 ? 3 : 0;
            break
    }
    if (ret === undefined) {
        var result = GLctx.getParameter(name_);
        switch (typeof result) {
            case "number":
                ret = result;
                break;
            case "boolean":
                ret = result ? 1 : 0;
                break;
            case "string":
                GL.recordError(1280);
                return;
            case "object":
                if (result === null) {
                    switch (name_) {
                        case 34964:
                        case 35725:
                        case 34965:
                        case 36006:
                        case 36007:
                        case 32873:
                        case 34229:
                        case 36662:
                        case 36663:
                        case 35053:
                        case 35055:
                        case 36010:
                        case 35097:
                        case 35869:
                        case 32874:
                        case 36389:
                        case 35983:
                        case 35368:
                        case 34068: {
                            ret = 0;
                            break
                        }
                        default: {
                            GL.recordError(1280);
                            return
                        }
                    }
                } else if (result instanceof Float32Array || result instanceof Uint32Array || result instanceof Int32Array || result instanceof Array) {
                    for (var i = 0; i < result.length; ++i) {
                        switch (type) {
                            case 0:
                                GROWABLE_HEAP_I32()[p + i * 4 >> 2] = result[i];
                                break;
                            case 2:
                                GROWABLE_HEAP_F32()[p + i * 4 >> 2] = result[i];
                                break;
                            case 4:
                                GROWABLE_HEAP_I8()[p + i >> 0] = result[i] ? 1 : 0;
                                break
                        }
                    }
                    return
                } else {
                    try {
                        ret = result.name | 0
                    } catch (e) {
                        GL.recordError(1280);
                        err("GL_INVALID_ENUM in glGet" + type + "v: Unknown object returned from WebGL getParameter(" + name_ + ")! (error: " + e + ")");
                        return
                    }
                }
                break;
            default:
                GL.recordError(1280);
                err("GL_INVALID_ENUM in glGet" + type + "v: Native code calling glGet" + type + "v(" + name_ + ") and it returns " + result + " of type " + typeof result + "!");
                return
        }
    }
    switch (type) {
        case 1:
            writeI53ToI64(p, ret);
            break;
        case 0:
            GROWABLE_HEAP_I32()[p >> 2] = ret;
            break;
        case 2:
            GROWABLE_HEAP_F32()[p >> 2] = ret;
            break;
        case 4:
            GROWABLE_HEAP_I8()[p >> 0] = ret ? 1 : 0;
            break
    }
}

function _emscripten_glGetBooleanv(name_, p) {
    emscriptenWebGLGet(name_, p, 4)
}

function _emscripten_glGetBufferParameteri64v(target, value, data) {
    if (!data) {
        GL.recordError(1281);
        return
    }
    writeI53ToI64(data, GLctx.getBufferParameter(target, value))
}

function _emscripten_glGetBufferParameteriv(target, value, data) {
    if (!data) {
        GL.recordError(1281);
        return
    }
    GROWABLE_HEAP_I32()[data >> 2] = GLctx.getBufferParameter(target, value)
}

function _emscripten_glGetBufferPointerv(target, pname, params) {
    if (pname == 35005) {
        var ptr = 0;
        var mappedBuffer = GL.mappedBuffers[emscriptenWebGLGetBufferBinding(target)];
        if (mappedBuffer) {
            ptr = mappedBuffer.mem
        }
        GROWABLE_HEAP_I32()[params >> 2] = ptr
    } else {
        GL.recordError(1280);
        err("GL_INVALID_ENUM in glGetBufferPointerv")
    }
}

function _emscripten_glGetError() {
    var error = GLctx.getError() || GL.lastError;
    GL.lastError = 0;
    return error
}

function _emscripten_glGetFloatv(name_, p) {
    emscriptenWebGLGet(name_, p, 2)
}

function _emscripten_glGetFragDataLocation(program, name) {
    return GLctx["getFragDataLocation"](GL.programs[program], UTF8ToString(name))
}

function _emscripten_glGetFramebufferAttachmentParameteriv(target, attachment, pname, params) {
    var result = GLctx.getFramebufferAttachmentParameter(target, attachment, pname);
    if (result instanceof WebGLRenderbuffer || result instanceof WebGLTexture) {
        result = result.name | 0
    }
    GROWABLE_HEAP_I32()[params >> 2] = result
}

function emscriptenWebGLGetIndexed(target, index, data, type) {
    if (!data) {
        GL.recordError(1281);
        return
    }
    var result = GLctx["getIndexedParameter"](target, index);
    var ret;
    switch (typeof result) {
        case "boolean":
            ret = result ? 1 : 0;
            break;
        case "number":
            ret = result;
            break;
        case "object":
            if (result === null) {
                switch (target) {
                    case 35983:
                    case 35368:
                        ret = 0;
                        break;
                    default: {
                        GL.recordError(1280);
                        return
                    }
                }
            } else if (result instanceof WebGLBuffer) {
                ret = result.name | 0
            } else {
                GL.recordError(1280);
                return
            }
            break;
        default:
            GL.recordError(1280);
            return
    }
    switch (type) {
        case 1:
            writeI53ToI64(data, ret);
            break;
        case 0:
            GROWABLE_HEAP_I32()[data >> 2] = ret;
            break;
        case 2:
            GROWABLE_HEAP_F32()[data >> 2] = ret;
            break;
        case 4:
            GROWABLE_HEAP_I8()[data >> 0] = ret ? 1 : 0;
            break;
        default:
            throw "internal emscriptenWebGLGetIndexed() error, bad type: " + type
    }
}

function _emscripten_glGetInteger64i_v(target, index, data) {
    emscriptenWebGLGetIndexed(target, index, data, 1)
}

function _emscripten_glGetInteger64v(name_, p) {
    emscriptenWebGLGet(name_, p, 1)
}

function _emscripten_glGetIntegeri_v(target, index, data) {
    emscriptenWebGLGetIndexed(target, index, data, 0)
}

function _emscripten_glGetIntegerv(name_, p) {
    emscriptenWebGLGet(name_, p, 0)
}

function _emscripten_glGetInternalformativ(target, internalformat, pname, bufSize, params) {
    if (bufSize < 0) {
        GL.recordError(1281);
        return
    }
    if (!params) {
        GL.recordError(1281);
        return
    }
    var ret = GLctx["getInternalformatParameter"](target, internalformat, pname);
    if (ret === null) return;
    for (var i = 0; i < ret.length && i < bufSize; ++i) {
        GROWABLE_HEAP_I32()[params + i * 4 >> 2] = ret[i]
    }
}

function _emscripten_glGetProgramBinary(program, bufSize, length, binaryFormat, binary) {
    GL.recordError(1282)
}

function _emscripten_glGetProgramInfoLog(program, maxLength, length, infoLog) {
    var log = GLctx.getProgramInfoLog(GL.programs[program]);
    if (log === null) log = "(unknown error)";
    var numBytesWrittenExclNull = maxLength > 0 && infoLog ? stringToUTF8(log, infoLog, maxLength) : 0;
    if (length) GROWABLE_HEAP_I32()[length >> 2] = numBytesWrittenExclNull
}

function _emscripten_glGetProgramiv(program, pname, p) {
    if (!p) {
        GL.recordError(1281);
        return
    }
    if (program >= GL.counter) {
        GL.recordError(1281);
        return
    }
    program = GL.programs[program];
    if (pname == 35716) {
        var log = GLctx.getProgramInfoLog(program);
        if (log === null) log = "(unknown error)";
        GROWABLE_HEAP_I32()[p >> 2] = log.length + 1
    } else if (pname == 35719) {
        if (!program.maxUniformLength) {
            for (var i = 0; i < GLctx.getProgramParameter(program, 35718); ++i) {
                program.maxUniformLength = Math.max(program.maxUniformLength, GLctx.getActiveUniform(program, i).name.length + 1)
            }
        }
        GROWABLE_HEAP_I32()[p >> 2] = program.maxUniformLength
    } else if (pname == 35722) {
        if (!program.maxAttributeLength) {
            for (var i = 0; i < GLctx.getProgramParameter(program, 35721); ++i) {
                program.maxAttributeLength = Math.max(program.maxAttributeLength, GLctx.getActiveAttrib(program, i).name.length + 1)
            }
        }
        GROWABLE_HEAP_I32()[p >> 2] = program.maxAttributeLength
    } else if (pname == 35381) {
        if (!program.maxUniformBlockNameLength) {
            for (var i = 0; i < GLctx.getProgramParameter(program, 35382); ++i) {
                program.maxUniformBlockNameLength = Math.max(program.maxUniformBlockNameLength, GLctx.getActiveUniformBlockName(program, i).length + 1)
            }
        }
        GROWABLE_HEAP_I32()[p >> 2] = program.maxUniformBlockNameLength
    } else {
        GROWABLE_HEAP_I32()[p >> 2] = GLctx.getProgramParameter(program, pname)
    }
}

function _emscripten_glGetQueryObjecti64vEXT(id, pname, params) {
    if (!params) {
        GL.recordError(1281);
        return
    }
    var query = GL.queries[id];
    var param;
    if (GL.currentContext.version < 2) {
        param = GLctx.disjointTimerQueryExt["getQueryObjectEXT"](query, pname)
    } else {
        param = GLctx["getQueryParameter"](query, pname)
    }
    var ret;
    if (typeof param == "boolean") {
        ret = param ? 1 : 0
    } else {
        ret = param
    }
    writeI53ToI64(params, ret)
}

function _emscripten_glGetQueryObjectivEXT(id, pname, params) {
    if (!params) {
        GL.recordError(1281);
        return
    }
    var query = GL.queries[id];
    var param = GLctx.disjointTimerQueryExt["getQueryObjectEXT"](query, pname);
    var ret;
    if (typeof param == "boolean") {
        ret = param ? 1 : 0
    } else {
        ret = param
    }
    GROWABLE_HEAP_I32()[params >> 2] = ret
}

function _emscripten_glGetQueryObjectui64vEXT(id, pname, params) {
    if (!params) {
        GL.recordError(1281);
        return
    }
    var query = GL.queries[id];
    var param;
    if (GL.currentContext.version < 2) {
        param = GLctx.disjointTimerQueryExt["getQueryObjectEXT"](query, pname)
    } else {
        param = GLctx["getQueryParameter"](query, pname)
    }
    var ret;
    if (typeof param == "boolean") {
        ret = param ? 1 : 0
    } else {
        ret = param
    }
    writeI53ToI64(params, ret)
}

function _emscripten_glGetQueryObjectuiv(id, pname, params) {
    if (!params) {
        GL.recordError(1281);
        return
    }
    var query = GL.queries[id];
    var param = GLctx["getQueryParameter"](query, pname);
    var ret;
    if (typeof param == "boolean") {
        ret = param ? 1 : 0
    } else {
        ret = param
    }
    GROWABLE_HEAP_I32()[params >> 2] = ret
}

function _emscripten_glGetQueryObjectuivEXT(id, pname, params) {
    if (!params) {
        GL.recordError(1281);
        return
    }
    var query = GL.queries[id];
    var param = GLctx.disjointTimerQueryExt["getQueryObjectEXT"](query, pname);
    var ret;
    if (typeof param == "boolean") {
        ret = param ? 1 : 0
    } else {
        ret = param
    }
    GROWABLE_HEAP_I32()[params >> 2] = ret
}

function _emscripten_glGetQueryiv(target, pname, params) {
    if (!params) {
        GL.recordError(1281);
        return
    }
    GROWABLE_HEAP_I32()[params >> 2] = GLctx["getQuery"](target, pname)
}

function _emscripten_glGetQueryivEXT(target, pname, params) {
    if (!params) {
        GL.recordError(1281);
        return
    }
    GROWABLE_HEAP_I32()[params >> 2] = GLctx.disjointTimerQueryExt["getQueryEXT"](target, pname)
}

function _emscripten_glGetRenderbufferParameteriv(target, pname, params) {
    if (!params) {
        GL.recordError(1281);
        return
    }
    GROWABLE_HEAP_I32()[params >> 2] = GLctx.getRenderbufferParameter(target, pname)
}

function _emscripten_glGetSamplerParameterfv(sampler, pname, params) {
    if (!params) {
        GL.recordError(1281);
        return
    }
    GROWABLE_HEAP_F32()[params >> 2] = GLctx["getSamplerParameter"](GL.samplers[sampler], pname)
}

function _emscripten_glGetSamplerParameteriv(sampler, pname, params) {
    if (!params) {
        GL.recordError(1281);
        return
    }
    GROWABLE_HEAP_I32()[params >> 2] = GLctx["getSamplerParameter"](GL.samplers[sampler], pname)
}

function _emscripten_glGetShaderInfoLog(shader, maxLength, length, infoLog) {
    var log = GLctx.getShaderInfoLog(GL.shaders[shader]);
    if (log === null) log = "(unknown error)";
    var numBytesWrittenExclNull = maxLength > 0 && infoLog ? stringToUTF8(log, infoLog, maxLength) : 0;
    if (length) GROWABLE_HEAP_I32()[length >> 2] = numBytesWrittenExclNull
}

function _emscripten_glGetShaderPrecisionFormat(shaderType, precisionType, range, precision) {
    var result = GLctx.getShaderPrecisionFormat(shaderType, precisionType);
    GROWABLE_HEAP_I32()[range >> 2] = result.rangeMin;
    GROWABLE_HEAP_I32()[range + 4 >> 2] = result.rangeMax;
    GROWABLE_HEAP_I32()[precision >> 2] = result.precision
}

function _emscripten_glGetShaderSource(shader, bufSize, length, source) {
    var result = GLctx.getShaderSource(GL.shaders[shader]);
    if (!result) return;
    var numBytesWrittenExclNull = bufSize > 0 && source ? stringToUTF8(result, source, bufSize) : 0;
    if (length) GROWABLE_HEAP_I32()[length >> 2] = numBytesWrittenExclNull
}

function _emscripten_glGetShaderiv(shader, pname, p) {
    if (!p) {
        GL.recordError(1281);
        return
    }
    if (pname == 35716) {
        var log = GLctx.getShaderInfoLog(GL.shaders[shader]);
        if (log === null) log = "(unknown error)";
        var logLength = log ? log.length + 1 : 0;
        GROWABLE_HEAP_I32()[p >> 2] = logLength
    } else if (pname == 35720) {
        var source = GLctx.getShaderSource(GL.shaders[shader]);
        var sourceLength = source ? source.length + 1 : 0;
        GROWABLE_HEAP_I32()[p >> 2] = sourceLength
    } else {
        GROWABLE_HEAP_I32()[p >> 2] = GLctx.getShaderParameter(GL.shaders[shader], pname)
    }
}

function stringToNewUTF8(jsString) {
    var length = lengthBytesUTF8(jsString) + 1;
    var cString = _malloc(length);
    stringToUTF8(jsString, cString, length);
    return cString
}

function _emscripten_glGetString(name_) {
    var ret = GL.stringCache[name_];
    if (!ret) {
        switch (name_) {
            case 7939:
                var exts = GLctx.getSupportedExtensions() || [];
                exts = exts.concat(exts.map(function(e) {
                    return "GL_" + e
                }));
                ret = stringToNewUTF8(exts.join(" "));
                break;
            case 7936:
            case 7937:
            case 37445:
            case 37446:
                var s = GLctx.getParameter(name_);
                if (!s) {
                    GL.recordError(1280)
                }
                ret = s && stringToNewUTF8(s);
                break;
            case 7938:
                var glVersion = GLctx.getParameter(7938);
                if (true) glVersion = "OpenGL ES 3.0 (" + glVersion + ")";
                else {
                    glVersion = "OpenGL ES 2.0 (" + glVersion + ")"
                }
                ret = stringToNewUTF8(glVersion);
                break;
            case 35724:
                var glslVersion = GLctx.getParameter(35724);
                var ver_re = /^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/;
                var ver_num = glslVersion.match(ver_re);
                if (ver_num !== null) {
                    if (ver_num[1].length == 3) ver_num[1] = ver_num[1] + "0";
                    glslVersion = "OpenGL ES GLSL ES " + ver_num[1] + " (" + glslVersion + ")"
                }
                ret = stringToNewUTF8(glslVersion);
                break;
            default:
                GL.recordError(1280)
        }
        GL.stringCache[name_] = ret
    }
    return ret
}

function _emscripten_glGetStringi(name, index) {
    if (GL.currentContext.version < 2) {
        GL.recordError(1282);
        return 0
    }
    var stringiCache = GL.stringiCache[name];
    if (stringiCache) {
        if (index < 0 || index >= stringiCache.length) {
            GL.recordError(1281);
            return 0
        }
        return stringiCache[index]
    }
    switch (name) {
        case 7939:
            var exts = GLctx.getSupportedExtensions() || [];
            exts = exts.concat(exts.map(function(e) {
                return "GL_" + e
            }));
            exts = exts.map(function(e) {
                return stringToNewUTF8(e)
            });
            stringiCache = GL.stringiCache[name] = exts;
            if (index < 0 || index >= stringiCache.length) {
                GL.recordError(1281);
                return 0
            }
            return stringiCache[index];
        default:
            GL.recordError(1280);
            return 0
    }
}

function _emscripten_glGetSynciv(sync, pname, bufSize, length, values) {
    if (bufSize < 0) {
        GL.recordError(1281);
        return
    }
    if (!values) {
        GL.recordError(1281);
        return
    }
    var ret = GLctx.getSyncParameter(GL.syncs[sync], pname);
    if (ret !== null) {
        GROWABLE_HEAP_I32()[values >> 2] = ret;
        if (length) GROWABLE_HEAP_I32()[length >> 2] = 1
    }
}

function _emscripten_glGetTexParameterfv(target, pname, params) {
    if (!params) {
        GL.recordError(1281);
        return
    }
    GROWABLE_HEAP_F32()[params >> 2] = GLctx.getTexParameter(target, pname)
}

function _emscripten_glGetTexParameteriv(target, pname, params) {
    if (!params) {
        GL.recordError(1281);
        return
    }
    GROWABLE_HEAP_I32()[params >> 2] = GLctx.getTexParameter(target, pname)
}

function _emscripten_glGetTransformFeedbackVarying(program, index, bufSize, length, size, type, name) {
    program = GL.programs[program];
    var info = GLctx["getTransformFeedbackVarying"](program, index);
    if (!info) return;
    if (name && bufSize > 0) {
        var numBytesWrittenExclNull = stringToUTF8(info.name, name, bufSize);
        if (length) GROWABLE_HEAP_I32()[length >> 2] = numBytesWrittenExclNull
    } else {
        if (length) GROWABLE_HEAP_I32()[length >> 2] = 0
    }
    if (size) GROWABLE_HEAP_I32()[size >> 2] = info.size;
    if (type) GROWABLE_HEAP_I32()[type >> 2] = info.type
}

function _emscripten_glGetUniformBlockIndex(program, uniformBlockName) {
    return GLctx["getUniformBlockIndex"](GL.programs[program], UTF8ToString(uniformBlockName))
}

function _emscripten_glGetUniformIndices(program, uniformCount, uniformNames, uniformIndices) {
    if (!uniformIndices) {
        GL.recordError(1281);
        return
    }
    if (uniformCount > 0 && (uniformNames == 0 || uniformIndices == 0)) {
        GL.recordError(1281);
        return
    }
    program = GL.programs[program];
    var names = [];
    for (var i = 0; i < uniformCount; i++) names.push(UTF8ToString(GROWABLE_HEAP_I32()[uniformNames + i * 4 >> 2]));
    var result = GLctx["getUniformIndices"](program, names);
    if (!result) return;
    var len = result.length;
    for (var i = 0; i < len; i++) {
        GROWABLE_HEAP_I32()[uniformIndices + i * 4 >> 2] = result[i]
    }
}

function jstoi_q(str) {
    return parseInt(str)
}

function webglGetLeftBracePos(name) {
    return name.slice(-1) == "]" && name.lastIndexOf("[")
}

function webglPrepareUniformLocationsBeforeFirstUse(program) {
    var uniformLocsById = program.uniformLocsById,
        uniformSizeAndIdsByName = program.uniformSizeAndIdsByName,
        i, j;
    if (!uniformLocsById) {
        program.uniformLocsById = uniformLocsById = {};
        program.uniformArrayNamesById = {};
        for (i = 0; i < GLctx.getProgramParameter(program, 35718); ++i) {
            var u = GLctx.getActiveUniform(program, i);
            var nm = u.name;
            var sz = u.size;
            var lb = webglGetLeftBracePos(nm);
            var arrayName = lb > 0 ? nm.slice(0, lb) : nm;
            var id = program.uniformIdCounter;
            program.uniformIdCounter += sz;
            uniformSizeAndIdsByName[arrayName] = [sz, id];
            for (j = 0; j < sz; ++j) {
                uniformLocsById[id] = j;
                program.uniformArrayNamesById[id++] = arrayName
            }
        }
    }
}

function _emscripten_glGetUniformLocation(program, name) {
    name = UTF8ToString(name);
    if (program = GL.programs[program]) {
        webglPrepareUniformLocationsBeforeFirstUse(program);
        var uniformLocsById = program.uniformLocsById;
        var arrayIndex = 0;
        var uniformBaseName = name;
        var leftBrace = webglGetLeftBracePos(name);
        if (leftBrace > 0) {
            arrayIndex = jstoi_q(name.slice(leftBrace + 1)) >>> 0;
            uniformBaseName = name.slice(0, leftBrace)
        }
        var sizeAndId = program.uniformSizeAndIdsByName[uniformBaseName];
        if (sizeAndId && arrayIndex < sizeAndId[0]) {
            arrayIndex += sizeAndId[1];
            if (uniformLocsById[arrayIndex] = uniformLocsById[arrayIndex] || GLctx.getUniformLocation(program, name)) {
                return arrayIndex
            }
        }
    } else {
        GL.recordError(1281)
    }
    return -1
}

function webglGetUniformLocation(location) {
    var p = GLctx.currentProgram;
    if (p) {
        var webglLoc = p.uniformLocsById[location];
        if (typeof webglLoc == "number") {
            p.uniformLocsById[location] = webglLoc = GLctx.getUniformLocation(p, p.uniformArrayNamesById[location] + (webglLoc > 0 ? "[" + webglLoc + "]" : ""))
        }
        return webglLoc
    } else {
        GL.recordError(1282)
    }
}

function emscriptenWebGLGetUniform(program, location, params, type) {
    if (!params) {
        GL.recordError(1281);
        return
    }
    program = GL.programs[program];
    webglPrepareUniformLocationsBeforeFirstUse(program);
    var data = GLctx.getUniform(program, webglGetUniformLocation(location));
    if (typeof data == "number" || typeof data == "boolean") {
        switch (type) {
            case 0:
                GROWABLE_HEAP_I32()[params >> 2] = data;
                break;
            case 2:
                GROWABLE_HEAP_F32()[params >> 2] = data;
                break
        }
    } else {
        for (var i = 0; i < data.length; i++) {
            switch (type) {
                case 0:
                    GROWABLE_HEAP_I32()[params + i * 4 >> 2] = data[i];
                    break;
                case 2:
                    GROWABLE_HEAP_F32()[params + i * 4 >> 2] = data[i];
                    break
            }
        }
    }
}

function _emscripten_glGetUniformfv(program, location, params) {
    emscriptenWebGLGetUniform(program, location, params, 2)
}

function _emscripten_glGetUniformiv(program, location, params) {
    emscriptenWebGLGetUniform(program, location, params, 0)
}

function _emscripten_glGetUniformuiv(program, location, params) {
    emscriptenWebGLGetUniform(program, location, params, 0)
}

function emscriptenWebGLGetVertexAttrib(index, pname, params, type) {
    if (!params) {
        GL.recordError(1281);
        return
    }
    if (GL.currentContext.clientBuffers[index].enabled) {
        err("glGetVertexAttrib*v on client-side array: not supported, bad data returned")
    }
    var data = GLctx.getVertexAttrib(index, pname);
    if (pname == 34975) {
        GROWABLE_HEAP_I32()[params >> 2] = data && data["name"]
    } else if (typeof data == "number" || typeof data == "boolean") {
        switch (type) {
            case 0:
                GROWABLE_HEAP_I32()[params >> 2] = data;
                break;
            case 2:
                GROWABLE_HEAP_F32()[params >> 2] = data;
                break;
            case 5:
                GROWABLE_HEAP_I32()[params >> 2] = Math.fround(data);
                break
        }
    } else {
        for (var i = 0; i < data.length; i++) {
            switch (type) {
                case 0:
                    GROWABLE_HEAP_I32()[params + i * 4 >> 2] = data[i];
                    break;
                case 2:
                    GROWABLE_HEAP_F32()[params + i * 4 >> 2] = data[i];
                    break;
                case 5:
                    GROWABLE_HEAP_I32()[params + i * 4 >> 2] = Math.fround(data[i]);
                    break
            }
        }
    }
}

function _emscripten_glGetVertexAttribIiv(index, pname, params) {
    emscriptenWebGLGetVertexAttrib(index, pname, params, 0)
}

function _emscripten_glGetVertexAttribIuiv(index, pname, params) {
    emscriptenWebGLGetVertexAttrib(index, pname, params, 0)
}

function _emscripten_glGetVertexAttribPointerv(index, pname, pointer) {
    if (!pointer) {
        GL.recordError(1281);
        return
    }
    if (GL.currentContext.clientBuffers[index].enabled) {
        err("glGetVertexAttribPointer on client-side array: not supported, bad data returned")
    }
    GROWABLE_HEAP_I32()[pointer >> 2] = GLctx.getVertexAttribOffset(index, pname)
}

function _emscripten_glGetVertexAttribfv(index, pname, params) {
    emscriptenWebGLGetVertexAttrib(index, pname, params, 2)
}

function _emscripten_glGetVertexAttribiv(index, pname, params) {
    emscriptenWebGLGetVertexAttrib(index, pname, params, 5)
}

function _emscripten_glHint(x0, x1) {
    GLctx["hint"](x0, x1)
}

function _emscripten_glInvalidateFramebuffer(target, numAttachments, attachments) {
    var list = tempFixedLengthArray[numAttachments];
    for (var i = 0; i < numAttachments; i++) {
        list[i] = GROWABLE_HEAP_I32()[attachments + i * 4 >> 2]
    }
    GLctx["invalidateFramebuffer"](target, list)
}

function _emscripten_glInvalidateSubFramebuffer(target, numAttachments, attachments, x, y, width, height) {
    var list = tempFixedLengthArray[numAttachments];
    for (var i = 0; i < numAttachments; i++) {
        list[i] = GROWABLE_HEAP_I32()[attachments + i * 4 >> 2]
    }
    GLctx["invalidateSubFramebuffer"](target, list, x, y, width, height)
}

function _emscripten_glIsBuffer(buffer) {
    var b = GL.buffers[buffer];
    if (!b) return 0;
    return GLctx.isBuffer(b)
}

function _emscripten_glIsEnabled(x0) {
    return GLctx["isEnabled"](x0)
}

function _emscripten_glIsFramebuffer(framebuffer) {
    var fb = GL.framebuffers[framebuffer];
    if (!fb) return 0;
    return GLctx.isFramebuffer(fb)
}

function _emscripten_glIsProgram(program) {
    program = GL.programs[program];
    if (!program) return 0;
    return GLctx.isProgram(program)
}

function _emscripten_glIsQuery(id) {
    var query = GL.queries[id];
    if (!query) return 0;
    return GLctx["isQuery"](query)
}

function _emscripten_glIsQueryEXT(id) {
    var query = GL.queries[id];
    if (!query) return 0;
    return GLctx.disjointTimerQueryExt["isQueryEXT"](query)
}

function _emscripten_glIsRenderbuffer(renderbuffer) {
    var rb = GL.renderbuffers[renderbuffer];
    if (!rb) return 0;
    return GLctx.isRenderbuffer(rb)
}

function _emscripten_glIsSampler(id) {
    var sampler = GL.samplers[id];
    if (!sampler) return 0;
    return GLctx["isSampler"](sampler)
}

function _emscripten_glIsShader(shader) {
    var s = GL.shaders[shader];
    if (!s) return 0;
    return GLctx.isShader(s)
}

function _emscripten_glIsSync(sync) {
    return GLctx.isSync(GL.syncs[sync])
}

function _emscripten_glIsTexture(id) {
    var texture = GL.textures[id];
    if (!texture) return 0;
    return GLctx.isTexture(texture)
}

function _emscripten_glIsTransformFeedback(id) {
    return GLctx["isTransformFeedback"](GL.transformFeedbacks[id])
}

function _emscripten_glIsVertexArray(array) {
    var vao = GL.vaos[array];
    if (!vao) return 0;
    return GLctx["isVertexArray"](vao)
}

function _emscripten_glIsVertexArrayOES(array) {
    var vao = GL.vaos[array];
    if (!vao) return 0;
    return GLctx["isVertexArray"](vao)
}

function _emscripten_glLineWidth(x0) {
    GLctx["lineWidth"](x0)
}

function _emscripten_glLinkProgram(program) {
    program = GL.programs[program];
    GLctx.linkProgram(program);
    program.uniformLocsById = 0;
    program.uniformSizeAndIdsByName = {}
}

function _emscripten_glMapBufferRange(target, offset, length, access) {
    if (access != 26 && access != 10) {
        err("glMapBufferRange is only supported when access is MAP_WRITE|INVALIDATE_BUFFER");
        return 0
    }
    if (!emscriptenWebGLValidateMapBufferTarget(target)) {
        GL.recordError(1280);
        err("GL_INVALID_ENUM in glMapBufferRange");
        return 0
    }
    var mem = _malloc(length);
    if (!mem) return 0;
    GL.mappedBuffers[emscriptenWebGLGetBufferBinding(target)] = {
        offset: offset,
        length: length,
        mem: mem,
        access: access
    };
    return mem
}

function _emscripten_glPauseTransformFeedback() {
    GLctx["pauseTransformFeedback"]()
}

function _emscripten_glPixelStorei(pname, param) {
    if (pname == 3317) {
        GL.unpackAlignment = param
    }
    GLctx.pixelStorei(pname, param)
}

function _emscripten_glPolygonOffset(x0, x1) {
    GLctx["polygonOffset"](x0, x1)
}

function _emscripten_glProgramBinary(program, binaryFormat, binary, length) {
    GL.recordError(1280)
}

function _emscripten_glProgramParameteri(program, pname, value) {
    GL.recordError(1280)
}

function _emscripten_glQueryCounterEXT(id, target) {
    GLctx.disjointTimerQueryExt["queryCounterEXT"](GL.queries[id], target)
}

function _emscripten_glReadBuffer(x0) {
    GLctx["readBuffer"](x0)
}

function computeUnpackAlignedImageSize(width, height, sizePerPixel, alignment) {
    function roundedToNextMultipleOf(x, y) {
        return x + y - 1 & -y
    }
    var plainRowSize = width * sizePerPixel;
    var alignedRowSize = roundedToNextMultipleOf(plainRowSize, alignment);
    return height * alignedRowSize
}

function __colorChannelsInGlTextureFormat(format) {
    var colorChannels = {
        5: 3,
        6: 4,
        8: 2,
        29502: 3,
        29504: 4,
        26917: 2,
        26918: 2,
        29846: 3,
        29847: 4
    };
    return colorChannels[format - 6402] || 1
}

function heapObjectForWebGLType(type) {
    type -= 5120;
    if (type == 0) return GROWABLE_HEAP_I8();
    if (type == 1) return GROWABLE_HEAP_U8();
    if (type == 2) return GROWABLE_HEAP_I16();
    if (type == 4) return GROWABLE_HEAP_I32();
    if (type == 6) return GROWABLE_HEAP_F32();
    if (type == 5 || type == 28922 || type == 28520 || type == 30779 || type == 30782) return GROWABLE_HEAP_U32();
    return GROWABLE_HEAP_U16()
}

function heapAccessShiftForWebGLHeap(heap) {
    return 31 - Math.clz32(heap.BYTES_PER_ELEMENT)
}

function emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, internalFormat) {
    var heap = heapObjectForWebGLType(type);
    var shift = heapAccessShiftForWebGLHeap(heap);
    var byteSize = 1 << shift;
    var sizePerPixel = __colorChannelsInGlTextureFormat(format) * byteSize;
    var bytes = computeUnpackAlignedImageSize(width, height, sizePerPixel, GL.unpackAlignment);
    return heap.subarray(pixels >> shift, pixels + bytes >> shift)
}

function _emscripten_glReadPixels(x, y, width, height, format, type, pixels) {
    if (true) {
        if (GLctx.currentPixelPackBufferBinding) {
            GLctx.readPixels(x, y, width, height, format, type, pixels)
        } else {
            var heap = heapObjectForWebGLType(type);
            GLctx.readPixels(x, y, width, height, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap))
        }
        return
    }
    var pixelData = emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, format);
    if (!pixelData) {
        GL.recordError(1280);
        return
    }
    GLctx.readPixels(x, y, width, height, format, type, pixelData)
}

function _emscripten_glReleaseShaderCompiler() {}

function _emscripten_glRenderbufferStorage(x0, x1, x2, x3) {
    GLctx["renderbufferStorage"](x0, x1, x2, x3)
}

function _emscripten_glRenderbufferStorageMultisample(x0, x1, x2, x3, x4) {
    GLctx["renderbufferStorageMultisample"](x0, x1, x2, x3, x4)
}

function _emscripten_glResumeTransformFeedback() {
    GLctx["resumeTransformFeedback"]()
}

function _emscripten_glSampleCoverage(value, invert) {
    GLctx.sampleCoverage(value, !!invert)
}

function _emscripten_glSamplerParameterf(sampler, pname, param) {
    GLctx["samplerParameterf"](GL.samplers[sampler], pname, param)
}

function _emscripten_glSamplerParameterfv(sampler, pname, params) {
    var param = GROWABLE_HEAP_F32()[params >> 2];
    GLctx["samplerParameterf"](GL.samplers[sampler], pname, param)
}

function _emscripten_glSamplerParameteri(sampler, pname, param) {
    GLctx["samplerParameteri"](GL.samplers[sampler], pname, param)
}

function _emscripten_glSamplerParameteriv(sampler, pname, params) {
    var param = GROWABLE_HEAP_I32()[params >> 2];
    GLctx["samplerParameteri"](GL.samplers[sampler], pname, param)
}

function _emscripten_glScissor(x0, x1, x2, x3) {
    GLctx["scissor"](x0, x1, x2, x3)
}

function _emscripten_glShaderBinary() {
    GL.recordError(1280)
}

function _emscripten_glShaderSource(shader, count, string, length) {
    var source = GL.getSource(shader, count, string, length);
    if (true) {
        if (source.includes("#version 100")) {
            source = source.replace(/#extension GL_OES_standard_derivatives : enable/g, "");
            source = source.replace(/#extension GL_EXT_shader_texture_lod : enable/g, "");
            var prelude = "";
            if (source.includes("gl_FragColor")) {
                prelude += "out mediump vec4 GL_FragColor;\n";
                source = source.replace(/gl_FragColor/g, "GL_FragColor")
            }
            if (source.includes("attribute")) {
                source = source.replace(/attribute/g, "in");
                source = source.replace(/varying/g, "out")
            } else {
                source = source.replace(/varying/g, "in")
            }
            source = source.replace(/textureCubeLodEXT/g, "textureCubeLod");
            source = source.replace(/texture2DLodEXT/g, "texture2DLod");
            source = source.replace(/texture2DProjLodEXT/g, "texture2DProjLod");
            source = source.replace(/texture2DGradEXT/g, "texture2DGrad");
            source = source.replace(/texture2DProjGradEXT/g, "texture2DProjGrad");
            source = source.replace(/textureCubeGradEXT/g, "textureCubeGrad");
            source = source.replace(/textureCube/g, "texture");
            source = source.replace(/texture1D/g, "texture");
            source = source.replace(/texture2D/g, "texture");
            source = source.replace(/texture3D/g, "texture");
            source = source.replace(/#version 100/g, "#version 300 es\n" + prelude)
        }
    }
    GLctx.shaderSource(GL.shaders[shader], source)
}

function _emscripten_glStencilFunc(x0, x1, x2) {
    GLctx["stencilFunc"](x0, x1, x2)
}

function _emscripten_glStencilFuncSeparate(x0, x1, x2, x3) {
    GLctx["stencilFuncSeparate"](x0, x1, x2, x3)
}

function _emscripten_glStencilMask(x0) {
    GLctx["stencilMask"](x0)
}

function _emscripten_glStencilMaskSeparate(x0, x1) {
    GLctx["stencilMaskSeparate"](x0, x1)
}

function _emscripten_glStencilOp(x0, x1, x2) {
    GLctx["stencilOp"](x0, x1, x2)
}

function _emscripten_glStencilOpSeparate(x0, x1, x2, x3) {
    GLctx["stencilOpSeparate"](x0, x1, x2, x3)
}

function _emscripten_glTexImage2D(target, level, internalFormat, width, height, border, format, type, pixels) {
    if (true) {
        if (format == 6402 && internalFormat == 6402 && type == 5125) {
            internalFormat = 33190
        }
        if (type == 36193) {
            type = 5131;
            if (format == 6408 && internalFormat == 6408) {
                internalFormat = 34842
            }
        }
        if (internalFormat == 34041) {
            internalFormat = 35056
        }
    }
    if (true) {
        if (GLctx.currentPixelUnpackBufferBinding) {
            GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, pixels)
        } else if (pixels) {
            var heap = heapObjectForWebGLType(type);
            GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap))
        } else {
            GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, null)
        }
        return
    }
    GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, pixels ? emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, internalFormat) : null)
}

function _emscripten_glTexImage3D(target, level, internalFormat, width, height, depth, border, format, type, pixels) {
    if (GLctx.currentPixelUnpackBufferBinding) {
        GLctx["texImage3D"](target, level, internalFormat, width, height, depth, border, format, type, pixels)
    } else if (pixels) {
        var heap = heapObjectForWebGLType(type);
        GLctx["texImage3D"](target, level, internalFormat, width, height, depth, border, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap))
    } else {
        GLctx["texImage3D"](target, level, internalFormat, width, height, depth, border, format, type, null)
    }
}

function _emscripten_glTexParameterf(x0, x1, x2) {
    GLctx["texParameterf"](x0, x1, x2)
}

function _emscripten_glTexParameterfv(target, pname, params) {
    var param = GROWABLE_HEAP_F32()[params >> 2];
    GLctx.texParameterf(target, pname, param)
}

function _emscripten_glTexParameteri(x0, x1, x2) {
    GLctx["texParameteri"](x0, x1, x2)
}

function _emscripten_glTexParameteriv(target, pname, params) {
    var param = GROWABLE_HEAP_I32()[params >> 2];
    GLctx.texParameteri(target, pname, param)
}

function _emscripten_glTexStorage2D(x0, x1, x2, x3, x4) {
    GLctx["texStorage2D"](x0, x1, x2, x3, x4)
}

function _emscripten_glTexStorage3D(x0, x1, x2, x3, x4, x5) {
    GLctx["texStorage3D"](x0, x1, x2, x3, x4, x5)
}

function _emscripten_glTexSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixels) {
    if (true) {
        if (type == 36193) type = 5131
    }
    if (true) {
        if (GLctx.currentPixelUnpackBufferBinding) {
            GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixels)
        } else if (pixels) {
            var heap = heapObjectForWebGLType(type);
            GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap))
        } else {
            GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, null)
        }
        return
    }
    var pixelData = null;
    if (pixels) pixelData = emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, 0);
    GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixelData)
}

function _emscripten_glTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, pixels) {
    if (GLctx.currentPixelUnpackBufferBinding) {
        GLctx["texSubImage3D"](target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, pixels)
    } else if (pixels) {
        var heap = heapObjectForWebGLType(type);
        GLctx["texSubImage3D"](target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap))
    } else {
        GLctx["texSubImage3D"](target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, null)
    }
}

function _emscripten_glTransformFeedbackVaryings(program, count, varyings, bufferMode) {
    program = GL.programs[program];
    var vars = [];
    for (var i = 0; i < count; i++) vars.push(UTF8ToString(GROWABLE_HEAP_I32()[varyings + i * 4 >> 2]));
    GLctx["transformFeedbackVaryings"](program, vars, bufferMode)
}

function _emscripten_glUniform1f(location, v0) {
    GLctx.uniform1f(webglGetUniformLocation(location), v0)
}

function _emscripten_glUniform1fv(location, count, value) {
    count && GLctx.uniform1fv(webglGetUniformLocation(location), GROWABLE_HEAP_F32(), value >> 2, count)
}

function _emscripten_glUniform1i(location, v0) {
    GLctx.uniform1i(webglGetUniformLocation(location), v0)
}

function _emscripten_glUniform1iv(location, count, value) {
    count && GLctx.uniform1iv(webglGetUniformLocation(location), GROWABLE_HEAP_I32(), value >> 2, count)
}

function _emscripten_glUniform1ui(location, v0) {
    GLctx.uniform1ui(webglGetUniformLocation(location), v0)
}

function _emscripten_glUniform1uiv(location, count, value) {
    count && GLctx.uniform1uiv(webglGetUniformLocation(location), GROWABLE_HEAP_U32(), value >> 2, count)
}

function _emscripten_glUniform2f(location, v0, v1) {
    GLctx.uniform2f(webglGetUniformLocation(location), v0, v1)
}

function _emscripten_glUniform2fv(location, count, value) {
    count && GLctx.uniform2fv(webglGetUniformLocation(location), GROWABLE_HEAP_F32(), value >> 2, count * 2)
}

function _emscripten_glUniform2i(location, v0, v1) {
    GLctx.uniform2i(webglGetUniformLocation(location), v0, v1)
}

function _emscripten_glUniform2iv(location, count, value) {
    count && GLctx.uniform2iv(webglGetUniformLocation(location), GROWABLE_HEAP_I32(), value >> 2, count * 2)
}

function _emscripten_glUniform2ui(location, v0, v1) {
    GLctx.uniform2ui(webglGetUniformLocation(location), v0, v1)
}

function _emscripten_glUniform2uiv(location, count, value) {
    count && GLctx.uniform2uiv(webglGetUniformLocation(location), GROWABLE_HEAP_U32(), value >> 2, count * 2)
}

function _emscripten_glUniform3f(location, v0, v1, v2) {
    GLctx.uniform3f(webglGetUniformLocation(location), v0, v1, v2)
}

function _emscripten_glUniform3fv(location, count, value) {
    count && GLctx.uniform3fv(webglGetUniformLocation(location), GROWABLE_HEAP_F32(), value >> 2, count * 3)
}

function _emscripten_glUniform3i(location, v0, v1, v2) {
    GLctx.uniform3i(webglGetUniformLocation(location), v0, v1, v2)
}

function _emscripten_glUniform3iv(location, count, value) {
    count && GLctx.uniform3iv(webglGetUniformLocation(location), GROWABLE_HEAP_I32(), value >> 2, count * 3)
}

function _emscripten_glUniform3ui(location, v0, v1, v2) {
    GLctx.uniform3ui(webglGetUniformLocation(location), v0, v1, v2)
}

function _emscripten_glUniform3uiv(location, count, value) {
    count && GLctx.uniform3uiv(webglGetUniformLocation(location), GROWABLE_HEAP_U32(), value >> 2, count * 3)
}

function _emscripten_glUniform4f(location, v0, v1, v2, v3) {
    GLctx.uniform4f(webglGetUniformLocation(location), v0, v1, v2, v3)
}

function _emscripten_glUniform4fv(location, count, value) {
    count && GLctx.uniform4fv(webglGetUniformLocation(location), GROWABLE_HEAP_F32(), value >> 2, count * 4)
}

function _emscripten_glUniform4i(location, v0, v1, v2, v3) {
    GLctx.uniform4i(webglGetUniformLocation(location), v0, v1, v2, v3)
}

function _emscripten_glUniform4iv(location, count, value) {
    count && GLctx.uniform4iv(webglGetUniformLocation(location), GROWABLE_HEAP_I32(), value >> 2, count * 4)
}

function _emscripten_glUniform4ui(location, v0, v1, v2, v3) {
    GLctx.uniform4ui(webglGetUniformLocation(location), v0, v1, v2, v3)
}

function _emscripten_glUniform4uiv(location, count, value) {
    count && GLctx.uniform4uiv(webglGetUniformLocation(location), GROWABLE_HEAP_U32(), value >> 2, count * 4)
}

function _emscripten_glUniformBlockBinding(program, uniformBlockIndex, uniformBlockBinding) {
    program = GL.programs[program];
    GLctx["uniformBlockBinding"](program, uniformBlockIndex, uniformBlockBinding)
}

function _emscripten_glUniformMatrix2fv(location, count, transpose, value) {
    count && GLctx.uniformMatrix2fv(webglGetUniformLocation(location), !!transpose, GROWABLE_HEAP_F32(), value >> 2, count * 4)
}

function _emscripten_glUniformMatrix2x3fv(location, count, transpose, value) {
    count && GLctx.uniformMatrix2x3fv(webglGetUniformLocation(location), !!transpose, GROWABLE_HEAP_F32(), value >> 2, count * 6)
}

function _emscripten_glUniformMatrix2x4fv(location, count, transpose, value) {
    count && GLctx.uniformMatrix2x4fv(webglGetUniformLocation(location), !!transpose, GROWABLE_HEAP_F32(), value >> 2, count * 8)
}

function _emscripten_glUniformMatrix3fv(location, count, transpose, value) {
    count && GLctx.uniformMatrix3fv(webglGetUniformLocation(location), !!transpose, GROWABLE_HEAP_F32(), value >> 2, count * 9)
}

function _emscripten_glUniformMatrix3x2fv(location, count, transpose, value) {
    count && GLctx.uniformMatrix3x2fv(webglGetUniformLocation(location), !!transpose, GROWABLE_HEAP_F32(), value >> 2, count * 6)
}

function _emscripten_glUniformMatrix3x4fv(location, count, transpose, value) {
    count && GLctx.uniformMatrix3x4fv(webglGetUniformLocation(location), !!transpose, GROWABLE_HEAP_F32(), value >> 2, count * 12)
}

function _emscripten_glUniformMatrix4fv(location, count, transpose, value) {
    count && GLctx.uniformMatrix4fv(webglGetUniformLocation(location), !!transpose, GROWABLE_HEAP_F32(), value >> 2, count * 16)
}

function _emscripten_glUniformMatrix4x2fv(location, count, transpose, value) {
    count && GLctx.uniformMatrix4x2fv(webglGetUniformLocation(location), !!transpose, GROWABLE_HEAP_F32(), value >> 2, count * 8)
}

function _emscripten_glUniformMatrix4x3fv(location, count, transpose, value) {
    count && GLctx.uniformMatrix4x3fv(webglGetUniformLocation(location), !!transpose, GROWABLE_HEAP_F32(), value >> 2, count * 12)
}

function _emscripten_glUnmapBuffer(target) {
    if (!emscriptenWebGLValidateMapBufferTarget(target)) {
        GL.recordError(1280);
        err("GL_INVALID_ENUM in glUnmapBuffer");
        return 0
    }
    var buffer = emscriptenWebGLGetBufferBinding(target);
    var mapping = GL.mappedBuffers[buffer];
    if (!mapping) {
        GL.recordError(1282);
        err("buffer was never mapped in glUnmapBuffer");
        return 0
    }
    GL.mappedBuffers[buffer] = null;
    if (!(mapping.access & 16))
        if (true) {
            GLctx.bufferSubData(target, mapping.offset, GROWABLE_HEAP_U8(), mapping.mem, mapping.length)
        } else {
            GLctx.bufferSubData(target, mapping.offset, GROWABLE_HEAP_U8().subarray(mapping.mem, mapping.mem + mapping.length))
        } _free(mapping.mem);
    return 1
}

function _emscripten_glUseProgram(program) {
    program = GL.programs[program];
    GLctx.useProgram(program);
    GLctx.currentProgram = program
}

function _emscripten_glValidateProgram(program) {
    GLctx.validateProgram(GL.programs[program])
}

function _emscripten_glVertexAttrib1f(x0, x1) {
    GLctx["vertexAttrib1f"](x0, x1)
}

function _emscripten_glVertexAttrib1fv(index, v) {
    GLctx.vertexAttrib1f(index, GROWABLE_HEAP_F32()[v >> 2])
}

function _emscripten_glVertexAttrib2f(x0, x1, x2) {
    GLctx["vertexAttrib2f"](x0, x1, x2)
}

function _emscripten_glVertexAttrib2fv(index, v) {
    GLctx.vertexAttrib2f(index, GROWABLE_HEAP_F32()[v >> 2], GROWABLE_HEAP_F32()[v + 4 >> 2])
}

function _emscripten_glVertexAttrib3f(x0, x1, x2, x3) {
    GLctx["vertexAttrib3f"](x0, x1, x2, x3)
}

function _emscripten_glVertexAttrib3fv(index, v) {
    GLctx.vertexAttrib3f(index, GROWABLE_HEAP_F32()[v >> 2], GROWABLE_HEAP_F32()[v + 4 >> 2], GROWABLE_HEAP_F32()[v + 8 >> 2])
}

function _emscripten_glVertexAttrib4f(x0, x1, x2, x3, x4) {
    GLctx["vertexAttrib4f"](x0, x1, x2, x3, x4)
}

function _emscripten_glVertexAttrib4fv(index, v) {
    GLctx.vertexAttrib4f(index, GROWABLE_HEAP_F32()[v >> 2], GROWABLE_HEAP_F32()[v + 4 >> 2], GROWABLE_HEAP_F32()[v + 8 >> 2], GROWABLE_HEAP_F32()[v + 12 >> 2])
}

function _emscripten_glVertexAttribDivisor(index, divisor) {
    GLctx["vertexAttribDivisor"](index, divisor)
}

function _emscripten_glVertexAttribDivisorANGLE(index, divisor) {
    GLctx["vertexAttribDivisor"](index, divisor)
}

function _emscripten_glVertexAttribDivisorARB(index, divisor) {
    GLctx["vertexAttribDivisor"](index, divisor)
}

function _emscripten_glVertexAttribDivisorEXT(index, divisor) {
    GLctx["vertexAttribDivisor"](index, divisor)
}

function _emscripten_glVertexAttribDivisorNV(index, divisor) {
    GLctx["vertexAttribDivisor"](index, divisor)
}

function _emscripten_glVertexAttribI4i(x0, x1, x2, x3, x4) {
    GLctx["vertexAttribI4i"](x0, x1, x2, x3, x4)
}

function _emscripten_glVertexAttribI4iv(index, v) {
    GLctx.vertexAttribI4i(index, GROWABLE_HEAP_I32()[v >> 2], GROWABLE_HEAP_I32()[v + 4 >> 2], GROWABLE_HEAP_I32()[v + 8 >> 2], GROWABLE_HEAP_I32()[v + 12 >> 2])
}

function _emscripten_glVertexAttribI4ui(x0, x1, x2, x3, x4) {
    GLctx["vertexAttribI4ui"](x0, x1, x2, x3, x4)
}

function _emscripten_glVertexAttribI4uiv(index, v) {
    GLctx.vertexAttribI4ui(index, GROWABLE_HEAP_U32()[v >> 2], GROWABLE_HEAP_U32()[v + 4 >> 2], GROWABLE_HEAP_U32()[v + 8 >> 2], GROWABLE_HEAP_U32()[v + 12 >> 2])
}

function _emscripten_glVertexAttribIPointer(index, size, type, stride, ptr) {
    var cb = GL.currentContext.clientBuffers[index];
    if (!GLctx.currentArrayBufferBinding) {
        cb.size = size;
        cb.type = type;
        cb.normalized = false;
        cb.stride = stride;
        cb.ptr = ptr;
        cb.clientside = true;
        cb.vertexAttribPointerAdaptor = function(index, size, type, normalized, stride, ptr) {
            this.vertexAttribIPointer(index, size, type, stride, ptr)
        };
        return
    }
    cb.clientside = false;
    GLctx["vertexAttribIPointer"](index, size, type, stride, ptr)
}

function _emscripten_glVertexAttribPointer(index, size, type, normalized, stride, ptr) {
    var cb = GL.currentContext.clientBuffers[index];
    if (!GLctx.currentArrayBufferBinding) {
        cb.size = size;
        cb.type = type;
        cb.normalized = normalized;
        cb.stride = stride;
        cb.ptr = ptr;
        cb.clientside = true;
        cb.vertexAttribPointerAdaptor = function(index, size, type, normalized, stride, ptr) {
            this.vertexAttribPointer(index, size, type, normalized, stride, ptr)
        };
        return
    }
    cb.clientside = false;
    GLctx.vertexAttribPointer(index, size, type, !!normalized, stride, ptr)
}

function _emscripten_glViewport(x0, x1, x2, x3) {
    GLctx["viewport"](x0, x1, x2, x3)
}

function _emscripten_glWaitSync(sync, flags, timeoutLo, timeoutHi) {
    GLctx.waitSync(GL.syncs[sync], flags, convertI32PairToI53(timeoutLo, timeoutHi))
}

function _emscripten_has_asyncify() {
    return 0
}

function _emscripten_memcpy_big(dest, src, num) {
    GROWABLE_HEAP_U8().copyWithin(dest, src, src + num)
}

function _emscripten_num_logical_cores() {
    return navigator["hardwareConcurrency"]
}

function _emscripten_proxy_to_main_thread_js(index, sync) {
    var numCallArgs = arguments.length - 2;
    var outerArgs = arguments;
    return withStackSave(function() {
        var serializedNumCallArgs = numCallArgs;
        var args = stackAlloc(serializedNumCallArgs * 8);
        var b = args >> 3;
        for (var i = 0; i < numCallArgs; i++) {
            var arg = outerArgs[2 + i];
            GROWABLE_HEAP_F64()[b + i] = arg
        }
        return _emscripten_run_in_main_runtime_thread_js(index, serializedNumCallArgs, args, sync)
    })
}
var _emscripten_receive_on_main_thread_js_callArgs = [];

function _emscripten_receive_on_main_thread_js(index, numCallArgs, args) {
    _emscripten_receive_on_main_thread_js_callArgs.length = numCallArgs;
    var b = args >> 3;
    for (var i = 0; i < numCallArgs; i++) {
        _emscripten_receive_on_main_thread_js_callArgs[i] = GROWABLE_HEAP_F64()[b + i]
    }
    var isEmAsmConst = index < 0;
    var func = !isEmAsmConst ? proxiedFunctionTable[index] : ASM_CONSTS[-index - 1];
    return func.apply(null, _emscripten_receive_on_main_thread_js_callArgs)
}

function doRequestFullscreen(target, strategy) {
    if (!JSEvents.fullscreenEnabled()) return -1;
    target = findEventTarget(target);
    if (!target) return -4;
    if (!target.requestFullscreen && !target.webkitRequestFullscreen) {
        return -3
    }
    var canPerformRequests = JSEvents.canPerformEventHandlerRequests();
    if (!canPerformRequests) {
        if (strategy.deferUntilInEventHandler) {
            JSEvents.deferCall(JSEvents_requestFullscreen, 1, [target, strategy]);
            return 1
        }
        return -2
    }
    return JSEvents_requestFullscreen(target, strategy)
}

function _emscripten_request_fullscreen_strategy(target, deferUntilInEventHandler, fullscreenStrategy) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(69, 1, target, deferUntilInEventHandler, fullscreenStrategy);
    var strategy = {
        scaleMode: GROWABLE_HEAP_I32()[fullscreenStrategy >> 2],
        canvasResolutionScaleMode: GROWABLE_HEAP_I32()[fullscreenStrategy + 4 >> 2],
        filteringMode: GROWABLE_HEAP_I32()[fullscreenStrategy + 8 >> 2],
        deferUntilInEventHandler: deferUntilInEventHandler,
        canvasResizedCallbackTargetThread: GROWABLE_HEAP_I32()[fullscreenStrategy + 20 >> 2],
        canvasResizedCallback: GROWABLE_HEAP_I32()[fullscreenStrategy + 12 >> 2],
        canvasResizedCallbackUserData: GROWABLE_HEAP_I32()[fullscreenStrategy + 16 >> 2]
    };
    return doRequestFullscreen(target, strategy)
}

function _emscripten_request_pointerlock(target, deferUntilInEventHandler) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(70, 1, target, deferUntilInEventHandler);
    target = findEventTarget(target);
    if (!target) return -4;
    if (!target.requestPointerLock && !target.msRequestPointerLock) {
        return -1
    }
    var canPerformRequests = JSEvents.canPerformEventHandlerRequests();
    if (!canPerformRequests) {
        if (deferUntilInEventHandler) {
            JSEvents.deferCall(requestPointerLock, 2, [target]);
            return 1
        }
        return -2
    }
    return requestPointerLock(target)
}

function emscripten_realloc_buffer(size) {
    try {
        wasmMemory.grow(size - buffer.byteLength + 65535 >>> 16);
        updateGlobalBufferAndViews(wasmMemory.buffer);
        return 1
    } catch (e) {}
}

function _emscripten_resize_heap(requestedSize) {
    var oldSize = GROWABLE_HEAP_U8().length;
    requestedSize = requestedSize >>> 0;
    if (requestedSize <= oldSize) {
        return false
    }
    var maxHeapSize = getHeapMax();
    if (requestedSize > maxHeapSize) {
        return false
    }
    let alignUp = (x, multiple) => x + (multiple - x % multiple) % multiple;
    for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
        var overGrownHeapSize = oldSize * (1 + .2 / cutDown);
        overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
        var newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
        var replacement = emscripten_realloc_buffer(newSize);
        if (replacement) {
            return true
        }
    }
    return false
}

function _emscripten_run_script_int(ptr) {
    return eval(UTF8ToString(ptr)) | 0
}

function _emscripten_run_script_string(ptr) {
    var s = eval(UTF8ToString(ptr));
    if (s == null) {
        return 0
    }
    s += "";
    var me = _emscripten_run_script_string;
    var len = lengthBytesUTF8(s);
    if (!me.bufferSize || me.bufferSize < len + 1) {
        if (me.bufferSize) _emscripten_builtin_free(me.buffer);
        me.bufferSize = len + 1;
        me.buffer = _emscripten_builtin_malloc(me.bufferSize)
    }
    stringToUTF8(s, me.buffer, me.bufferSize);
    return me.buffer
}

function _emscripten_sample_gamepad_data() {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(71, 1);
    return (JSEvents.lastGamepadState = navigator.getGamepads ? navigator.getGamepads() : navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : null) ? 0 : -1
}

function registerBeforeUnloadEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString) {
    var beforeUnloadEventHandlerFunc = function(ev) {
        var e = ev || event;
        var confirmationMessage = getWasmTableEntry(callbackfunc)(eventTypeId, 0, userData);
        if (confirmationMessage) {
            confirmationMessage = UTF8ToString(confirmationMessage)
        }
        if (confirmationMessage) {
            e.preventDefault();
            e.returnValue = confirmationMessage;
            return confirmationMessage
        }
    };
    var eventHandler = {
        target: findEventTarget(target),
        eventTypeString: eventTypeString,
        callbackfunc: callbackfunc,
        handlerFunc: beforeUnloadEventHandlerFunc,
        useCapture: useCapture
    };
    JSEvents.registerOrRemoveHandler(eventHandler)
}

function _emscripten_set_beforeunload_callback_on_thread(userData, callbackfunc, targetThread) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(72, 1, userData, callbackfunc, targetThread);
    if (typeof onbeforeunload == "undefined") return -1;
    if (targetThread !== 1) return -5;
    registerBeforeUnloadEventCallback(2, userData, true, callbackfunc, 28, "beforeunload");
    return 0
}

function registerFocusEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
    targetThread = JSEvents.getTargetThreadForEventCallback(targetThread);
    if (!JSEvents.focusEvent) JSEvents.focusEvent = _malloc(256);
    var focusEventHandlerFunc = function(ev) {
        var e = ev || event;
        var nodeName = JSEvents.getNodeNameForTarget(e.target);
        var id = e.target.id ? e.target.id : "";
        var focusEvent = targetThread ? _malloc(256) : JSEvents.focusEvent;
        stringToUTF8(nodeName, focusEvent + 0, 128);
        stringToUTF8(id, focusEvent + 128, 128);
        if (targetThread) JSEvents.queueEventHandlerOnThread_iiii(targetThread, callbackfunc, eventTypeId, focusEvent, userData);
        else if (getWasmTableEntry(callbackfunc)(eventTypeId, focusEvent, userData)) e.preventDefault()
    };
    var eventHandler = {
        target: findEventTarget(target),
        eventTypeString: eventTypeString,
        callbackfunc: callbackfunc,
        handlerFunc: focusEventHandlerFunc,
        useCapture: useCapture
    };
    JSEvents.registerOrRemoveHandler(eventHandler)
}

function _emscripten_set_blur_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(73, 1, target, userData, useCapture, callbackfunc, targetThread);
    registerFocusEventCallback(target, userData, useCapture, callbackfunc, 12, "blur", targetThread);
    return 0
}

function _emscripten_set_element_css_size(target, width, height) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(74, 1, target, width, height);
    target = findEventTarget(target);
    if (!target) return -4;
    target.style.width = width + "px";
    target.style.height = height + "px";
    return 0
}

function _emscripten_set_focus_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(75, 1, target, userData, useCapture, callbackfunc, targetThread);
    registerFocusEventCallback(target, userData, useCapture, callbackfunc, 13, "focus", targetThread);
    return 0
}

function fillFullscreenChangeEventData(eventStruct) {
    var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
    var isFullscreen = !!fullscreenElement;
    GROWABLE_HEAP_I32()[eventStruct >> 2] = isFullscreen;
    GROWABLE_HEAP_I32()[eventStruct + 4 >> 2] = JSEvents.fullscreenEnabled();
    var reportedElement = isFullscreen ? fullscreenElement : JSEvents.previousFullscreenElement;
    var nodeName = JSEvents.getNodeNameForTarget(reportedElement);
    var id = reportedElement && reportedElement.id ? reportedElement.id : "";
    stringToUTF8(nodeName, eventStruct + 8, 128);
    stringToUTF8(id, eventStruct + 136, 128);
    GROWABLE_HEAP_I32()[eventStruct + 264 >> 2] = reportedElement ? reportedElement.clientWidth : 0;
    GROWABLE_HEAP_I32()[eventStruct + 268 >> 2] = reportedElement ? reportedElement.clientHeight : 0;
    GROWABLE_HEAP_I32()[eventStruct + 272 >> 2] = screen.width;
    GROWABLE_HEAP_I32()[eventStruct + 276 >> 2] = screen.height;
    if (isFullscreen) {
        JSEvents.previousFullscreenElement = fullscreenElement
    }
}

function registerFullscreenChangeEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
    targetThread = JSEvents.getTargetThreadForEventCallback(targetThread);
    if (!JSEvents.fullscreenChangeEvent) JSEvents.fullscreenChangeEvent = _malloc(280);
    var fullscreenChangeEventhandlerFunc = function(ev) {
        var e = ev || event;
        var fullscreenChangeEvent = targetThread ? _malloc(280) : JSEvents.fullscreenChangeEvent;
        fillFullscreenChangeEventData(fullscreenChangeEvent);
        if (targetThread) JSEvents.queueEventHandlerOnThread_iiii(targetThread, callbackfunc, eventTypeId, fullscreenChangeEvent, userData);
        else if (getWasmTableEntry(callbackfunc)(eventTypeId, fullscreenChangeEvent, userData)) e.preventDefault()
    };
    var eventHandler = {
        target: target,
        eventTypeString: eventTypeString,
        callbackfunc: callbackfunc,
        handlerFunc: fullscreenChangeEventhandlerFunc,
        useCapture: useCapture
    };
    JSEvents.registerOrRemoveHandler(eventHandler)
}

function _emscripten_set_fullscreenchange_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(76, 1, target, userData, useCapture, callbackfunc, targetThread);
    if (!JSEvents.fullscreenEnabled()) return -1;
    target = findEventTarget(target);
    if (!target) return -4;
    registerFullscreenChangeEventCallback(target, userData, useCapture, callbackfunc, 19, "fullscreenchange", targetThread);
    registerFullscreenChangeEventCallback(target, userData, useCapture, callbackfunc, 19, "webkitfullscreenchange", targetThread);
    return 0
}

function registerGamepadEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
    targetThread = JSEvents.getTargetThreadForEventCallback(targetThread);
    if (!JSEvents.gamepadEvent) JSEvents.gamepadEvent = _malloc(1432);
    var gamepadEventHandlerFunc = function(ev) {
        var e = ev || event;
        var gamepadEvent = targetThread ? _malloc(1432) : JSEvents.gamepadEvent;
        fillGamepadEventData(gamepadEvent, e["gamepad"]);
        if (targetThread) JSEvents.queueEventHandlerOnThread_iiii(targetThread, callbackfunc, eventTypeId, gamepadEvent, userData);
        else if (getWasmTableEntry(callbackfunc)(eventTypeId, gamepadEvent, userData)) e.preventDefault()
    };
    var eventHandler = {
        target: findEventTarget(target),
        allowsDeferredCalls: true,
        eventTypeString: eventTypeString,
        callbackfunc: callbackfunc,
        handlerFunc: gamepadEventHandlerFunc,
        useCapture: useCapture
    };
    JSEvents.registerOrRemoveHandler(eventHandler)
}

function _emscripten_set_gamepadconnected_callback_on_thread(userData, useCapture, callbackfunc, targetThread) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(77, 1, userData, useCapture, callbackfunc, targetThread);
    if (!navigator.getGamepads && !navigator.webkitGetGamepads) return -1;
    registerGamepadEventCallback(2, userData, useCapture, callbackfunc, 26, "gamepadconnected", targetThread);
    return 0
}

function _emscripten_set_gamepaddisconnected_callback_on_thread(userData, useCapture, callbackfunc, targetThread) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(78, 1, userData, useCapture, callbackfunc, targetThread);
    if (!navigator.getGamepads && !navigator.webkitGetGamepads) return -1;
    registerGamepadEventCallback(2, userData, useCapture, callbackfunc, 27, "gamepaddisconnected", targetThread);
    return 0
}

function registerKeyEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
    targetThread = JSEvents.getTargetThreadForEventCallback(targetThread);
    if (!JSEvents.keyEvent) JSEvents.keyEvent = _malloc(176);
    var keyEventHandlerFunc = function(e) {
        var keyEventData = targetThread ? _malloc(176) : JSEvents.keyEvent;
        GROWABLE_HEAP_F64()[keyEventData >> 3] = e.timeStamp;
        var idx = keyEventData >> 2;
        GROWABLE_HEAP_I32()[idx + 2] = e.location;
        GROWABLE_HEAP_I32()[idx + 3] = e.ctrlKey;
        GROWABLE_HEAP_I32()[idx + 4] = e.shiftKey;
        GROWABLE_HEAP_I32()[idx + 5] = e.altKey;
        GROWABLE_HEAP_I32()[idx + 6] = e.metaKey;
        GROWABLE_HEAP_I32()[idx + 7] = e.repeat;
        GROWABLE_HEAP_I32()[idx + 8] = e.charCode;
        GROWABLE_HEAP_I32()[idx + 9] = e.keyCode;
        GROWABLE_HEAP_I32()[idx + 10] = e.which;
        stringToUTF8(e.key || "", keyEventData + 44, 32);
        stringToUTF8(e.code || "", keyEventData + 76, 32);
        stringToUTF8(e.char || "", keyEventData + 108, 32);
        stringToUTF8(e.locale || "", keyEventData + 140, 32);
        if (targetThread) JSEvents.queueEventHandlerOnThread_iiii(targetThread, callbackfunc, eventTypeId, keyEventData, userData);
        else if (getWasmTableEntry(callbackfunc)(eventTypeId, keyEventData, userData)) e.preventDefault()
    };
    var eventHandler = {
        target: findEventTarget(target),
        allowsDeferredCalls: true,
        eventTypeString: eventTypeString,
        callbackfunc: callbackfunc,
        handlerFunc: keyEventHandlerFunc,
        useCapture: useCapture
    };
    JSEvents.registerOrRemoveHandler(eventHandler)
}

function _emscripten_set_keydown_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(79, 1, target, userData, useCapture, callbackfunc, targetThread);
    registerKeyEventCallback(target, userData, useCapture, callbackfunc, 2, "keydown", targetThread);
    return 0
}

function _emscripten_set_keypress_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(80, 1, target, userData, useCapture, callbackfunc, targetThread);
    registerKeyEventCallback(target, userData, useCapture, callbackfunc, 1, "keypress", targetThread);
    return 0
}

function _emscripten_set_keyup_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(81, 1, target, userData, useCapture, callbackfunc, targetThread);
    registerKeyEventCallback(target, userData, useCapture, callbackfunc, 3, "keyup", targetThread);
    return 0
}

function _emscripten_set_main_loop(func, fps, simulateInfiniteLoop) {
    var browserIterationFunc = getWasmTableEntry(func);
    setMainLoop(browserIterationFunc, fps, simulateInfiniteLoop)
}

function fillMouseEventData(eventStruct, e, target) {
    GROWABLE_HEAP_F64()[eventStruct >> 3] = e.timeStamp;
    var idx = eventStruct >> 2;
    GROWABLE_HEAP_I32()[idx + 2] = e.screenX;
    GROWABLE_HEAP_I32()[idx + 3] = e.screenY;
    GROWABLE_HEAP_I32()[idx + 4] = e.clientX;
    GROWABLE_HEAP_I32()[idx + 5] = e.clientY;
    GROWABLE_HEAP_I32()[idx + 6] = e.ctrlKey;
    GROWABLE_HEAP_I32()[idx + 7] = e.shiftKey;
    GROWABLE_HEAP_I32()[idx + 8] = e.altKey;
    GROWABLE_HEAP_I32()[idx + 9] = e.metaKey;
    GROWABLE_HEAP_I16()[idx * 2 + 20] = e.button;
    GROWABLE_HEAP_I16()[idx * 2 + 21] = e.buttons;
    GROWABLE_HEAP_I32()[idx + 11] = e["movementX"];
    GROWABLE_HEAP_I32()[idx + 12] = e["movementY"];
    var rect = getBoundingClientRect(target);
    GROWABLE_HEAP_I32()[idx + 13] = e.clientX - rect.left;
    GROWABLE_HEAP_I32()[idx + 14] = e.clientY - rect.top
}

function registerMouseEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
    targetThread = JSEvents.getTargetThreadForEventCallback(targetThread);
    if (!JSEvents.mouseEvent) JSEvents.mouseEvent = _malloc(72);
    target = findEventTarget(target);
    var mouseEventHandlerFunc = function(ev) {
        var e = ev || event;
        fillMouseEventData(JSEvents.mouseEvent, e, target);
        if (targetThread) {
            var mouseEventData = _malloc(72);
            fillMouseEventData(mouseEventData, e, target);
            JSEvents.queueEventHandlerOnThread_iiii(targetThread, callbackfunc, eventTypeId, mouseEventData, userData)
        } else if (getWasmTableEntry(callbackfunc)(eventTypeId, JSEvents.mouseEvent, userData)) e.preventDefault()
    };
    var eventHandler = {
        target: target,
        allowsDeferredCalls: eventTypeString != "mousemove" && eventTypeString != "mouseenter" && eventTypeString != "mouseleave",
        eventTypeString: eventTypeString,
        callbackfunc: callbackfunc,
        handlerFunc: mouseEventHandlerFunc,
        useCapture: useCapture
    };
    JSEvents.registerOrRemoveHandler(eventHandler)
}

function _emscripten_set_mousedown_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(82, 1, target, userData, useCapture, callbackfunc, targetThread);
    registerMouseEventCallback(target, userData, useCapture, callbackfunc, 5, "mousedown", targetThread);
    return 0
}

function _emscripten_set_mouseenter_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(83, 1, target, userData, useCapture, callbackfunc, targetThread);
    registerMouseEventCallback(target, userData, useCapture, callbackfunc, 33, "mouseenter", targetThread);
    return 0
}

function _emscripten_set_mouseleave_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(84, 1, target, userData, useCapture, callbackfunc, targetThread);
    registerMouseEventCallback(target, userData, useCapture, callbackfunc, 34, "mouseleave", targetThread);
    return 0
}

function _emscripten_set_mousemove_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(85, 1, target, userData, useCapture, callbackfunc, targetThread);
    registerMouseEventCallback(target, userData, useCapture, callbackfunc, 8, "mousemove", targetThread);
    return 0
}

function _emscripten_set_mouseup_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(86, 1, target, userData, useCapture, callbackfunc, targetThread);
    registerMouseEventCallback(target, userData, useCapture, callbackfunc, 6, "mouseup", targetThread);
    return 0
}

function fillPointerlockChangeEventData(eventStruct) {
    var pointerLockElement = document.pointerLockElement || document.mozPointerLockElement || document.webkitPointerLockElement || document.msPointerLockElement;
    var isPointerlocked = !!pointerLockElement;
    GROWABLE_HEAP_I32()[eventStruct >> 2] = isPointerlocked;
    var nodeName = JSEvents.getNodeNameForTarget(pointerLockElement);
    var id = pointerLockElement && pointerLockElement.id ? pointerLockElement.id : "";
    stringToUTF8(nodeName, eventStruct + 4, 128);
    stringToUTF8(id, eventStruct + 132, 128)
}

function registerPointerlockChangeEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
    targetThread = JSEvents.getTargetThreadForEventCallback(targetThread);
    if (!JSEvents.pointerlockChangeEvent) JSEvents.pointerlockChangeEvent = _malloc(260);
    var pointerlockChangeEventHandlerFunc = function(ev) {
        var e = ev || event;
        var pointerlockChangeEvent = targetThread ? _malloc(260) : JSEvents.pointerlockChangeEvent;
        fillPointerlockChangeEventData(pointerlockChangeEvent);
        if (targetThread) JSEvents.queueEventHandlerOnThread_iiii(targetThread, callbackfunc, eventTypeId, pointerlockChangeEvent, userData);
        else if (getWasmTableEntry(callbackfunc)(eventTypeId, pointerlockChangeEvent, userData)) e.preventDefault()
    };
    var eventHandler = {
        target: target,
        eventTypeString: eventTypeString,
        callbackfunc: callbackfunc,
        handlerFunc: pointerlockChangeEventHandlerFunc,
        useCapture: useCapture
    };
    JSEvents.registerOrRemoveHandler(eventHandler)
}

function _emscripten_set_pointerlockchange_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(87, 1, target, userData, useCapture, callbackfunc, targetThread);
    if (!document || !document.body || !document.body.requestPointerLock && !document.body.mozRequestPointerLock && !document.body.webkitRequestPointerLock && !document.body.msRequestPointerLock) {
        return -1
    }
    target = findEventTarget(target);
    if (!target) return -4;
    registerPointerlockChangeEventCallback(target, userData, useCapture, callbackfunc, 20, "pointerlockchange", targetThread);
    registerPointerlockChangeEventCallback(target, userData, useCapture, callbackfunc, 20, "mozpointerlockchange", targetThread);
    registerPointerlockChangeEventCallback(target, userData, useCapture, callbackfunc, 20, "webkitpointerlockchange", targetThread);
    registerPointerlockChangeEventCallback(target, userData, useCapture, callbackfunc, 20, "mspointerlockchange", targetThread);
    return 0
}

function registerUiEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
    targetThread = JSEvents.getTargetThreadForEventCallback(targetThread);
    if (!JSEvents.uiEvent) JSEvents.uiEvent = _malloc(36);
    target = findEventTarget(target);
    var uiEventHandlerFunc = function(ev) {
        var e = ev || event;
        if (e.target != target) {
            return
        }
        var b = document.body;
        if (!b) {
            return
        }
        var uiEvent = targetThread ? _malloc(36) : JSEvents.uiEvent;
        GROWABLE_HEAP_I32()[uiEvent >> 2] = e.detail;
        GROWABLE_HEAP_I32()[uiEvent + 4 >> 2] = b.clientWidth;
        GROWABLE_HEAP_I32()[uiEvent + 8 >> 2] = b.clientHeight;
        GROWABLE_HEAP_I32()[uiEvent + 12 >> 2] = innerWidth;
        GROWABLE_HEAP_I32()[uiEvent + 16 >> 2] = innerHeight;
        GROWABLE_HEAP_I32()[uiEvent + 20 >> 2] = outerWidth;
        GROWABLE_HEAP_I32()[uiEvent + 24 >> 2] = outerHeight;
        GROWABLE_HEAP_I32()[uiEvent + 28 >> 2] = pageXOffset;
        GROWABLE_HEAP_I32()[uiEvent + 32 >> 2] = pageYOffset;
        if (targetThread) JSEvents.queueEventHandlerOnThread_iiii(targetThread, callbackfunc, eventTypeId, uiEvent, userData);
        else if (getWasmTableEntry(callbackfunc)(eventTypeId, uiEvent, userData)) e.preventDefault()
    };
    var eventHandler = {
        target: target,
        eventTypeString: eventTypeString,
        callbackfunc: callbackfunc,
        handlerFunc: uiEventHandlerFunc,
        useCapture: useCapture
    };
    JSEvents.registerOrRemoveHandler(eventHandler)
}

function _emscripten_set_resize_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(88, 1, target, userData, useCapture, callbackfunc, targetThread);
    registerUiEventCallback(target, userData, useCapture, callbackfunc, 10, "resize", targetThread);
    return 0
}

function registerTouchEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
    targetThread = JSEvents.getTargetThreadForEventCallback(targetThread);
    if (!JSEvents.touchEvent) JSEvents.touchEvent = _malloc(1696);
    target = findEventTarget(target);
    var touchEventHandlerFunc = function(e) {
        var t, touches = {},
            et = e.touches;
        for (var i = 0; i < et.length; ++i) {
            t = et[i];
            t.isChanged = t.onTarget = 0;
            touches[t.identifier] = t
        }
        for (var i = 0; i < e.changedTouches.length; ++i) {
            t = e.changedTouches[i];
            t.isChanged = 1;
            touches[t.identifier] = t
        }
        for (var i = 0; i < e.targetTouches.length; ++i) {
            touches[e.targetTouches[i].identifier].onTarget = 1
        }
        var touchEvent = targetThread ? _malloc(1696) : JSEvents.touchEvent;
        GROWABLE_HEAP_F64()[touchEvent >> 3] = e.timeStamp;
        var idx = touchEvent >> 2;
        GROWABLE_HEAP_I32()[idx + 3] = e.ctrlKey;
        GROWABLE_HEAP_I32()[idx + 4] = e.shiftKey;
        GROWABLE_HEAP_I32()[idx + 5] = e.altKey;
        GROWABLE_HEAP_I32()[idx + 6] = e.metaKey;
        idx += 7;
        var targetRect = getBoundingClientRect(target);
        var numTouches = 0;
        for (var i in touches) {
            t = touches[i];
            GROWABLE_HEAP_I32()[idx + 0] = t.identifier;
            GROWABLE_HEAP_I32()[idx + 1] = t.screenX;
            GROWABLE_HEAP_I32()[idx + 2] = t.screenY;
            GROWABLE_HEAP_I32()[idx + 3] = t.clientX;
            GROWABLE_HEAP_I32()[idx + 4] = t.clientY;
            GROWABLE_HEAP_I32()[idx + 5] = t.pageX;
            GROWABLE_HEAP_I32()[idx + 6] = t.pageY;
            GROWABLE_HEAP_I32()[idx + 7] = t.isChanged;
            GROWABLE_HEAP_I32()[idx + 8] = t.onTarget;
            GROWABLE_HEAP_I32()[idx + 9] = t.clientX - targetRect.left;
            GROWABLE_HEAP_I32()[idx + 10] = t.clientY - targetRect.top;
            idx += 13;
            if (++numTouches > 31) {
                break
            }
        }
        GROWABLE_HEAP_I32()[touchEvent + 8 >> 2] = numTouches;
        if (targetThread) JSEvents.queueEventHandlerOnThread_iiii(targetThread, callbackfunc, eventTypeId, touchEvent, userData);
        else if (getWasmTableEntry(callbackfunc)(eventTypeId, touchEvent, userData)) e.preventDefault()
    };
    var eventHandler = {
        target: target,
        allowsDeferredCalls: eventTypeString == "touchstart" || eventTypeString == "touchend",
        eventTypeString: eventTypeString,
        callbackfunc: callbackfunc,
        handlerFunc: touchEventHandlerFunc,
        useCapture: useCapture
    };
    JSEvents.registerOrRemoveHandler(eventHandler)
}

function _emscripten_set_touchcancel_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(89, 1, target, userData, useCapture, callbackfunc, targetThread);
    registerTouchEventCallback(target, userData, useCapture, callbackfunc, 25, "touchcancel", targetThread);
    return 0
}

function _emscripten_set_touchend_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(90, 1, target, userData, useCapture, callbackfunc, targetThread);
    registerTouchEventCallback(target, userData, useCapture, callbackfunc, 23, "touchend", targetThread);
    return 0
}

function _emscripten_set_touchmove_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(91, 1, target, userData, useCapture, callbackfunc, targetThread);
    registerTouchEventCallback(target, userData, useCapture, callbackfunc, 24, "touchmove", targetThread);
    return 0
}

function _emscripten_set_touchstart_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(92, 1, target, userData, useCapture, callbackfunc, targetThread);
    registerTouchEventCallback(target, userData, useCapture, callbackfunc, 22, "touchstart", targetThread);
    return 0
}

function fillVisibilityChangeEventData(eventStruct) {
    var visibilityStates = ["hidden", "visible", "prerender", "unloaded"];
    var visibilityState = visibilityStates.indexOf(document.visibilityState);
    GROWABLE_HEAP_I32()[eventStruct >> 2] = document.hidden;
    GROWABLE_HEAP_I32()[eventStruct + 4 >> 2] = visibilityState
}

function registerVisibilityChangeEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
    targetThread = JSEvents.getTargetThreadForEventCallback(targetThread);
    if (!JSEvents.visibilityChangeEvent) JSEvents.visibilityChangeEvent = _malloc(8);
    var visibilityChangeEventHandlerFunc = function(ev) {
        var e = ev || event;
        var visibilityChangeEvent = targetThread ? _malloc(8) : JSEvents.visibilityChangeEvent;
        fillVisibilityChangeEventData(visibilityChangeEvent);
        if (targetThread) JSEvents.queueEventHandlerOnThread_iiii(targetThread, callbackfunc, eventTypeId, visibilityChangeEvent, userData);
        else if (getWasmTableEntry(callbackfunc)(eventTypeId, visibilityChangeEvent, userData)) e.preventDefault()
    };
    var eventHandler = {
        target: target,
        eventTypeString: eventTypeString,
        callbackfunc: callbackfunc,
        handlerFunc: visibilityChangeEventHandlerFunc,
        useCapture: useCapture
    };
    JSEvents.registerOrRemoveHandler(eventHandler)
}

function _emscripten_set_visibilitychange_callback_on_thread(userData, useCapture, callbackfunc, targetThread) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(93, 1, userData, useCapture, callbackfunc, targetThread);
    if (!specialHTMLTargets[1]) {
        return -4
    }
    registerVisibilityChangeEventCallback(specialHTMLTargets[1], userData, useCapture, callbackfunc, 21, "visibilitychange", targetThread);
    return 0
}

function registerWheelEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
    targetThread = JSEvents.getTargetThreadForEventCallback(targetThread);
    if (!JSEvents.wheelEvent) JSEvents.wheelEvent = _malloc(104);
    var wheelHandlerFunc = function(ev) {
        var e = ev || event;
        var wheelEvent = targetThread ? _malloc(104) : JSEvents.wheelEvent;
        fillMouseEventData(wheelEvent, e, target);
        GROWABLE_HEAP_F64()[wheelEvent + 72 >> 3] = e["deltaX"];
        GROWABLE_HEAP_F64()[wheelEvent + 80 >> 3] = e["deltaY"];
        GROWABLE_HEAP_F64()[wheelEvent + 88 >> 3] = e["deltaZ"];
        GROWABLE_HEAP_I32()[wheelEvent + 96 >> 2] = e["deltaMode"];
        if (targetThread) JSEvents.queueEventHandlerOnThread_iiii(targetThread, callbackfunc, eventTypeId, wheelEvent, userData);
        else if (getWasmTableEntry(callbackfunc)(eventTypeId, wheelEvent, userData)) e.preventDefault()
    };
    var eventHandler = {
        target: target,
        allowsDeferredCalls: true,
        eventTypeString: eventTypeString,
        callbackfunc: callbackfunc,
        handlerFunc: wheelHandlerFunc,
        useCapture: useCapture
    };
    JSEvents.registerOrRemoveHandler(eventHandler)
}

function _emscripten_set_wheel_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(94, 1, target, userData, useCapture, callbackfunc, targetThread);
    target = findEventTarget(target);
    if (typeof target.onwheel != "undefined") {
        registerWheelEventCallback(target, userData, useCapture, callbackfunc, 9, "wheel", targetThread);
        return 0
    } else {
        return -1
    }
}

function _emscripten_set_window_title(title) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(95, 1, title);
    setWindowTitle(UTF8ToString(title))
}

function _emscripten_sleep() {
    throw "Please compile your program with async support in order to use asynchronous operations like emscripten_sleep"
}
var Fetch = {
    xhrs: [],
    setu64: function(addr, val) {
        GROWABLE_HEAP_U32()[addr >> 2] = val;
        GROWABLE_HEAP_U32()[addr + 4 >> 2] = val / 4294967296 | 0
    },
    openDatabase: function(dbname, dbversion, onsuccess, onerror) {
        try {
            var openRequest = indexedDB.open(dbname, dbversion)
        } catch (e) {
            return onerror(e)
        }
        openRequest.onupgradeneeded = event => {
            var db = event.target.result;
            if (db.objectStoreNames.contains("FILES")) {
                db.deleteObjectStore("FILES")
            }
            db.createObjectStore("FILES")
        };
        openRequest.onsuccess = event => onsuccess(event.target.result);
        openRequest.onerror = error => onerror(error)
    },
    staticInit: function() {
        var isMainThread = true;
        var onsuccess = db => {
            Fetch.dbInstance = db;
            if (isMainThread) {
                removeRunDependency("library_fetch_init")
            }
        };
        var onerror = () => {
            Fetch.dbInstance = false;
            if (isMainThread) {
                removeRunDependency("library_fetch_init")
            }
        };
        Fetch.openDatabase("emscripten_filesystem", 1, onsuccess, onerror);
        if (typeof ENVIRONMENT_IS_FETCH_WORKER == "undefined" || !ENVIRONMENT_IS_FETCH_WORKER) addRunDependency("library_fetch_init")
    }
};

function fetchXHR(fetch, onsuccess, onerror, onprogress, onreadystatechange) {
    var url = GROWABLE_HEAP_U32()[fetch + 8 >> 2];
    if (!url) {
        onerror(fetch, 0, "no url specified!");
        return
    }
    var url_ = UTF8ToString(url);
    var fetch_attr = fetch + 112;
    var requestMethod = UTF8ToString(fetch_attr);
    if (!requestMethod) requestMethod = "GET";
    var userData = GROWABLE_HEAP_U32()[fetch + 4 >> 2];
    var fetchAttributes = GROWABLE_HEAP_U32()[fetch_attr + 52 >> 2];
    var timeoutMsecs = GROWABLE_HEAP_U32()[fetch_attr + 56 >> 2];
    var withCredentials = !!GROWABLE_HEAP_U32()[fetch_attr + 60 >> 2];
    var destinationPath = GROWABLE_HEAP_U32()[fetch_attr + 64 >> 2];
    var userName = GROWABLE_HEAP_U32()[fetch_attr + 68 >> 2];
    var password = GROWABLE_HEAP_U32()[fetch_attr + 72 >> 2];
    var requestHeaders = GROWABLE_HEAP_U32()[fetch_attr + 76 >> 2];
    var overriddenMimeType = GROWABLE_HEAP_U32()[fetch_attr + 80 >> 2];
    var dataPtr = GROWABLE_HEAP_U32()[fetch_attr + 84 >> 2];
    var dataLength = GROWABLE_HEAP_U32()[fetch_attr + 88 >> 2];
    var fetchAttrLoadToMemory = !!(fetchAttributes & 1);
    var fetchAttrStreamData = !!(fetchAttributes & 2);
    var fetchAttrSynchronous = !!(fetchAttributes & 64);
    var userNameStr = userName ? UTF8ToString(userName) : undefined;
    var passwordStr = password ? UTF8ToString(password) : undefined;
    var xhr = new XMLHttpRequest;
    xhr.withCredentials = withCredentials;
    xhr.open(requestMethod, url_, !fetchAttrSynchronous, userNameStr, passwordStr);
    if (!fetchAttrSynchronous) xhr.timeout = timeoutMsecs;
    xhr.url_ = url_;
    xhr.responseType = "arraybuffer";
    if (overriddenMimeType) {
        var overriddenMimeTypeStr = UTF8ToString(overriddenMimeType);
        xhr.overrideMimeType(overriddenMimeTypeStr)
    }
    if (requestHeaders) {
        for (;;) {
            var key = GROWABLE_HEAP_U32()[requestHeaders >> 2];
            if (!key) break;
            var value = GROWABLE_HEAP_U32()[requestHeaders + 4 >> 2];
            if (!value) break;
            requestHeaders += 8;
            var keyStr = UTF8ToString(key);
            var valueStr = UTF8ToString(value);
            xhr.setRequestHeader(keyStr, valueStr)
        }
    }
    Fetch.xhrs.push(xhr);
    var id = Fetch.xhrs.length;
    GROWABLE_HEAP_U32()[fetch + 0 >> 2] = id;
    var data = dataPtr && dataLength ? GROWABLE_HEAP_U8().slice(dataPtr, dataPtr + dataLength) : null;

    function saveResponse(condition) {
        var ptr = 0;
        var ptrLen = 0;
        if (condition) {
            ptrLen = xhr.response ? xhr.response.byteLength : 0;
            ptr = _malloc(ptrLen);
            GROWABLE_HEAP_U8().set(new Uint8Array(xhr.response), ptr)
        }
        GROWABLE_HEAP_U32()[fetch + 12 >> 2] = ptr;
        Fetch.setu64(fetch + 16, ptrLen)
    }
    xhr.onload = e => {
        saveResponse(fetchAttrLoadToMemory && !fetchAttrStreamData);
        var len = xhr.response ? xhr.response.byteLength : 0;
        Fetch.setu64(fetch + 24, 0);
        if (len) {
            Fetch.setu64(fetch + 32, len)
        }
        GROWABLE_HEAP_U16()[fetch + 40 >> 1] = xhr.readyState;
        GROWABLE_HEAP_U16()[fetch + 42 >> 1] = xhr.status;
        if (xhr.statusText) stringToUTF8(xhr.statusText, fetch + 44, 64);
        if (xhr.status >= 200 && xhr.status < 300) {
            if (onsuccess) onsuccess(fetch, xhr, e)
        } else {
            if (onerror) onerror(fetch, xhr, e)
        }
    };
    xhr.onerror = e => {
        saveResponse(fetchAttrLoadToMemory);
        var status = xhr.status;
        Fetch.setu64(fetch + 24, 0);
        Fetch.setu64(fetch + 32, xhr.response ? xhr.response.byteLength : 0);
        GROWABLE_HEAP_U16()[fetch + 40 >> 1] = xhr.readyState;
        GROWABLE_HEAP_U16()[fetch + 42 >> 1] = status;
        if (onerror) onerror(fetch, xhr, e)
    };
    xhr.ontimeout = e => {
        if (onerror) onerror(fetch, xhr, e)
    };
    xhr.onprogress = e => {
        var ptrLen = fetchAttrLoadToMemory && fetchAttrStreamData && xhr.response ? xhr.response.byteLength : 0;
        var ptr = 0;
        if (fetchAttrLoadToMemory && fetchAttrStreamData) {
            ptr = _malloc(ptrLen);
            GROWABLE_HEAP_U8().set(new Uint8Array(xhr.response), ptr)
        }
        GROWABLE_HEAP_U32()[fetch + 12 >> 2] = ptr;
        Fetch.setu64(fetch + 16, ptrLen);
        Fetch.setu64(fetch + 24, e.loaded - ptrLen);
        Fetch.setu64(fetch + 32, e.total);
        GROWABLE_HEAP_U16()[fetch + 40 >> 1] = xhr.readyState;
        if (xhr.readyState >= 3 && xhr.status === 0 && e.loaded > 0) xhr.status = 200;
        GROWABLE_HEAP_U16()[fetch + 42 >> 1] = xhr.status;
        if (xhr.statusText) stringToUTF8(xhr.statusText, fetch + 44, 64);
        if (onprogress) onprogress(fetch, xhr, e);
        if (ptr) {
            _free(ptr)
        }
    };
    xhr.onreadystatechange = e => {
        GROWABLE_HEAP_U16()[fetch + 40 >> 1] = xhr.readyState;
        if (xhr.readyState >= 2) {
            GROWABLE_HEAP_U16()[fetch + 42 >> 1] = xhr.status
        }
        if (onreadystatechange) onreadystatechange(fetch, xhr, e)
    };
    try {
        xhr.send(data)
    } catch (e) {
        if (onerror) onerror(fetch, xhr, e)
    }
}

function fetchCacheData(db, fetch, data, onsuccess, onerror) {
    if (!db) {
        onerror(fetch, 0, "IndexedDB not available!");
        return
    }
    var fetch_attr = fetch + 112;
    var destinationPath = GROWABLE_HEAP_U32()[fetch_attr + 64 >> 2];
    if (!destinationPath) destinationPath = GROWABLE_HEAP_U32()[fetch + 8 >> 2];
    var destinationPathStr = UTF8ToString(destinationPath);
    try {
        var transaction = db.transaction(["FILES"], "readwrite");
        var packages = transaction.objectStore("FILES");
        var putRequest = packages.put(data, destinationPathStr);
        putRequest.onsuccess = event => {
            GROWABLE_HEAP_U16()[fetch + 40 >> 1] = 4;
            GROWABLE_HEAP_U16()[fetch + 42 >> 1] = 200;
            stringToUTF8("OK", fetch + 44, 64);
            onsuccess(fetch, 0, destinationPathStr)
        };
        putRequest.onerror = error => {
            GROWABLE_HEAP_U16()[fetch + 40 >> 1] = 4;
            GROWABLE_HEAP_U16()[fetch + 42 >> 1] = 413;
            stringToUTF8("Payload Too Large", fetch + 44, 64);
            onerror(fetch, 0, error)
        }
    } catch (e) {
        onerror(fetch, 0, e)
    }
}

function fetchLoadCachedData(db, fetch, onsuccess, onerror) {
    if (!db) {
        onerror(fetch, 0, "IndexedDB not available!");
        return
    }
    var fetch_attr = fetch + 112;
    var path = GROWABLE_HEAP_U32()[fetch_attr + 64 >> 2];
    if (!path) path = GROWABLE_HEAP_U32()[fetch + 8 >> 2];
    var pathStr = UTF8ToString(path);
    try {
        var transaction = db.transaction(["FILES"], "readonly");
        var packages = transaction.objectStore("FILES");
        var getRequest = packages.get(pathStr);
        getRequest.onsuccess = event => {
            if (event.target.result) {
                var value = event.target.result;
                var len = value.byteLength || value.length;
                var ptr = _malloc(len);
                GROWABLE_HEAP_U8().set(new Uint8Array(value), ptr);
                GROWABLE_HEAP_U32()[fetch + 12 >> 2] = ptr;
                Fetch.setu64(fetch + 16, len);
                Fetch.setu64(fetch + 24, 0);
                Fetch.setu64(fetch + 32, len);
                GROWABLE_HEAP_U16()[fetch + 40 >> 1] = 4;
                GROWABLE_HEAP_U16()[fetch + 42 >> 1] = 200;
                stringToUTF8("OK", fetch + 44, 64);
                onsuccess(fetch, 0, value)
            } else {
                GROWABLE_HEAP_U16()[fetch + 40 >> 1] = 4;
                GROWABLE_HEAP_U16()[fetch + 42 >> 1] = 404;
                stringToUTF8("Not Found", fetch + 44, 64);
                onerror(fetch, 0, "no data")
            }
        };
        getRequest.onerror = error => {
            GROWABLE_HEAP_U16()[fetch + 40 >> 1] = 4;
            GROWABLE_HEAP_U16()[fetch + 42 >> 1] = 404;
            stringToUTF8("Not Found", fetch + 44, 64);
            onerror(fetch, 0, error)
        }
    } catch (e) {
        onerror(fetch, 0, e)
    }
}

function fetchDeleteCachedData(db, fetch, onsuccess, onerror) {
    if (!db) {
        onerror(fetch, 0, "IndexedDB not available!");
        return
    }
    var fetch_attr = fetch + 112;
    var path = GROWABLE_HEAP_U32()[fetch_attr + 64 >> 2];
    if (!path) path = GROWABLE_HEAP_U32()[fetch + 8 >> 2];
    var pathStr = UTF8ToString(path);
    try {
        var transaction = db.transaction(["FILES"], "readwrite");
        var packages = transaction.objectStore("FILES");
        var request = packages.delete(pathStr);
        request.onsuccess = event => {
            var value = event.target.result;
            GROWABLE_HEAP_U32()[fetch + 12 >> 2] = 0;
            Fetch.setu64(fetch + 16, 0);
            Fetch.setu64(fetch + 24, 0);
            Fetch.setu64(fetch + 32, 0);
            GROWABLE_HEAP_U16()[fetch + 40 >> 1] = 4;
            GROWABLE_HEAP_U16()[fetch + 42 >> 1] = 200;
            stringToUTF8("OK", fetch + 44, 64);
            onsuccess(fetch, 0, value)
        };
        request.onerror = error => {
            GROWABLE_HEAP_U16()[fetch + 40 >> 1] = 4;
            GROWABLE_HEAP_U16()[fetch + 42 >> 1] = 404;
            stringToUTF8("Not Found", fetch + 44, 64);
            onerror(fetch, 0, error)
        }
    } catch (e) {
        onerror(fetch, 0, e)
    }
}

function _emscripten_start_fetch(fetch, successcb, errorcb, progresscb, readystatechangecb) {
    runtimeKeepalivePush();
    var fetch_attr = fetch + 112;
    var requestMethod = UTF8ToString(fetch_attr);
    var onsuccess = GROWABLE_HEAP_U32()[fetch_attr + 36 >> 2];
    var onerror = GROWABLE_HEAP_U32()[fetch_attr + 40 >> 2];
    var onprogress = GROWABLE_HEAP_U32()[fetch_attr + 44 >> 2];
    var onreadystatechange = GROWABLE_HEAP_U32()[fetch_attr + 48 >> 2];
    var fetchAttributes = GROWABLE_HEAP_U32()[fetch_attr + 52 >> 2];
    var fetchAttrPersistFile = !!(fetchAttributes & 4);
    var fetchAttrNoDownload = !!(fetchAttributes & 32);
    var fetchAttrReplace = !!(fetchAttributes & 16);
    var fetchAttrSynchronous = !!(fetchAttributes & 64);

    function doCallback(f) {
        if (fetchAttrSynchronous) {
            f()
        } else {
            callUserCallback(f)
        }
    }
    var reportSuccess = (fetch, xhr, e) => {
        runtimeKeepalivePop();
        doCallback(() => {
            if (onsuccess) getWasmTableEntry(onsuccess)(fetch);
            else if (successcb) successcb(fetch)
        })
    };
    var reportProgress = (fetch, xhr, e) => {
        doCallback(() => {
            if (onprogress) getWasmTableEntry(onprogress)(fetch);
            else if (progresscb) progresscb(fetch)
        })
    };
    var reportError = (fetch, xhr, e) => {
        runtimeKeepalivePop();
        doCallback(() => {
            if (onerror) getWasmTableEntry(onerror)(fetch);
            else if (errorcb) errorcb(fetch)
        })
    };
    var reportReadyStateChange = (fetch, xhr, e) => {
        doCallback(() => {
            if (onreadystatechange) getWasmTableEntry(onreadystatechange)(fetch);
            else if (readystatechangecb) readystatechangecb(fetch)
        })
    };
    var performUncachedXhr = (fetch, xhr, e) => {
        fetchXHR(fetch, reportSuccess, reportError, reportProgress, reportReadyStateChange)
    };
    var cacheResultAndReportSuccess = (fetch, xhr, e) => {
        var storeSuccess = (fetch, xhr, e) => {
            runtimeKeepalivePop();
            doCallback(() => {
                if (onsuccess) getWasmTableEntry(onsuccess)(fetch);
                else if (successcb) successcb(fetch)
            })
        };
        var storeError = (fetch, xhr, e) => {
            runtimeKeepalivePop();
            doCallback(() => {
                if (onsuccess) getWasmTableEntry(onsuccess)(fetch);
                else if (successcb) successcb(fetch)
            })
        };
        fetchCacheData(Fetch.dbInstance, fetch, xhr.response, storeSuccess, storeError)
    };
    var performCachedXhr = (fetch, xhr, e) => {
        fetchXHR(fetch, cacheResultAndReportSuccess, reportError, reportProgress, reportReadyStateChange)
    };
    if (requestMethod === "EM_IDB_STORE") {
        var ptr = GROWABLE_HEAP_U32()[fetch_attr + 84 >> 2];
        fetchCacheData(Fetch.dbInstance, fetch, GROWABLE_HEAP_U8().slice(ptr, ptr + GROWABLE_HEAP_U32()[fetch_attr + 88 >> 2]), reportSuccess, reportError)
    } else if (requestMethod === "EM_IDB_DELETE") {
        fetchDeleteCachedData(Fetch.dbInstance, fetch, reportSuccess, reportError)
    } else if (!fetchAttrReplace) {
        fetchLoadCachedData(Fetch.dbInstance, fetch, reportSuccess, fetchAttrNoDownload ? reportError : fetchAttrPersistFile ? performCachedXhr : performUncachedXhr)
    } else if (!fetchAttrNoDownload) {
        fetchXHR(fetch, fetchAttrPersistFile ? cacheResultAndReportSuccess : reportSuccess, reportError, reportProgress, reportReadyStateChange)
    } else {
        return 0
    }
    return fetch
}

function _emscripten_unwind_to_js_event_loop() {
    throw "unwind"
}
var WS = {
    sockets: [null],
    socketEvent: null
};

function _emscripten_websocket_delete(socketId) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(96, 1, socketId);
    var socket = WS.sockets[socketId];
    if (!socket) {
        return -3
    }
    socket.onopen = socket.onerror = socket.onclose = socket.onmessage = null;
    delete WS.sockets[socketId];
    return 0
}

function _emscripten_websocket_is_supported() {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(97, 1);
    return typeof WebSocket != "undefined"
}

function _emscripten_websocket_new(createAttributes) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(98, 1, createAttributes);
    if (typeof WebSocket == "undefined") {
        return -1
    }
    if (!createAttributes) {
        return -5
    }
    var createAttrs = createAttributes >> 2;
    var url = UTF8ToString(GROWABLE_HEAP_I32()[createAttrs]);
    var protocols = GROWABLE_HEAP_I32()[createAttrs + 1];
    var socket = protocols ? new WebSocket(url, UTF8ToString(protocols).split(",")) : new WebSocket(url);
    socket.binaryType = "arraybuffer";
    var socketId = WS.sockets.length;
    WS.sockets[socketId] = socket;
    return socketId
}

function _emscripten_websocket_send_binary(socketId, binaryData, dataLength) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(99, 1, socketId, binaryData, dataLength);
    var socket = WS.sockets[socketId];
    if (!socket) {
        return -3
    }
    socket.send(new Uint8Array(GROWABLE_HEAP_U8().subarray(binaryData, binaryData + dataLength)));
    return 0
}

function _emscripten_websocket_set_onclose_callback_on_thread(socketId, userData, callbackFunc, thread) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(100, 1, socketId, userData, callbackFunc, thread);
    if (!WS.socketEvent) WS.socketEvent = _malloc(1024);
    var socket = WS.sockets[socketId];
    if (!socket) {
        return -3
    }
    socket.onclose = function(e) {
        GROWABLE_HEAP_U32()[WS.socketEvent >> 2] = socketId;
        GROWABLE_HEAP_U32()[WS.socketEvent + 4 >> 2] = e.wasClean;
        GROWABLE_HEAP_U32()[WS.socketEvent + 8 >> 2] = e.code;
        stringToUTF8(e.reason, WS.socketEvent + 10, 512);
        getWasmTableEntry(callbackFunc)(0, WS.socketEvent, userData)
    };
    return 0
}

function _emscripten_websocket_set_onerror_callback_on_thread(socketId, userData, callbackFunc, thread) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(101, 1, socketId, userData, callbackFunc, thread);
    if (!WS.socketEvent) WS.socketEvent = _malloc(1024);
    var socket = WS.sockets[socketId];
    if (!socket) {
        return -3
    }
    socket.onerror = function(e) {
        GROWABLE_HEAP_U32()[WS.socketEvent >> 2] = socketId;
        getWasmTableEntry(callbackFunc)(0, WS.socketEvent, userData)
    };
    return 0
}

function _emscripten_websocket_set_onmessage_callback_on_thread(socketId, userData, callbackFunc, thread) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(102, 1, socketId, userData, callbackFunc, thread);
    if (!WS.socketEvent) WS.socketEvent = _malloc(1024);
    var socket = WS.sockets[socketId];
    if (!socket) {
        return -3
    }
    socket.onmessage = function(e) {
        GROWABLE_HEAP_U32()[WS.socketEvent >> 2] = socketId;
        if (typeof e.data == "string") {
            var len = lengthBytesUTF8(e.data) + 1;
            var buf = _malloc(len);
            stringToUTF8(e.data, buf, len);
            GROWABLE_HEAP_U32()[WS.socketEvent + 12 >> 2] = 1
        } else {
            var len = e.data.byteLength;
            var buf = _malloc(len);
            GROWABLE_HEAP_I8().set(new Uint8Array(e.data), buf);
            GROWABLE_HEAP_U32()[WS.socketEvent + 12 >> 2] = 0
        }
        GROWABLE_HEAP_U32()[WS.socketEvent + 4 >> 2] = buf;
        GROWABLE_HEAP_U32()[WS.socketEvent + 8 >> 2] = len;
        getWasmTableEntry(callbackFunc)(0, WS.socketEvent, userData);
        _free(buf)
    };
    return 0
}

function _emscripten_websocket_set_onopen_callback_on_thread(socketId, userData, callbackFunc, thread) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(103, 1, socketId, userData, callbackFunc, thread);
    if (!WS.socketEvent) WS.socketEvent = _malloc(1024);
    var socket = WS.sockets[socketId];
    if (!socket) {
        return -3
    }
    socket.onopen = function(e) {
        GROWABLE_HEAP_U32()[WS.socketEvent >> 2] = socketId;
        getWasmTableEntry(callbackFunc)(0, WS.socketEvent, userData)
    };
    return 0
}
var ENV = {};

function getExecutableName() {
    return thisProgram || "./this.program"
}

function getEnvStrings() {
    if (!getEnvStrings.strings) {
        var lang = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
        var env = {
            "USER": "web_user",
            "LOGNAME": "web_user",
            "PATH": "/",
            "PWD": "/",
            "HOME": "/home/web_user",
            "LANG": lang,
            "_": getExecutableName()
        };
        for (var x in ENV) {
            if (ENV[x] === undefined) delete env[x];
            else env[x] = ENV[x]
        }
        var strings = [];
        for (var x in env) {
            strings.push(x + "=" + env[x])
        }
        getEnvStrings.strings = strings
    }
    return getEnvStrings.strings
}

function writeAsciiToMemory(str, buffer, dontAddNull) {
    for (var i = 0; i < str.length; ++i) {
        GROWABLE_HEAP_I8()[buffer++ >> 0] = str.charCodeAt(i)
    }
    if (!dontAddNull) GROWABLE_HEAP_I8()[buffer >> 0] = 0
}

function _environ_get(__environ, environ_buf) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(104, 1, __environ, environ_buf);
    var bufSize = 0;
    getEnvStrings().forEach(function(string, i) {
        var ptr = environ_buf + bufSize;
        GROWABLE_HEAP_U32()[__environ + i * 4 >> 2] = ptr;
        writeAsciiToMemory(string, ptr);
        bufSize += string.length + 1
    });
    return 0
}

function _environ_sizes_get(penviron_count, penviron_buf_size) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(105, 1, penviron_count, penviron_buf_size);
    var strings = getEnvStrings();
    GROWABLE_HEAP_U32()[penviron_count >> 2] = strings.length;
    var bufSize = 0;
    strings.forEach(function(string) {
        bufSize += string.length + 1
    });
    GROWABLE_HEAP_U32()[penviron_buf_size >> 2] = bufSize;
    return 0
}

function _fd_close(fd) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(106, 1, fd);
    try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        FS.close(stream);
        return 0
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return e.errno
    }
}

function doReadv(stream, iov, iovcnt, offset) {
    var ret = 0;
    for (var i = 0; i < iovcnt; i++) {
        var ptr = GROWABLE_HEAP_U32()[iov >> 2];
        var len = GROWABLE_HEAP_U32()[iov + 4 >> 2];
        iov += 8;
        var curr = FS.read(stream, GROWABLE_HEAP_I8(), ptr, len, offset);
        if (curr < 0) return -1;
        ret += curr;
        if (curr < len) break
    }
    return ret
}

function _fd_read(fd, iov, iovcnt, pnum) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(107, 1, fd, iov, iovcnt, pnum);
    try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        var num = doReadv(stream, iov, iovcnt);
        GROWABLE_HEAP_I32()[pnum >> 2] = num;
        return 0
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return e.errno
    }
}

function convertI32PairToI53Checked(lo, hi) {
    return hi + 2097152 >>> 0 < 4194305 - !!lo ? (lo >>> 0) + hi * 4294967296 : NaN
}

function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(108, 1, fd, offset_low, offset_high, whence, newOffset);
    try {
        var offset = convertI32PairToI53Checked(offset_low, offset_high);
        if (isNaN(offset)) return 61;
        var stream = SYSCALLS.getStreamFromFD(fd);
        FS.llseek(stream, offset, whence);
        tempI64 = [stream.position >>> 0, (tempDouble = stream.position, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], GROWABLE_HEAP_I32()[newOffset >> 2] = tempI64[0], GROWABLE_HEAP_I32()[newOffset + 4 >> 2] = tempI64[1];
        if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null;
        return 0
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return e.errno
    }
}

function doWritev(stream, iov, iovcnt, offset) {
    var ret = 0;
    for (var i = 0; i < iovcnt; i++) {
        var ptr = GROWABLE_HEAP_U32()[iov >> 2];
        var len = GROWABLE_HEAP_U32()[iov + 4 >> 2];
        iov += 8;
        var curr = FS.write(stream, GROWABLE_HEAP_I8(), ptr, len, offset);
        if (curr < 0) return -1;
        ret += curr
    }
    return ret
}

function _fd_write(fd, iov, iovcnt, pnum) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(109, 1, fd, iov, iovcnt, pnum);
    try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        var num = doWritev(stream, iov, iovcnt);
        GROWABLE_HEAP_U32()[pnum >> 2] = num;
        return 0
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return e.errno
    }
}

function _getTempRet0() {
    return getTempRet0()
}

function inetPton4(str) {
    var b = str.split(".");
    for (var i = 0; i < 4; i++) {
        var tmp = Number(b[i]);
        if (isNaN(tmp)) return null;
        b[i] = tmp
    }
    return (b[0] | b[1] << 8 | b[2] << 16 | b[3] << 24) >>> 0
}

function inetPton6(str) {
    var words;
    var w, offset, z;
    var valid6regx = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i;
    var parts = [];
    if (!valid6regx.test(str)) {
        return null
    }
    if (str === "::") {
        return [0, 0, 0, 0, 0, 0, 0, 0]
    }
    if (str.startsWith("::")) {
        str = str.replace("::", "Z:")
    } else {
        str = str.replace("::", ":Z:")
    }
    if (str.indexOf(".") > 0) {
        str = str.replace(new RegExp("[.]", "g"), ":");
        words = str.split(":");
        words[words.length - 4] = jstoi_q(words[words.length - 4]) + jstoi_q(words[words.length - 3]) * 256;
        words[words.length - 3] = jstoi_q(words[words.length - 2]) + jstoi_q(words[words.length - 1]) * 256;
        words = words.slice(0, words.length - 2)
    } else {
        words = str.split(":")
    }
    offset = 0;
    z = 0;
    for (w = 0; w < words.length; w++) {
        if (typeof words[w] == "string") {
            if (words[w] === "Z") {
                for (z = 0; z < 8 - words.length + 1; z++) {
                    parts[w + z] = 0
                }
                offset = z - 1
            } else {
                parts[w + offset] = _htons(parseInt(words[w], 16))
            }
        } else {
            parts[w + offset] = words[w]
        }
    }
    return [parts[1] << 16 | parts[0], parts[3] << 16 | parts[2], parts[5] << 16 | parts[4], parts[7] << 16 | parts[6]]
}
var DNS = {
    address_map: {
        id: 1,
        addrs: {},
        names: {}
    },
    lookup_name: function(name) {
        var res = inetPton4(name);
        if (res !== null) {
            return name
        }
        res = inetPton6(name);
        if (res !== null) {
            return name
        }
        var addr;
        if (DNS.address_map.addrs[name]) {
            addr = DNS.address_map.addrs[name]
        } else {
            var id = DNS.address_map.id++;
            assert(id < 65535, "exceeded max address mappings of 65535");
            addr = "172.29." + (id & 255) + "." + (id & 65280);
            DNS.address_map.names[addr] = name;
            DNS.address_map.addrs[name] = addr
        }
        return addr
    },
    lookup_addr: function(addr) {
        if (DNS.address_map.names[addr]) {
            return DNS.address_map.names[addr]
        }
        return null
    }
};

function getHostByName(name) {
    var ret = _malloc(20);
    var nameBuf = _malloc(name.length + 1);
    stringToUTF8(name, nameBuf, name.length + 1);
    GROWABLE_HEAP_U32()[ret >> 2] = nameBuf;
    var aliasesBuf = _malloc(4);
    GROWABLE_HEAP_U32()[aliasesBuf >> 2] = 0;
    GROWABLE_HEAP_U32()[ret + 4 >> 2] = aliasesBuf;
    var afinet = 2;
    GROWABLE_HEAP_I32()[ret + 8 >> 2] = afinet;
    GROWABLE_HEAP_I32()[ret + 12 >> 2] = 4;
    var addrListBuf = _malloc(12);
    GROWABLE_HEAP_U32()[addrListBuf >> 2] = addrListBuf + 8;
    GROWABLE_HEAP_U32()[addrListBuf + 4 >> 2] = 0;
    GROWABLE_HEAP_I32()[addrListBuf + 8 >> 2] = inetPton4(DNS.lookup_name(name));
    GROWABLE_HEAP_U32()[ret + 16 >> 2] = addrListBuf;
    return ret
}

function _gethostbyname(name) {
    if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(110, 1, name);
    return getHostByName(UTF8ToString(name))
}

function _glActiveTexture(x0) {
    GLctx["activeTexture"](x0)
}

function _glAttachShader(program, shader) {
    GLctx.attachShader(GL.programs[program], GL.shaders[shader])
}

function _glBindAttribLocation(program, index, name) {
    GLctx.bindAttribLocation(GL.programs[program], index, UTF8ToString(name))
}

function _glBindBuffer(target, buffer) {
    if (target == 34962) {
        GLctx.currentArrayBufferBinding = buffer
    } else if (target == 34963) {
        GLctx.currentElementArrayBufferBinding = buffer
    }
    if (target == 35051) {
        GLctx.currentPixelPackBufferBinding = buffer
    } else if (target == 35052) {
        GLctx.currentPixelUnpackBufferBinding = buffer
    }
    GLctx.bindBuffer(target, GL.buffers[buffer])
}

function _glBindFramebuffer(target, framebuffer) {
    GLctx.bindFramebuffer(target, GL.framebuffers[framebuffer])
}

function _glBindRenderbuffer(target, renderbuffer) {
    GLctx.bindRenderbuffer(target, GL.renderbuffers[renderbuffer])
}

function _glBindTexture(target, texture) {
    GLctx.bindTexture(target, GL.textures[texture])
}

function _glBindVertexArray(vao) {
    GLctx["bindVertexArray"](GL.vaos[vao]);
    var ibo = GLctx.getParameter(34965);
    GLctx.currentElementArrayBufferBinding = ibo ? ibo.name | 0 : 0
}

function _glBlendFunc(x0, x1) {
    GLctx["blendFunc"](x0, x1)
}

function _glBlendFuncSeparate(x0, x1, x2, x3) {
    GLctx["blendFuncSeparate"](x0, x1, x2, x3)
}

function _glBlitFramebuffer(x0, x1, x2, x3, x4, x5, x6, x7, x8, x9) {
    GLctx["blitFramebuffer"](x0, x1, x2, x3, x4, x5, x6, x7, x8, x9)
}

function _glBufferData(target, size, data, usage) {
    if (true) {
        if (data && size) {
            GLctx.bufferData(target, GROWABLE_HEAP_U8(), usage, data, size)
        } else {
            GLctx.bufferData(target, size, usage)
        }
    } else {
        GLctx.bufferData(target, data ? GROWABLE_HEAP_U8().subarray(data, data + size) : size, usage)
    }
}

function _glBufferSubData(target, offset, size, data) {
    if (true) {
        size && GLctx.bufferSubData(target, offset, GROWABLE_HEAP_U8(), data, size);
        return
    }
    GLctx.bufferSubData(target, offset, GROWABLE_HEAP_U8().subarray(data, data + size))
}

function _glCheckFramebufferStatus(x0) {
    return GLctx["checkFramebufferStatus"](x0)
}

function _glClear(x0) {
    GLctx["clear"](x0)
}

function _glClearColor(x0, x1, x2, x3) {
    GLctx["clearColor"](x0, x1, x2, x3)
}

function _glClearDepthf(x0) {
    GLctx["clearDepth"](x0)
}

function _glClearStencil(x0) {
    GLctx["clearStencil"](x0)
}

function _glClientWaitSync(sync, flags, timeoutLo, timeoutHi) {
    return GLctx.clientWaitSync(GL.syncs[sync], flags, convertI32PairToI53(timeoutLo, timeoutHi))
}

function _glColorMask(red, green, blue, alpha) {
    GLctx.colorMask(!!red, !!green, !!blue, !!alpha)
}

function _glCompileShader(shader) {
    GLctx.compileShader(GL.shaders[shader])
}

function _glCompressedTexImage2D(target, level, internalFormat, width, height, border, imageSize, data) {
    if (true) {
        if (GLctx.currentPixelUnpackBufferBinding || !imageSize) {
            GLctx["compressedTexImage2D"](target, level, internalFormat, width, height, border, imageSize, data)
        } else {
            GLctx["compressedTexImage2D"](target, level, internalFormat, width, height, border, GROWABLE_HEAP_U8(), data, imageSize)
        }
        return
    }
    GLctx["compressedTexImage2D"](target, level, internalFormat, width, height, border, data ? GROWABLE_HEAP_U8().subarray(data, data + imageSize) : null)
}

function _glCompressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, imageSize, data) {
    if (true) {
        if (GLctx.currentPixelUnpackBufferBinding || !imageSize) {
            GLctx["compressedTexSubImage2D"](target, level, xoffset, yoffset, width, height, format, imageSize, data)
        } else {
            GLctx["compressedTexSubImage2D"](target, level, xoffset, yoffset, width, height, format, GROWABLE_HEAP_U8(), data, imageSize)
        }
        return
    }
    GLctx["compressedTexSubImage2D"](target, level, xoffset, yoffset, width, height, format, data ? GROWABLE_HEAP_U8().subarray(data, data + imageSize) : null)
}

function _glCopyTexSubImage2D(x0, x1, x2, x3, x4, x5, x6, x7) {
    GLctx["copyTexSubImage2D"](x0, x1, x2, x3, x4, x5, x6, x7)
}

function _glCreateProgram() {
    var id = GL.getNewId(GL.programs);
    var program = GLctx.createProgram();
    program.name = id;
    program.maxUniformLength = program.maxAttributeLength = program.maxUniformBlockNameLength = 0;
    program.uniformIdCounter = 1;
    GL.programs[id] = program;
    return id
}

function _glCreateShader(shaderType) {
    var id = GL.getNewId(GL.shaders);
    GL.shaders[id] = GLctx.createShader(shaderType);
    return id
}

function _glCullFace(x0) {
    GLctx["cullFace"](x0)
}

function _glDeleteBuffers(n, buffers) {
    for (var i = 0; i < n; i++) {
        var id = GROWABLE_HEAP_I32()[buffers + i * 4 >> 2];
        var buffer = GL.buffers[id];
        if (!buffer) continue;
        GLctx.deleteBuffer(buffer);
        buffer.name = 0;
        GL.buffers[id] = null;
        if (id == GLctx.currentArrayBufferBinding) GLctx.currentArrayBufferBinding = 0;
        if (id == GLctx.currentElementArrayBufferBinding) GLctx.currentElementArrayBufferBinding = 0;
        if (id == GLctx.currentPixelPackBufferBinding) GLctx.currentPixelPackBufferBinding = 0;
        if (id == GLctx.currentPixelUnpackBufferBinding) GLctx.currentPixelUnpackBufferBinding = 0
    }
}

function _glDeleteFramebuffers(n, framebuffers) {
    for (var i = 0; i < n; ++i) {
        var id = GROWABLE_HEAP_I32()[framebuffers + i * 4 >> 2];
        var framebuffer = GL.framebuffers[id];
        if (!framebuffer) continue;
        GLctx.deleteFramebuffer(framebuffer);
        framebuffer.name = 0;
        GL.framebuffers[id] = null
    }
}

function _glDeleteProgram(id) {
    if (!id) return;
    var program = GL.programs[id];
    if (!program) {
        GL.recordError(1281);
        return
    }
    GLctx.deleteProgram(program);
    program.name = 0;
    GL.programs[id] = null
}

function _glDeleteRenderbuffers(n, renderbuffers) {
    for (var i = 0; i < n; i++) {
        var id = GROWABLE_HEAP_I32()[renderbuffers + i * 4 >> 2];
        var renderbuffer = GL.renderbuffers[id];
        if (!renderbuffer) continue;
        GLctx.deleteRenderbuffer(renderbuffer);
        renderbuffer.name = 0;
        GL.renderbuffers[id] = null
    }
}

function _glDeleteShader(id) {
    if (!id) return;
    var shader = GL.shaders[id];
    if (!shader) {
        GL.recordError(1281);
        return
    }
    GLctx.deleteShader(shader);
    GL.shaders[id] = null
}

function _glDeleteSync(id) {
    if (!id) return;
    var sync = GL.syncs[id];
    if (!sync) {
        GL.recordError(1281);
        return
    }
    GLctx.deleteSync(sync);
    sync.name = 0;
    GL.syncs[id] = null
}

function _glDeleteTextures(n, textures) {
    for (var i = 0; i < n; i++) {
        var id = GROWABLE_HEAP_I32()[textures + i * 4 >> 2];
        var texture = GL.textures[id];
        if (!texture) continue;
        GLctx.deleteTexture(texture);
        texture.name = 0;
        GL.textures[id] = null
    }
}

function _glDeleteVertexArrays(n, vaos) {
    for (var i = 0; i < n; i++) {
        var id = GROWABLE_HEAP_I32()[vaos + i * 4 >> 2];
        GLctx["deleteVertexArray"](GL.vaos[id]);
        GL.vaos[id] = null
    }
}

function _glDepthFunc(x0) {
    GLctx["depthFunc"](x0)
}

function _glDepthMask(flag) {
    GLctx.depthMask(!!flag)
}

function _glDisable(x0) {
    GLctx["disable"](x0)
}

function _glDisableVertexAttribArray(index) {
    var cb = GL.currentContext.clientBuffers[index];
    cb.enabled = false;
    GLctx.disableVertexAttribArray(index)
}

function _glDrawArrays(mode, first, count) {
    GL.preDrawHandleClientVertexAttribBindings(first + count);
    GLctx.drawArrays(mode, first, count);
    GL.postDrawHandleClientVertexAttribBindings()
}

function _glEnable(x0) {
    GLctx["enable"](x0)
}

function _glEnableVertexAttribArray(index) {
    var cb = GL.currentContext.clientBuffers[index];
    cb.enabled = true;
    GLctx.enableVertexAttribArray(index)
}

function _glFenceSync(condition, flags) {
    var sync = GLctx.fenceSync(condition, flags);
    if (sync) {
        var id = GL.getNewId(GL.syncs);
        sync.name = id;
        GL.syncs[id] = sync;
        return id
    }
    return 0
}

function _glFramebufferRenderbuffer(target, attachment, renderbuffertarget, renderbuffer) {
    GLctx.framebufferRenderbuffer(target, attachment, renderbuffertarget, GL.renderbuffers[renderbuffer])
}

function _glFramebufferTexture2D(target, attachment, textarget, texture, level) {
    GLctx.framebufferTexture2D(target, attachment, textarget, GL.textures[texture], level)
}

function _glGenBuffers(n, buffers) {
    __glGenObject(n, buffers, "createBuffer", GL.buffers)
}

function _glGenFramebuffers(n, ids) {
    __glGenObject(n, ids, "createFramebuffer", GL.framebuffers)
}

function _glGenRenderbuffers(n, renderbuffers) {
    __glGenObject(n, renderbuffers, "createRenderbuffer", GL.renderbuffers)
}

function _glGenTextures(n, textures) {
    __glGenObject(n, textures, "createTexture", GL.textures)
}

function _glGenVertexArrays(n, arrays) {
    __glGenObject(n, arrays, "createVertexArray", GL.vaos)
}

function _glGenerateMipmap(x0) {
    GLctx["generateMipmap"](x0)
}

function _glGetActiveUniform(program, index, bufSize, length, size, type, name) {
    __glGetActiveAttribOrUniform("getActiveUniform", program, index, bufSize, length, size, type, name)
}

function _glGetError() {
    var error = GLctx.getError() || GL.lastError;
    GL.lastError = 0;
    return error
}

function _glGetIntegerv(name_, p) {
    emscriptenWebGLGet(name_, p, 0)
}

function _glGetProgramInfoLog(program, maxLength, length, infoLog) {
    var log = GLctx.getProgramInfoLog(GL.programs[program]);
    if (log === null) log = "(unknown error)";
    var numBytesWrittenExclNull = maxLength > 0 && infoLog ? stringToUTF8(log, infoLog, maxLength) : 0;
    if (length) GROWABLE_HEAP_I32()[length >> 2] = numBytesWrittenExclNull
}

function _glGetProgramiv(program, pname, p) {
    if (!p) {
        GL.recordError(1281);
        return
    }
    if (program >= GL.counter) {
        GL.recordError(1281);
        return
    }
    program = GL.programs[program];
    if (pname == 35716) {
        var log = GLctx.getProgramInfoLog(program);
        if (log === null) log = "(unknown error)";
        GROWABLE_HEAP_I32()[p >> 2] = log.length + 1
    } else if (pname == 35719) {
        if (!program.maxUniformLength) {
            for (var i = 0; i < GLctx.getProgramParameter(program, 35718); ++i) {
                program.maxUniformLength = Math.max(program.maxUniformLength, GLctx.getActiveUniform(program, i).name.length + 1)
            }
        }
        GROWABLE_HEAP_I32()[p >> 2] = program.maxUniformLength
    } else if (pname == 35722) {
        if (!program.maxAttributeLength) {
            for (var i = 0; i < GLctx.getProgramParameter(program, 35721); ++i) {
                program.maxAttributeLength = Math.max(program.maxAttributeLength, GLctx.getActiveAttrib(program, i).name.length + 1)
            }
        }
        GROWABLE_HEAP_I32()[p >> 2] = program.maxAttributeLength
    } else if (pname == 35381) {
        if (!program.maxUniformBlockNameLength) {
            for (var i = 0; i < GLctx.getProgramParameter(program, 35382); ++i) {
                program.maxUniformBlockNameLength = Math.max(program.maxUniformBlockNameLength, GLctx.getActiveUniformBlockName(program, i).length + 1)
            }
        }
        GROWABLE_HEAP_I32()[p >> 2] = program.maxUniformBlockNameLength
    } else {
        GROWABLE_HEAP_I32()[p >> 2] = GLctx.getProgramParameter(program, pname)
    }
}

function _glGetShaderInfoLog(shader, maxLength, length, infoLog) {
    var log = GLctx.getShaderInfoLog(GL.shaders[shader]);
    if (log === null) log = "(unknown error)";
    var numBytesWrittenExclNull = maxLength > 0 && infoLog ? stringToUTF8(log, infoLog, maxLength) : 0;
    if (length) GROWABLE_HEAP_I32()[length >> 2] = numBytesWrittenExclNull
}

function _glGetShaderiv(shader, pname, p) {
    if (!p) {
        GL.recordError(1281);
        return
    }
    if (pname == 35716) {
        var log = GLctx.getShaderInfoLog(GL.shaders[shader]);
        if (log === null) log = "(unknown error)";
        var logLength = log ? log.length + 1 : 0;
        GROWABLE_HEAP_I32()[p >> 2] = logLength
    } else if (pname == 35720) {
        var source = GLctx.getShaderSource(GL.shaders[shader]);
        var sourceLength = source ? source.length + 1 : 0;
        GROWABLE_HEAP_I32()[p >> 2] = sourceLength
    } else {
        GROWABLE_HEAP_I32()[p >> 2] = GLctx.getShaderParameter(GL.shaders[shader], pname)
    }
}

function _glGetString(name_) {
    var ret = GL.stringCache[name_];
    if (!ret) {
        switch (name_) {
            case 7939:
                var exts = GLctx.getSupportedExtensions() || [];
                exts = exts.concat(exts.map(function(e) {
                    return "GL_" + e
                }));
                ret = stringToNewUTF8(exts.join(" "));
                break;
            case 7936:
            case 7937:
            case 37445:
            case 37446:
                var s = GLctx.getParameter(name_);
                if (!s) {
                    GL.recordError(1280)
                }
                ret = s && stringToNewUTF8(s);
                break;
            case 7938:
                var glVersion = GLctx.getParameter(7938);
                if (true) glVersion = "OpenGL ES 3.0 (" + glVersion + ")";
                else {
                    glVersion = "OpenGL ES 2.0 (" + glVersion + ")"
                }
                ret = stringToNewUTF8(glVersion);
                break;
            case 35724:
                var glslVersion = GLctx.getParameter(35724);
                var ver_re = /^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/;
                var ver_num = glslVersion.match(ver_re);
                if (ver_num !== null) {
                    if (ver_num[1].length == 3) ver_num[1] = ver_num[1] + "0";
                    glslVersion = "OpenGL ES GLSL ES " + ver_num[1] + " (" + glslVersion + ")"
                }
                ret = stringToNewUTF8(glslVersion);
                break;
            default:
                GL.recordError(1280)
        }
        GL.stringCache[name_] = ret
    }
    return ret
}

function _glGetUniformLocation(program, name) {
    name = UTF8ToString(name);
    if (program = GL.programs[program]) {
        webglPrepareUniformLocationsBeforeFirstUse(program);
        var uniformLocsById = program.uniformLocsById;
        var arrayIndex = 0;
        var uniformBaseName = name;
        var leftBrace = webglGetLeftBracePos(name);
        if (leftBrace > 0) {
            arrayIndex = jstoi_q(name.slice(leftBrace + 1)) >>> 0;
            uniformBaseName = name.slice(0, leftBrace)
        }
        var sizeAndId = program.uniformSizeAndIdsByName[uniformBaseName];
        if (sizeAndId && arrayIndex < sizeAndId[0]) {
            arrayIndex += sizeAndId[1];
            if (uniformLocsById[arrayIndex] = uniformLocsById[arrayIndex] || GLctx.getUniformLocation(program, name)) {
                return arrayIndex
            }
        }
    } else {
        GL.recordError(1281)
    }
    return -1
}

function _glInvalidateFramebuffer(target, numAttachments, attachments) {
    var list = tempFixedLengthArray[numAttachments];
    for (var i = 0; i < numAttachments; i++) {
        list[i] = GROWABLE_HEAP_I32()[attachments + i * 4 >> 2]
    }
    GLctx["invalidateFramebuffer"](target, list)
}

function _glLinkProgram(program) {
    program = GL.programs[program];
    GLctx.linkProgram(program);
    program.uniformLocsById = 0;
    program.uniformSizeAndIdsByName = {}
}

function _glMapBufferRange(target, offset, length, access) {
    if (access != 26 && access != 10) {
        err("glMapBufferRange is only supported when access is MAP_WRITE|INVALIDATE_BUFFER");
        return 0
    }
    if (!emscriptenWebGLValidateMapBufferTarget(target)) {
        GL.recordError(1280);
        err("GL_INVALID_ENUM in glMapBufferRange");
        return 0
    }
    var mem = _malloc(length);
    if (!mem) return 0;
    GL.mappedBuffers[emscriptenWebGLGetBufferBinding(target)] = {
        offset: offset,
        length: length,
        mem: mem,
        access: access
    };
    return mem
}

function _glPixelStorei(pname, param) {
    if (pname == 3317) {
        GL.unpackAlignment = param
    }
    GLctx.pixelStorei(pname, param)
}

function _glPolygonOffset(x0, x1) {
    GLctx["polygonOffset"](x0, x1)
}

function _glReadPixels(x, y, width, height, format, type, pixels) {
    if (true) {
        if (GLctx.currentPixelPackBufferBinding) {
            GLctx.readPixels(x, y, width, height, format, type, pixels)
        } else {
            var heap = heapObjectForWebGLType(type);
            GLctx.readPixels(x, y, width, height, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap))
        }
        return
    }
    var pixelData = emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, format);
    if (!pixelData) {
        GL.recordError(1280);
        return
    }
    GLctx.readPixels(x, y, width, height, format, type, pixelData)
}

function _glRenderbufferStorage(x0, x1, x2, x3) {
    GLctx["renderbufferStorage"](x0, x1, x2, x3)
}

function _glRenderbufferStorageMultisample(x0, x1, x2, x3, x4) {
    GLctx["renderbufferStorageMultisample"](x0, x1, x2, x3, x4)
}

function _glShaderSource(shader, count, string, length) {
    var source = GL.getSource(shader, count, string, length);
    if (true) {
        if (source.includes("#version 100")) {
            source = source.replace(/#extension GL_OES_standard_derivatives : enable/g, "");
            source = source.replace(/#extension GL_EXT_shader_texture_lod : enable/g, "");
            var prelude = "";
            if (source.includes("gl_FragColor")) {
                prelude += "out mediump vec4 GL_FragColor;\n";
                source = source.replace(/gl_FragColor/g, "GL_FragColor")
            }
            if (source.includes("attribute")) {
                source = source.replace(/attribute/g, "in");
                source = source.replace(/varying/g, "out")
            } else {
                source = source.replace(/varying/g, "in")
            }
            source = source.replace(/textureCubeLodEXT/g, "textureCubeLod");
            source = source.replace(/texture2DLodEXT/g, "texture2DLod");
            source = source.replace(/texture2DProjLodEXT/g, "texture2DProjLod");
            source = source.replace(/texture2DGradEXT/g, "texture2DGrad");
            source = source.replace(/texture2DProjGradEXT/g, "texture2DProjGrad");
            source = source.replace(/textureCubeGradEXT/g, "textureCubeGrad");
            source = source.replace(/textureCube/g, "texture");
            source = source.replace(/texture1D/g, "texture");
            source = source.replace(/texture2D/g, "texture");
            source = source.replace(/texture3D/g, "texture");
            source = source.replace(/#version 100/g, "#version 300 es\n" + prelude)
        }
    }
    GLctx.shaderSource(GL.shaders[shader], source)
}

function _glStencilFunc(x0, x1, x2) {
    GLctx["stencilFunc"](x0, x1, x2)
}

function _glStencilMask(x0) {
    GLctx["stencilMask"](x0)
}

function _glStencilOp(x0, x1, x2) {
    GLctx["stencilOp"](x0, x1, x2)
}

function _glStencilOpSeparate(x0, x1, x2, x3) {
    GLctx["stencilOpSeparate"](x0, x1, x2, x3)
}

function _glTexImage2D(target, level, internalFormat, width, height, border, format, type, pixels) {
    if (true) {
        if (format == 6402 && internalFormat == 6402 && type == 5125) {
            internalFormat = 33190
        }
        if (type == 36193) {
            type = 5131;
            if (format == 6408 && internalFormat == 6408) {
                internalFormat = 34842
            }
        }
        if (internalFormat == 34041) {
            internalFormat = 35056
        }
    }
    if (true) {
        if (GLctx.currentPixelUnpackBufferBinding) {
            GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, pixels)
        } else if (pixels) {
            var heap = heapObjectForWebGLType(type);
            GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap))
        } else {
            GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, null)
        }
        return
    }
    GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, pixels ? emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, internalFormat) : null)
}

function _glTexParameteri(x0, x1, x2) {
    GLctx["texParameteri"](x0, x1, x2)
}

function _glTexStorage2D(x0, x1, x2, x3, x4) {
    GLctx["texStorage2D"](x0, x1, x2, x3, x4)
}

function _glTexStorage3D(x0, x1, x2, x3, x4, x5) {
    GLctx["texStorage3D"](x0, x1, x2, x3, x4, x5)
}

function _glTexSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixels) {
    if (true) {
        if (type == 36193) type = 5131
    }
    if (true) {
        if (GLctx.currentPixelUnpackBufferBinding) {
            GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixels)
        } else if (pixels) {
            var heap = heapObjectForWebGLType(type);
            GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap))
        } else {
            GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, null)
        }
        return
    }
    var pixelData = null;
    if (pixels) pixelData = emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, 0);
    GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixelData)
}

function _glTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, pixels) {
    if (GLctx.currentPixelUnpackBufferBinding) {
        GLctx["texSubImage3D"](target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, pixels)
    } else if (pixels) {
        var heap = heapObjectForWebGLType(type);
        GLctx["texSubImage3D"](target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap))
    } else {
        GLctx["texSubImage3D"](target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, null)
    }
}

function _glUniform1fv(location, count, value) {
    count && GLctx.uniform1fv(webglGetUniformLocation(location), GROWABLE_HEAP_F32(), value >> 2, count)
}

function _glUniform1i(location, v0) {
    GLctx.uniform1i(webglGetUniformLocation(location), v0)
}

function _glUniform2fv(location, count, value) {
    count && GLctx.uniform2fv(webglGetUniformLocation(location), GROWABLE_HEAP_F32(), value >> 2, count * 2)
}

function _glUniform3fv(location, count, value) {
    count && GLctx.uniform3fv(webglGetUniformLocation(location), GROWABLE_HEAP_F32(), value >> 2, count * 3)
}

function _glUniform4fv(location, count, value) {
    count && GLctx.uniform4fv(webglGetUniformLocation(location), GROWABLE_HEAP_F32(), value >> 2, count * 4)
}

function _glUniformMatrix4fv(location, count, transpose, value) {
    count && GLctx.uniformMatrix4fv(webglGetUniformLocation(location), !!transpose, GROWABLE_HEAP_F32(), value >> 2, count * 16)
}

function _glUnmapBuffer(target) {
    if (!emscriptenWebGLValidateMapBufferTarget(target)) {
        GL.recordError(1280);
        err("GL_INVALID_ENUM in glUnmapBuffer");
        return 0
    }
    var buffer = emscriptenWebGLGetBufferBinding(target);
    var mapping = GL.mappedBuffers[buffer];
    if (!mapping) {
        GL.recordError(1282);
        err("buffer was never mapped in glUnmapBuffer");
        return 0
    }
    GL.mappedBuffers[buffer] = null;
    if (!(mapping.access & 16))
        if (true) {
            GLctx.bufferSubData(target, mapping.offset, GROWABLE_HEAP_U8(), mapping.mem, mapping.length)
        } else {
            GLctx.bufferSubData(target, mapping.offset, GROWABLE_HEAP_U8().subarray(mapping.mem, mapping.mem + mapping.length))
        } _free(mapping.mem);
    return 1
}

function _glUseProgram(program) {
    program = GL.programs[program];
    GLctx.useProgram(program);
    GLctx.currentProgram = program
}

function _glVertexAttribPointer(index, size, type, normalized, stride, ptr) {
    var cb = GL.currentContext.clientBuffers[index];
    if (!GLctx.currentArrayBufferBinding) {
        cb.size = size;
        cb.type = type;
        cb.normalized = normalized;
        cb.stride = stride;
        cb.ptr = ptr;
        cb.clientside = true;
        cb.vertexAttribPointerAdaptor = function(index, size, type, normalized, stride, ptr) {
            this.vertexAttribPointer(index, size, type, normalized, stride, ptr)
        };
        return
    }
    cb.clientside = false;
    GLctx.vertexAttribPointer(index, size, type, !!normalized, stride, ptr)
}

function _glViewport(x0, x1, x2, x3) {
    GLctx["viewport"](x0, x1, x2, x3)
}

function _llvm_eh_typeid_for(type) {
    return type
}

function _setTempRet0(val) {
    setTempRet0(val)
}

function __isLeapYear(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
}

function __arraySum(array, index) {
    var sum = 0;
    for (var i = 0; i <= index; sum += array[i++]) {}
    return sum
}
var __MONTH_DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var __MONTH_DAYS_REGULAR = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function __addDays(date, days) {
    var newDate = new Date(date.getTime());
    while (days > 0) {
        var leap = __isLeapYear(newDate.getFullYear());
        var currentMonth = newDate.getMonth();
        var daysInCurrentMonth = (leap ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR)[currentMonth];
        if (days > daysInCurrentMonth - newDate.getDate()) {
            days -= daysInCurrentMonth - newDate.getDate() + 1;
            newDate.setDate(1);
            if (currentMonth < 11) {
                newDate.setMonth(currentMonth + 1)
            } else {
                newDate.setMonth(0);
                newDate.setFullYear(newDate.getFullYear() + 1)
            }
        } else {
            newDate.setDate(newDate.getDate() + days);
            return newDate
        }
    }
    return newDate
}

function _strftime(s, maxsize, format, tm) {
    var tm_zone = GROWABLE_HEAP_I32()[tm + 40 >> 2];
    var date = {
        tm_sec: GROWABLE_HEAP_I32()[tm >> 2],
        tm_min: GROWABLE_HEAP_I32()[tm + 4 >> 2],
        tm_hour: GROWABLE_HEAP_I32()[tm + 8 >> 2],
        tm_mday: GROWABLE_HEAP_I32()[tm + 12 >> 2],
        tm_mon: GROWABLE_HEAP_I32()[tm + 16 >> 2],
        tm_year: GROWABLE_HEAP_I32()[tm + 20 >> 2],
        tm_wday: GROWABLE_HEAP_I32()[tm + 24 >> 2],
        tm_yday: GROWABLE_HEAP_I32()[tm + 28 >> 2],
        tm_isdst: GROWABLE_HEAP_I32()[tm + 32 >> 2],
        tm_gmtoff: GROWABLE_HEAP_I32()[tm + 36 >> 2],
        tm_zone: tm_zone ? UTF8ToString(tm_zone) : ""
    };
    var pattern = UTF8ToString(format);
    var EXPANSION_RULES_1 = {
        "%c": "%a %b %d %H:%M:%S %Y",
        "%D": "%m/%d/%y",
        "%F": "%Y-%m-%d",
        "%h": "%b",
        "%r": "%I:%M:%S %p",
        "%R": "%H:%M",
        "%T": "%H:%M:%S",
        "%x": "%m/%d/%y",
        "%X": "%H:%M:%S",
        "%Ec": "%c",
        "%EC": "%C",
        "%Ex": "%m/%d/%y",
        "%EX": "%H:%M:%S",
        "%Ey": "%y",
        "%EY": "%Y",
        "%Od": "%d",
        "%Oe": "%e",
        "%OH": "%H",
        "%OI": "%I",
        "%Om": "%m",
        "%OM": "%M",
        "%OS": "%S",
        "%Ou": "%u",
        "%OU": "%U",
        "%OV": "%V",
        "%Ow": "%w",
        "%OW": "%W",
        "%Oy": "%y"
    };
    for (var rule in EXPANSION_RULES_1) {
        pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_1[rule])
    }
    var WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    function leadingSomething(value, digits, character) {
        var str = typeof value == "number" ? value.toString() : value || "";
        while (str.length < digits) {
            str = character[0] + str
        }
        return str
    }

    function leadingNulls(value, digits) {
        return leadingSomething(value, digits, "0")
    }

    function compareByDay(date1, date2) {
        function sgn(value) {
            return value < 0 ? -1 : value > 0 ? 1 : 0
        }
        var compare;
        if ((compare = sgn(date1.getFullYear() - date2.getFullYear())) === 0) {
            if ((compare = sgn(date1.getMonth() - date2.getMonth())) === 0) {
                compare = sgn(date1.getDate() - date2.getDate())
            }
        }
        return compare
    }

    function getFirstWeekStartDate(janFourth) {
        switch (janFourth.getDay()) {
            case 0:
                return new Date(janFourth.getFullYear() - 1, 11, 29);
            case 1:
                return janFourth;
            case 2:
                return new Date(janFourth.getFullYear(), 0, 3);
            case 3:
                return new Date(janFourth.getFullYear(), 0, 2);
            case 4:
                return new Date(janFourth.getFullYear(), 0, 1);
            case 5:
                return new Date(janFourth.getFullYear() - 1, 11, 31);
            case 6:
                return new Date(janFourth.getFullYear() - 1, 11, 30)
        }
    }

    function getWeekBasedYear(date) {
        var thisDate = __addDays(new Date(date.tm_year + 1900, 0, 1), date.tm_yday);
        var janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4);
        var janFourthNextYear = new Date(thisDate.getFullYear() + 1, 0, 4);
        var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
        var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
        if (compareByDay(firstWeekStartThisYear, thisDate) <= 0) {
            if (compareByDay(firstWeekStartNextYear, thisDate) <= 0) {
                return thisDate.getFullYear() + 1
            }
            return thisDate.getFullYear()
        }
        return thisDate.getFullYear() - 1
    }
    var EXPANSION_RULES_2 = {
        "%a": function(date) {
            return WEEKDAYS[date.tm_wday].substring(0, 3)
        },
        "%A": function(date) {
            return WEEKDAYS[date.tm_wday]
        },
        "%b": function(date) {
            return MONTHS[date.tm_mon].substring(0, 3)
        },
        "%B": function(date) {
            return MONTHS[date.tm_mon]
        },
        "%C": function(date) {
            var year = date.tm_year + 1900;
            return leadingNulls(year / 100 | 0, 2)
        },
        "%d": function(date) {
            return leadingNulls(date.tm_mday, 2)
        },
        "%e": function(date) {
            return leadingSomething(date.tm_mday, 2, " ")
        },
        "%g": function(date) {
            return getWeekBasedYear(date).toString().substring(2)
        },
        "%G": function(date) {
            return getWeekBasedYear(date)
        },
        "%H": function(date) {
            return leadingNulls(date.tm_hour, 2)
        },
        "%I": function(date) {
            var twelveHour = date.tm_hour;
            if (twelveHour == 0) twelveHour = 12;
            else if (twelveHour > 12) twelveHour -= 12;
            return leadingNulls(twelveHour, 2)
        },
        "%j": function(date) {
            return leadingNulls(date.tm_mday + __arraySum(__isLeapYear(date.tm_year + 1900) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, date.tm_mon - 1), 3)
        },
        "%m": function(date) {
            return leadingNulls(date.tm_mon + 1, 2)
        },
        "%M": function(date) {
            return leadingNulls(date.tm_min, 2)
        },
        "%n": function() {
            return "\n"
        },
        "%p": function(date) {
            if (date.tm_hour >= 0 && date.tm_hour < 12) {
                return "AM"
            }
            return "PM"
        },
        "%S": function(date) {
            return leadingNulls(date.tm_sec, 2)
        },
        "%t": function() {
            return "\t"
        },
        "%u": function(date) {
            return date.tm_wday || 7
        },
        "%U": function(date) {
            var days = date.tm_yday + 7 - date.tm_wday;
            return leadingNulls(Math.floor(days / 7), 2)
        },
        "%V": function(date) {
            var val = Math.floor((date.tm_yday + 7 - (date.tm_wday + 6) % 7) / 7);
            if ((date.tm_wday + 371 - date.tm_yday - 2) % 7 <= 2) {
                val++
            }
            if (!val) {
                val = 52;
                var dec31 = (date.tm_wday + 7 - date.tm_yday - 1) % 7;
                if (dec31 == 4 || dec31 == 5 && __isLeapYear(date.tm_year % 400 - 1)) {
                    val++
                }
            } else if (val == 53) {
                var jan1 = (date.tm_wday + 371 - date.tm_yday) % 7;
                if (jan1 != 4 && (jan1 != 3 || !__isLeapYear(date.tm_year))) val = 1
            }
            return leadingNulls(val, 2)
        },
        "%w": function(date) {
            return date.tm_wday
        },
        "%W": function(date) {
            var days = date.tm_yday + 7 - (date.tm_wday + 6) % 7;
            return leadingNulls(Math.floor(days / 7), 2)
        },
        "%y": function(date) {
            return (date.tm_year + 1900).toString().substring(2)
        },
        "%Y": function(date) {
            return date.tm_year + 1900
        },
        "%z": function(date) {
            var off = date.tm_gmtoff;
            var ahead = off >= 0;
            off = Math.abs(off) / 60;
            off = off / 60 * 100 + off % 60;
            return (ahead ? "+" : "-") + String("0000" + off).slice(-4)
        },
        "%Z": function(date) {
            return date.tm_zone
        },
        "%%": function() {
            return "%"
        }
    };
    pattern = pattern.replace(/%%/g, "\0\0");
    for (var rule in EXPANSION_RULES_2) {
        if (pattern.includes(rule)) {
            pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_2[rule](date))
        }
    }
    pattern = pattern.replace(/\0\0/g, "%");
    var bytes = intArrayFromString(pattern, false);
    if (bytes.length > maxsize) {
        return 0
    }
    writeArrayToMemory(bytes, s);
    return bytes.length - 1
}

function _strftime_l(s, maxsize, format, tm) {
    return _strftime(s, maxsize, format, tm)
}

function allocateUTF8OnStack(str) {
    var size = lengthBytesUTF8(str) + 1;
    var ret = stackAlloc(size);
    stringToUTF8Array(str, GROWABLE_HEAP_I8(), ret, size);
    return ret
}

function getCFunc(ident) {
    var func = Module["_" + ident];
    return func
}

function ccall(ident, returnType, argTypes, args, opts) {
    var toC = {
        "string": str => {
            var ret = 0;
            if (str !== null && str !== undefined && str !== 0) {
                var len = (str.length << 2) + 1;
                ret = stackAlloc(len);
                stringToUTF8(str, ret, len)
            }
            return ret
        },
        "array": arr => {
            var ret = stackAlloc(arr.length);
            writeArrayToMemory(arr, ret);
            return ret
        }
    };

    function convertReturnValue(ret) {
        if (returnType === "string") {
            return UTF8ToString(ret)
        }
        if (returnType === "boolean") return Boolean(ret);
        return ret
    }
    var func = getCFunc(ident);
    var cArgs = [];
    var stack = 0;
    if (args) {
        for (var i = 0; i < args.length; i++) {
            var converter = toC[argTypes[i]];
            if (converter) {
                if (stack === 0) stack = stackSave();
                cArgs[i] = converter(args[i])
            } else {
                cArgs[i] = args[i]
            }
        }
    }
    var ret = func.apply(null, cArgs);

    function onDone(ret) {
        if (stack !== 0) stackRestore(stack);
        return convertReturnValue(ret)
    }
    ret = onDone(ret);
    return ret
}

function cwrap(ident, returnType, argTypes, opts) {
    argTypes = argTypes || [];
    var numericArgs = argTypes.every(type => type === "number");
    var numericRet = returnType !== "string";
    if (numericRet && numericArgs && !opts) {
        return getCFunc(ident)
    }
    return function() {
        return ccall(ident, returnType, argTypes, arguments, opts)
    }
}
PThread.init();
var FSNode = function(parent, name, mode, rdev) {
    if (!parent) {
        parent = this
    }
    this.parent = parent;
    this.mount = parent.mount;
    this.mounted = null;
    this.id = FS.nextInode++;
    this.name = name;
    this.mode = mode;
    this.node_ops = {};
    this.stream_ops = {};
    this.rdev = rdev
};
var readMode = 292 | 73;
var writeMode = 146;
Object.defineProperties(FSNode.prototype, {
    read: {
        get: function() {
            return (this.mode & readMode) === readMode
        },
        set: function(val) {
            val ? this.mode |= readMode : this.mode &= ~readMode
        }
    },
    write: {
        get: function() {
            return (this.mode & writeMode) === writeMode
        },
        set: function(val) {
            val ? this.mode |= writeMode : this.mode &= ~writeMode
        }
    },
    isFolder: {
        get: function() {
            return FS.isDir(this.mode)
        }
    },
    isDevice: {
        get: function() {
            return FS.isChrdev(this.mode)
        }
    }
});
FS.FSNode = FSNode;
FS.staticInit();
Module["FS_createPath"] = FS.createPath;
Module["FS_createDataFile"] = FS.createDataFile;
Module["FS_createPreloadedFile"] = FS.createPreloadedFile;
Module["FS_unlink"] = FS.unlink;
Module["FS_createLazyFile"] = FS.createLazyFile;
Module["FS_createDevice"] = FS.createDevice;
embind_init_charCodes();
BindingError = Module["BindingError"] = extendError(Error, "BindingError");
InternalError = Module["InternalError"] = extendError(Error, "InternalError");
init_emval();
Module["requestFullscreen"] = function Module_requestFullscreen(lockPointer, resizeCanvas) {
    Browser.requestFullscreen(lockPointer, resizeCanvas)
};
Module["requestAnimationFrame"] = function Module_requestAnimationFrame(func) {
    Browser.requestAnimationFrame(func)
};
Module["setCanvasSize"] = function Module_setCanvasSize(width, height, noUpdates) {
    Browser.setCanvasSize(width, height, noUpdates)
};
Module["pauseMainLoop"] = function Module_pauseMainLoop() {
    Browser.mainLoop.pause()
};
Module["resumeMainLoop"] = function Module_resumeMainLoop() {
    Browser.mainLoop.resume()
};
Module["getUserMedia"] = function Module_getUserMedia() {
    Browser.getUserMedia()
};
Module["createContext"] = function Module_createContext(canvas, useWebGL, setInModule, webGLContextAttributes) {
    return Browser.createContext(canvas, useWebGL, setInModule, webGLContextAttributes)
};
var preloadedImages = {};
var preloadedAudios = {};
var GLctx;
for (var i = 0; i < 32; ++i) tempFixedLengthArray.push(new Array(i));
if (!ENVIRONMENT_IS_PTHREAD) Fetch.staticInit();
var proxiedFunctionTable = [null, _proc_exit, exitOnMainThread, pthreadCreateProxied, ___syscall_fcntl64, ___syscall_getcwd, ___syscall_getdents64, ___syscall_ioctl, ___syscall_lstat64, ___syscall_mkdirat, ___syscall_newfstatat, ___syscall_openat, ___syscall_readlinkat, ___syscall_renameat, ___syscall_rmdir, ___syscall_stat64, ___syscall_unlinkat, _tzset_impl, _alBufferData, _alDeleteBuffers, _alDeleteSources, _alSourcei, _alGenBuffers, _alGenSources, _alGetBufferi, _alGetError, _alGetSourcef, _alGetSourcei, _alGetString, _alListener3f, _alListenerf, _alListenerfv, _alSource3f, _alSourcePlay, _alSourceQueueBuffers, _alSourceStop, _alSourcef, _alcCloseDevice, _alcCreateContext, _alcDestroyContext, _alcGetIntegerv, _alcMakeContextCurrent, _alcOpenDevice, _eglBindAPI, _eglChooseConfig, _eglCreateContext, _eglCreateWindowSurface, _eglDestroyContext, _eglDestroySurface, _eglGetConfigAttrib, _eglGetDisplay, _eglGetError, _eglInitialize, _eglMakeCurrent, _eglQueryString, _eglSwapBuffers, _eglSwapInterval, _eglTerminate, _eglWaitClient, _eglWaitNative, _emscripten_exit_fullscreen, _emscripten_get_canvas_element_size_main_thread, _emscripten_set_canvas_element_size_main_thread, _emscripten_exit_pointerlock, _emscripten_get_device_pixel_ratio, _emscripten_get_element_css_size, _emscripten_get_gamepad_status, _emscripten_get_num_gamepads, _emscripten_get_screen_size, _emscripten_request_fullscreen_strategy, _emscripten_request_pointerlock, _emscripten_sample_gamepad_data, _emscripten_set_beforeunload_callback_on_thread, _emscripten_set_blur_callback_on_thread, _emscripten_set_element_css_size, _emscripten_set_focus_callback_on_thread, _emscripten_set_fullscreenchange_callback_on_thread, _emscripten_set_gamepadconnected_callback_on_thread, _emscripten_set_gamepaddisconnected_callback_on_thread, _emscripten_set_keydown_callback_on_thread, _emscripten_set_keypress_callback_on_thread, _emscripten_set_keyup_callback_on_thread, _emscripten_set_mousedown_callback_on_thread, _emscripten_set_mouseenter_callback_on_thread, _emscripten_set_mouseleave_callback_on_thread, _emscripten_set_mousemove_callback_on_thread, _emscripten_set_mouseup_callback_on_thread, _emscripten_set_pointerlockchange_callback_on_thread, _emscripten_set_resize_callback_on_thread, _emscripten_set_touchcancel_callback_on_thread, _emscripten_set_touchend_callback_on_thread, _emscripten_set_touchmove_callback_on_thread, _emscripten_set_touchstart_callback_on_thread, _emscripten_set_visibilitychange_callback_on_thread, _emscripten_set_wheel_callback_on_thread, _emscripten_set_window_title, _emscripten_websocket_delete, _emscripten_websocket_is_supported, _emscripten_websocket_new, _emscripten_websocket_send_binary, _emscripten_websocket_set_onclose_callback_on_thread, _emscripten_websocket_set_onerror_callback_on_thread, _emscripten_websocket_set_onmessage_callback_on_thread, _emscripten_websocket_set_onopen_callback_on_thread, _environ_get, _environ_sizes_get, _fd_close, _fd_read, _fd_seek, _fd_write, _gethostbyname];
var asmLibraryArg = {
    "we": ___call_sighandler,
    "n": ___cxa_allocate_exception,
    "o": ___cxa_begin_catch,
    "L": ___cxa_call_unexpected,
    "ke": ___cxa_current_primary_exception,
    "Mb": ___cxa_decrement_exception_refcount,
    "A": ___cxa_end_catch,
    "d": ___cxa_find_matching_catch_2,
    "de": ___cxa_find_matching_catch_20,
    "e": ___cxa_find_matching_catch_3,
    "B": ___cxa_find_matching_catch_4,
    "y": ___cxa_find_matching_catch_5,
    "Qd": ___cxa_find_matching_catch_6,
    "p": ___cxa_free_exception,
    "ob": ___cxa_get_exception_ptr,
    "le": ___cxa_increment_exception_refcount,
    "$a": ___cxa_rethrow,
    "r": ___cxa_throw,
    "me": ___cxa_uncaught_exceptions,
    "Ee": ___emscripten_init_main_thread_js,
    "Nb": ___emscripten_thread_cleanup,
    "xe": ___pthread_create_js,
    "j": ___resumeException,
    "Qb": ___syscall_fcntl64,
    "He": ___syscall_getcwd,
    "ve": ___syscall_getdents64,
    "Ye": ___syscall_ioctl,
    "Je": ___syscall_lstat64,
    "Be": ___syscall_mkdirat,
    "Me": ___syscall_newfstatat,
    "Pb": ___syscall_openat,
    "ue": ___syscall_readlinkat,
    "re": ___syscall_renameat,
    "se": ___syscall_rmdir,
    "Ke": ___syscall_stat64,
    "te": ___syscall_unlinkat,
    "Ue": __dlinit,
    "Ve": __dlopen_js,
    "Id": __embind_register_bigint,
    "xk": __embind_register_bool,
    "vk": __embind_register_emval,
    "Wb": __embind_register_float,
    "ka": __embind_register_integer,
    "S": __embind_register_memory_view,
    "Xb": __embind_register_std_string,
    "gb": __embind_register_std_wstring,
    "yk": __embind_register_void,
    "Ia": __emscripten_date_now,
    "ze": __emscripten_default_pthread_stack_size,
    "Ta": __emscripten_fetch_free,
    "zk": __emscripten_fetch_get_response_headers,
    "Ak": __emscripten_fetch_get_response_headers_length,
    "Oe": __emscripten_get_now_is_monotonic,
    "Ae": __emscripten_notify_task_queue,
    "De": __emscripten_set_offscreencanvas_size,
    "je": __emscripten_throw_longjmp,
    "Pe": __gmtime_js,
    "Qe": __localtime_js,
    "Se": __mktime_js,
    "Te": __tzset_js,
    "F": _abort,
    "Aj": _alBufferData,
    "Bi": _alDeleteBuffers,
    "Wj": _alDeleteSources,
    "Lj": _alGenBuffers,
    "pj": _alGenSources,
    "eb": _alGetBufferi,
    "zc": _alGetError,
    "fk": _alGetSourcef,
    "Ub": _alGetSourcei,
    "Gk": _alGetString,
    "Sa": _alListener3f,
    "Fk": _alListenerf,
    "Sb": _alListenerfv,
    "Tb": _alSource3f,
    "Rb": _alSourcePlay,
    "Wi": _alSourceQueueBuffers,
    "wk": _alSourceStop,
    "Vb": _alSourcef,
    "fb": _alSourcei,
    "Hk": _alcCloseDevice,
    "xc": _alcCreateContext,
    "Nk": _alcDestroyContext,
    "rc": _alcGetIntegerv,
    "tc": _alcMakeContextCurrent,
    "Cc": _alcOpenDevice,
    "Mk": _eglBindAPI,
    "Yk": _eglChooseConfig,
    "Wk": _eglCreateContext,
    "Uk": _eglCreateWindowSurface,
    "Vk": _eglDestroyContext,
    "Tk": _eglDestroySurface,
    "Xk": _eglGetConfigAttrib,
    "sc": _eglGetDisplay,
    "Kk": _eglGetError,
    "_k": _eglInitialize,
    "Sk": _eglMakeCurrent,
    "Lk": _eglQueryString,
    "Rk": _eglSwapBuffers,
    "Qk": _eglSwapInterval,
    "Zk": _eglTerminate,
    "Ok": _eglWaitGL,
    "Pk": _eglWaitNative,
    "ma": _emscripten_asm_const_int,
    "T": _emscripten_asm_const_int_sync_on_main_thread,
    "Ob": _emscripten_check_blocking_allowed,
    "Ck": _emscripten_exit_fullscreen,
    "Ik": _emscripten_exit_pointerlock,
    "Ka": _emscripten_get_device_pixel_ratio,
    "ra": _emscripten_get_element_css_size,
    "$k": _emscripten_get_gamepad_status,
    "pe": _emscripten_get_heap_max,
    "fa": _emscripten_get_now,
    "al": _emscripten_get_num_gamepads,
    "Jk": _emscripten_get_screen_size,
    "ak": _emscripten_glActiveTexture,
    "$j": _emscripten_glAttachShader,
    "Vg": _emscripten_glBeginQuery,
    "rk": _emscripten_glBeginQueryEXT,
    "wg": _emscripten_glBeginTransformFeedback,
    "_j": _emscripten_glBindAttribLocation,
    "Zj": _emscripten_glBindBuffer,
    "sg": _emscripten_glBindBufferBase,
    "ug": _emscripten_glBindBufferRange,
    "Yj": _emscripten_glBindFramebuffer,
    "Xj": _emscripten_glBindRenderbuffer,
    "xf": _emscripten_glBindSampler,
    "Vj": _emscripten_glBindTexture,
    "pf": _emscripten_glBindTransformFeedback,
    "Bg": _emscripten_glBindVertexArray,
    "jk": _emscripten_glBindVertexArrayOES,
    "Uj": _emscripten_glBlendColor,
    "Tj": _emscripten_glBlendEquation,
    "Sj": _emscripten_glBlendEquationSeparate,
    "Rj": _emscripten_glBlendFunc,
    "Qj": _emscripten_glBlendFuncSeparate,
    "Hg": _emscripten_glBlitFramebuffer,
    "Pj": _emscripten_glBufferData,
    "Oj": _emscripten_glBufferSubData,
    "Nj": _emscripten_glCheckFramebufferStatus,
    "Mj": _emscripten_glClear,
    "Vf": _emscripten_glClearBufferfi,
    "Wf": _emscripten_glClearBufferfv,
    "Yf": _emscripten_glClearBufferiv,
    "Xf": _emscripten_glClearBufferuiv,
    "Kj": _emscripten_glClearColor,
    "Jj": _emscripten_glClearDepthf,
    "Ij": _emscripten_glClearStencil,
    "Gf": _emscripten_glClientWaitSync,
    "Hj": _emscripten_glColorMask,
    "Gj": _emscripten_glCompileShader,
    "Fj": _emscripten_glCompressedTexImage2D,
    "$g": _emscripten_glCompressedTexImage3D,
    "Ej": _emscripten_glCompressedTexSubImage2D,
    "Zg": _emscripten_glCompressedTexSubImage3D,
    "Tf": _emscripten_glCopyBufferSubData,
    "Dj": _emscripten_glCopyTexImage2D,
    "Cj": _emscripten_glCopyTexSubImage2D,
    "ah": _emscripten_glCopyTexSubImage3D,
    "Bj": _emscripten_glCreateProgram,
    "zj": _emscripten_glCreateShader,
    "yj": _emscripten_glCullFace,
    "xj": _emscripten_glDeleteBuffers,
    "wj": _emscripten_glDeleteFramebuffers,
    "vj": _emscripten_glDeleteProgram,
    "Xg": _emscripten_glDeleteQueries,
    "tk": _emscripten_glDeleteQueriesEXT,
    "uj": _emscripten_glDeleteRenderbuffers,
    "zf": _emscripten_glDeleteSamplers,
    "tj": _emscripten_glDeleteShader,
    "Hf": _emscripten_glDeleteSync,
    "sj": _emscripten_glDeleteTextures,
    "of": _emscripten_glDeleteTransformFeedbacks,
    "Ag": _emscripten_glDeleteVertexArrays,
    "ik": _emscripten_glDeleteVertexArraysOES,
    "rj": _emscripten_glDepthFunc,
    "qj": _emscripten_glDepthMask,
    "oj": _emscripten_glDepthRangef,
    "nj": _emscripten_glDetachShader,
    "mj": _emscripten_glDisable,
    "lj": _emscripten_glDisableVertexAttribArray,
    "kj": _emscripten_glDrawArrays,
    "Lf": _emscripten_glDrawArraysInstanced,
    "dk": _emscripten_glDrawArraysInstancedANGLE,
    "kh": _emscripten_glDrawArraysInstancedARB,
    "lh": _emscripten_glDrawArraysInstancedEXT,
    "_e": _emscripten_glDrawArraysInstancedNV,
    "Og": _emscripten_glDrawBuffers,
    "fh": _emscripten_glDrawBuffersEXT,
    "ek": _emscripten_glDrawBuffersWEBGL,
    "jj": _emscripten_glDrawElements,
    "Kf": _emscripten_glDrawElementsInstanced,
    "ck": _emscripten_glDrawElementsInstancedANGLE,
    "gh": _emscripten_glDrawElementsInstancedARB,
    "hh": _emscripten_glDrawElementsInstancedEXT,
    "ih": _emscripten_glDrawElementsInstancedNV,
    "dh": _emscripten_glDrawRangeElements,
    "ij": _emscripten_glEnable,
    "hj": _emscripten_glEnableVertexAttribArray,
    "Ug": _emscripten_glEndQuery,
    "qk": _emscripten_glEndQueryEXT,
    "vg": _emscripten_glEndTransformFeedback,
    "Jf": _emscripten_glFenceSync,
    "gj": _emscripten_glFinish,
    "fj": _emscripten_glFlush,
    "Cg": _emscripten_glFlushMappedBufferRange,
    "ej": _emscripten_glFramebufferRenderbuffer,
    "dj": _emscripten_glFramebufferTexture2D,
    "Fg": _emscripten_glFramebufferTextureLayer,
    "cj": _emscripten_glFrontFace,
    "bj": _emscripten_glGenBuffers,
    "$i": _emscripten_glGenFramebuffers,
    "Yg": _emscripten_glGenQueries,
    "uk": _emscripten_glGenQueriesEXT,
    "_i": _emscripten_glGenRenderbuffers,
    "Af": _emscripten_glGenSamplers,
    "Zi": _emscripten_glGenTextures,
    "nf": _emscripten_glGenTransformFeedbacks,
    "zg": _emscripten_glGenVertexArrays,
    "hk": _emscripten_glGenVertexArraysOES,
    "aj": _emscripten_glGenerateMipmap,
    "Yi": _emscripten_glGetActiveAttrib,
    "Xi": _emscripten_glGetActiveUniform,
    "Nf": _emscripten_glGetActiveUniformBlockName,
    "Pf": _emscripten_glGetActiveUniformBlockiv,
    "Rf": _emscripten_glGetActiveUniformsiv,
    "Vi": _emscripten_glGetAttachedShaders,
    "Ui": _emscripten_glGetAttribLocation,
    "Ti": _emscripten_glGetBooleanv,
    "Bf": _emscripten_glGetBufferParameteri64v,
    "Si": _emscripten_glGetBufferParameteriv,
    "Qg": _emscripten_glGetBufferPointerv,
    "Ri": _emscripten_glGetError,
    "Qi": _emscripten_glGetFloatv,
    "gg": _emscripten_glGetFragDataLocation,
    "Pi": _emscripten_glGetFramebufferAttachmentParameteriv,
    "Cf": _emscripten_glGetInteger64i_v,
    "Ef": _emscripten_glGetInteger64v,
    "xg": _emscripten_glGetIntegeri_v,
    "Oi": _emscripten_glGetIntegerv,
    "af": _emscripten_glGetInternalformativ,
    "hf": _emscripten_glGetProgramBinary,
    "Mi": _emscripten_glGetProgramInfoLog,
    "Ni": _emscripten_glGetProgramiv,
    "lk": _emscripten_glGetQueryObjecti64vEXT,
    "nk": _emscripten_glGetQueryObjectivEXT,
    "kk": _emscripten_glGetQueryObjectui64vEXT,
    "Sg": _emscripten_glGetQueryObjectuiv,
    "mk": _emscripten_glGetQueryObjectuivEXT,
    "Tg": _emscripten_glGetQueryiv,
    "ok": _emscripten_glGetQueryivEXT,
    "Li": _emscripten_glGetRenderbufferParameteriv,
    "rf": _emscripten_glGetSamplerParameterfv,
    "sf": _emscripten_glGetSamplerParameteriv,
    "Ji": _emscripten_glGetShaderInfoLog,
    "Ii": _emscripten_glGetShaderPrecisionFormat,
    "Hi": _emscripten_glGetShaderSource,
    "Ki": _emscripten_glGetShaderiv,
    "Gi": _emscripten_glGetString,
    "Uf": _emscripten_glGetStringi,
    "Df": _emscripten_glGetSynciv,
    "Fi": _emscripten_glGetTexParameterfv,
    "Ei": _emscripten_glGetTexParameteriv,
    "qg": _emscripten_glGetTransformFeedbackVarying,
    "Qf": _emscripten_glGetUniformBlockIndex,
    "Sf": _emscripten_glGetUniformIndices,
    "Ai": _emscripten_glGetUniformLocation,
    "Di": _emscripten_glGetUniformfv,
    "Ci": _emscripten_glGetUniformiv,
    "hg": _emscripten_glGetUniformuiv,
    "og": _emscripten_glGetVertexAttribIiv,
    "ng": _emscripten_glGetVertexAttribIuiv,
    "xi": _emscripten_glGetVertexAttribPointerv,
    "zi": _emscripten_glGetVertexAttribfv,
    "yi": _emscripten_glGetVertexAttribiv,
    "wi": _emscripten_glHint,
    "ef": _emscripten_glInvalidateFramebuffer,
    "df": _emscripten_glInvalidateSubFramebuffer,
    "vi": _emscripten_glIsBuffer,
    "ui": _emscripten_glIsEnabled,
    "ti": _emscripten_glIsFramebuffer,
    "si": _emscripten_glIsProgram,
    "Wg": _emscripten_glIsQuery,
    "sk": _emscripten_glIsQueryEXT,
    "ri": _emscripten_glIsRenderbuffer,
    "yf": _emscripten_glIsSampler,
    "qi": _emscripten_glIsShader,
    "If": _emscripten_glIsSync,
    "pi": _emscripten_glIsTexture,
    "mf": _emscripten_glIsTransformFeedback,
    "yg": _emscripten_glIsVertexArray,
    "gk": _emscripten_glIsVertexArrayOES,
    "oi": _emscripten_glLineWidth,
    "ni": _emscripten_glLinkProgram,
    "Dg": _emscripten_glMapBufferRange,
    "lf": _emscripten_glPauseTransformFeedback,
    "mi": _emscripten_glPixelStorei,
    "li": _emscripten_glPolygonOffset,
    "gf": _emscripten_glProgramBinary,
    "ff": _emscripten_glProgramParameteri,
    "pk": _emscripten_glQueryCounterEXT,
    "eh": _emscripten_glReadBuffer,
    "ki": _emscripten_glReadPixels,
    "ji": _emscripten_glReleaseShaderCompiler,
    "ii": _emscripten_glRenderbufferStorage,
    "Gg": _emscripten_glRenderbufferStorageMultisample,
    "kf": _emscripten_glResumeTransformFeedback,
    "hi": _emscripten_glSampleCoverage,
    "uf": _emscripten_glSamplerParameterf,
    "tf": _emscripten_glSamplerParameterfv,
    "wf": _emscripten_glSamplerParameteri,
    "vf": _emscripten_glSamplerParameteriv,
    "gi": _emscripten_glScissor,
    "fi": _emscripten_glShaderBinary,
    "ei": _emscripten_glShaderSource,
    "di": _emscripten_glStencilFunc,
    "ci": _emscripten_glStencilFuncSeparate,
    "bi": _emscripten_glStencilMask,
    "ai": _emscripten_glStencilMaskSeparate,
    "$h": _emscripten_glStencilOp,
    "_h": _emscripten_glStencilOpSeparate,
    "Zh": _emscripten_glTexImage2D,
    "ch": _emscripten_glTexImage3D,
    "Yh": _emscripten_glTexParameterf,
    "Xh": _emscripten_glTexParameterfv,
    "Wh": _emscripten_glTexParameteri,
    "Vh": _emscripten_glTexParameteriv,
    "cf": _emscripten_glTexStorage2D,
    "bf": _emscripten_glTexStorage3D,
    "Uh": _emscripten_glTexSubImage2D,
    "bh": _emscripten_glTexSubImage3D,
    "rg": _emscripten_glTransformFeedbackVaryings,
    "Th": _emscripten_glUniform1f,
    "Sh": _emscripten_glUniform1fv,
    "Rh": _emscripten_glUniform1i,
    "Qh": _emscripten_glUniform1iv,
    "fg": _emscripten_glUniform1ui,
    "bg": _emscripten_glUniform1uiv,
    "Ph": _emscripten_glUniform2f,
    "Oh": _emscripten_glUniform2fv,
    "Nh": _emscripten_glUniform2i,
    "Mh": _emscripten_glUniform2iv,
    "eg": _emscripten_glUniform2ui,
    "ag": _emscripten_glUniform2uiv,
    "Lh": _emscripten_glUniform3f,
    "Kh": _emscripten_glUniform3fv,
    "Jh": _emscripten_glUniform3i,
    "Ih": _emscripten_glUniform3iv,
    "dg": _emscripten_glUniform3ui,
    "$f": _emscripten_glUniform3uiv,
    "Hh": _emscripten_glUniform4f,
    "Gh": _emscripten_glUniform4fv,
    "Fh": _emscripten_glUniform4i,
    "Eh": _emscripten_glUniform4iv,
    "cg": _emscripten_glUniform4ui,
    "_f": _emscripten_glUniform4uiv,
    "Mf": _emscripten_glUniformBlockBinding,
    "Dh": _emscripten_glUniformMatrix2fv,
    "Ng": _emscripten_glUniformMatrix2x3fv,
    "Lg": _emscripten_glUniformMatrix2x4fv,
    "Ch": _emscripten_glUniformMatrix3fv,
    "Mg": _emscripten_glUniformMatrix3x2fv,
    "Jg": _emscripten_glUniformMatrix3x4fv,
    "Bh": _emscripten_glUniformMatrix4fv,
    "Kg": _emscripten_glUniformMatrix4x2fv,
    "Ig": _emscripten_glUniformMatrix4x3fv,
    "Rg": _emscripten_glUnmapBuffer,
    "Ah": _emscripten_glUseProgram,
    "zh": _emscripten_glValidateProgram,
    "yh": _emscripten_glVertexAttrib1f,
    "xh": _emscripten_glVertexAttrib1fv,
    "wh": _emscripten_glVertexAttrib2f,
    "vh": _emscripten_glVertexAttrib2fv,
    "th": _emscripten_glVertexAttrib3f,
    "sh": _emscripten_glVertexAttrib3fv,
    "rh": _emscripten_glVertexAttrib4f,
    "qh": _emscripten_glVertexAttrib4fv,
    "qf": _emscripten_glVertexAttribDivisor,
    "bk": _emscripten_glVertexAttribDivisorANGLE,
    "mh": _emscripten_glVertexAttribDivisorARB,
    "nh": _emscripten_glVertexAttribDivisorEXT,
    "$e": _emscripten_glVertexAttribDivisorNV,
    "mg": _emscripten_glVertexAttribI4i,
    "kg": _emscripten_glVertexAttribI4iv,
    "lg": _emscripten_glVertexAttribI4ui,
    "jg": _emscripten_glVertexAttribI4uiv,
    "pg": _emscripten_glVertexAttribIPointer,
    "ph": _emscripten_glVertexAttribPointer,
    "oh": _emscripten_glViewport,
    "Ff": _emscripten_glWaitSync,
    "jb": _emscripten_has_asyncify,
    "Le": _emscripten_memcpy_big,
    "qe": _emscripten_num_logical_cores,
    "Ce": _emscripten_receive_on_main_thread_js,
    "Dk": _emscripten_request_fullscreen_strategy,
    "qc": _emscripten_request_pointerlock,
    "ne": _emscripten_resize_heap,
    "uc": _emscripten_run_script_int,
    "vc": _emscripten_run_script_string,
    "bl": _emscripten_sample_gamepad_data,
    "Yb": _emscripten_set_beforeunload_callback_on_thread,
    "ic": _emscripten_set_blur_callback_on_thread,
    "Ja": _emscripten_set_canvas_element_size,
    "hb": _emscripten_set_element_css_size,
    "jc": _emscripten_set_focus_callback_on_thread,
    "$b": _emscripten_set_fullscreenchange_callback_on_thread,
    "Va": _emscripten_set_gamepadconnected_callback_on_thread,
    "Ua": _emscripten_set_gamepaddisconnected_callback_on_thread,
    "cc": _emscripten_set_keydown_callback_on_thread,
    "ac": _emscripten_set_keypress_callback_on_thread,
    "bc": _emscripten_set_keyup_callback_on_thread,
    "cl": _emscripten_set_main_loop,
    "oc": _emscripten_set_mousedown_callback_on_thread,
    "mc": _emscripten_set_mouseenter_callback_on_thread,
    "lc": _emscripten_set_mouseleave_callback_on_thread,
    "pc": _emscripten_set_mousemove_callback_on_thread,
    "nc": _emscripten_set_mouseup_callback_on_thread,
    "dc": _emscripten_set_pointerlockchange_callback_on_thread,
    "_b": _emscripten_set_resize_callback_on_thread,
    "ec": _emscripten_set_touchcancel_callback_on_thread,
    "gc": _emscripten_set_touchend_callback_on_thread,
    "fc": _emscripten_set_touchmove_callback_on_thread,
    "hc": _emscripten_set_touchstart_callback_on_thread,
    "Zb": _emscripten_set_visibilitychange_callback_on_thread,
    "kc": _emscripten_set_wheel_callback_on_thread,
    "Ek": _emscripten_set_window_title,
    "ib": _emscripten_sleep,
    "Bk": _emscripten_start_fetch,
    "Ne": _emscripten_unwind_to_js_event_loop,
    "jh": _emscripten_websocket_delete,
    "Pg": _emscripten_websocket_is_supported,
    "Eg": _emscripten_websocket_new,
    "_g": _emscripten_websocket_send_binary,
    "Zf": _emscripten_websocket_set_onclose_callback_on_thread,
    "ig": _emscripten_websocket_set_onerror_callback_on_thread,
    "Of": _emscripten_websocket_set_onmessage_callback_on_thread,
    "tg": _emscripten_websocket_set_onopen_callback_on_thread,
    "Fe": _environ_get,
    "Ge": _environ_sizes_get,
    "ya": _exit,
    "Ra": _fd_close,
    "Xe": _fd_read,
    "Hd": _fd_seek,
    "We": _fd_write,
    "b": _getTempRet0,
    "uh": _gethostbyname,
    "Ga": _glActiveTexture,
    "xl": _glAttachShader,
    "pl": _glBindAttribLocation,
    "Z": _glBindBuffer,
    "$": _glBindFramebuffer,
    "Xc": _glBindRenderbuffer,
    "la": _glBindTexture,
    "Wa": _glBindVertexArray,
    "Kd": _glBlendFunc,
    "zd": _glBlendFuncSeparate,
    "Lb": _glBlitFramebuffer,
    "qb": _glBufferData,
    "mb": _glBufferSubData,
    "Qc": _glCheckFramebufferStatus,
    "oe": _glClear,
    "Ze": _glClearColor,
    "Re": _glClearDepthf,
    "ye": _glClearStencil,
    "Jd": _glClientWaitSync,
    "Pd": _glColorMask,
    "rl": _glCompileShader,
    "yc": _glCompressedTexImage2D,
    "el": _glCompressedTexSubImage2D,
    "he": _glCopyTexSubImage2D,
    "yl": _glCreateProgram,
    "tl": _glCreateShader,
    "Yd": _glCullFace,
    "Nc": _glDeleteBuffers,
    "Pc": _glDeleteFramebuffers,
    "ul": _glDeleteProgram,
    "Uc": _glDeleteRenderbuffers,
    "zl": _glDeleteShader,
    "_c": _glDeleteSync,
    "ll": _glDeleteTextures,
    "Kc": _glDeleteVertexArrays,
    "od": _glDepthFunc,
    "dd": _glDepthMask,
    "Da": _glDisable,
    "V": _glDisableVertexAttribArray,
    "Ic": _glDrawArrays,
    "Jc": _glDrawElements,
    "ua": _glEnable,
    "Hc": _glEnableVertexAttribArray,
    "Zc": _glFenceSync,
    "Rc": _glFramebufferRenderbuffer,
    "Sc": _glFramebufferTexture2D,
    "Mc": _glGenBuffers,
    "Tc": _glGenFramebuffers,
    "Yc": _glGenRenderbuffers,
    "jl": _glGenTextures,
    "Lc": _glGenVertexArrays,
    "kl": _glGenerateMipmap,
    "ml": _glGetActiveUniform,
    "pb": _glGetError,
    "Ha": _glGetIntegerv,
    "vl": _glGetProgramInfoLog,
    "Ac": _glGetProgramiv,
    "ql": _glGetShaderInfoLog,
    "kb": _glGetShaderiv,
    "sb": _glGetString,
    "nl": _glGetUniformLocation,
    "fe": _glInvalidateFramebuffer,
    "wl": _glLinkProgram,
    "rb": _glMapBufferRange,
    "wc": _glPixelStorei,
    "Vd": _glPolygonOffset,
    "Oc": _glReadPixels,
    "Vc": _glRenderbufferStorage,
    "Wc": _glRenderbufferStorageMultisample,
    "sl": _glShaderSource,
    "ub": _glStencilFunc,
    "Ie": _glStencilMask,
    "ad": _glStencilOp,
    "tb": _glStencilOpSeparate,
    "gl": _glTexImage2D,
    "La": _glTexParameteri,
    "hl": _glTexStorage2D,
    "il": _glTexStorage3D,
    "dl": _glTexSubImage2D,
    "fl": _glTexSubImage3D,
    "Fc": _glUniform1fv,
    "ol": _glUniform1i,
    "Ec": _glUniform2fv,
    "Dc": _glUniform3fv,
    "lb": _glUniform4fv,
    "Bc": _glUniformMatrix4fv,
    "nb": _glUnmapBuffer,
    "db": _glUseProgram,
    "Gc": _glVertexAttribPointer,
    "jf": _glViewport,
    "na": invoke_d,
    "Y": invoke_di,
    "va": invoke_diffff,
    "N": invoke_dii,
    "ae": invoke_diid,
    "G": invoke_fi,
    "ce": invoke_fidd,
    "Qa": invoke_fii,
    "Zd": invoke_fiid,
    "Ld": invoke_fiii,
    "q": invoke_i,
    "i": invoke_ii,
    "ca": invoke_iid,
    "E": invoke_iif,
    "k": invoke_iii,
    "xa": invoke_iiif,
    "qa": invoke_iiiff,
    "ab": invoke_iiifii,
    "l": invoke_iiii,
    "Td": invoke_iiiid,
    "Oa": invoke_iiiif,
    "Za": invoke_iiiifi,
    "ga": invoke_iiiifiiii,
    "s": invoke_iiiii,
    "vb": invoke_iiiiid,
    "aa": invoke_iiiiif,
    "Na": invoke_iiiiifii,
    "z": invoke_iiiiii,
    "P": invoke_iiiiiid,
    "Xd": invoke_iiiiiifii,
    "C": invoke_iiiiiii,
    "Ud": invoke_iiiiiiifi,
    "H": invoke_iiiiiiii,
    "pa": invoke_iiiiiiiii,
    "Q": invoke_iiiiiiiiii,
    "ta": invoke_iiiiiiiiiiii,
    "fd": invoke_iiiiiiij,
    "Ad": invoke_iiiiiijiii,
    "gd": invoke_iiiiij,
    "Bd": invoke_iiiijii,
    "xd": invoke_iiij,
    "td": invoke_iij,
    "rd": invoke_iiji,
    "id": invoke_ij,
    "qd": invoke_j,
    "Dd": invoke_ji,
    "wd": invoke_jii,
    "hd": invoke_jiiii,
    "Fd": invoke_jj,
    "f": invoke_v,
    "c": invoke_vi,
    "ge": invoke_viV,
    "U": invoke_vid,
    "Ib": invoke_vidd,
    "yb": invoke_vidddd,
    "Od": invoke_vidi,
    "K": invoke_vidii,
    "I": invoke_vif,
    "cb": invoke_viff,
    "Hb": invoke_vifff,
    "Fb": invoke_viffff,
    "Pa": invoke_viffii,
    "Fa": invoke_vifi,
    "h": invoke_vii,
    "M": invoke_viid,
    "be": invoke_viidii,
    "R": invoke_viif,
    "Gb": invoke_viiff,
    "ha": invoke_viifff,
    "sa": invoke_viiffffii,
    "Ba": invoke_viiffi,
    "Aa": invoke_viiffii,
    "Cb": invoke_viiffiii,
    "Sd": invoke_viifi,
    "_": invoke_viifii,
    "ia": invoke_viifiii,
    "wa": invoke_viifiiii,
    "g": invoke_viii,
    "X": invoke_viiid,
    "$d": invoke_viiidi,
    "O": invoke_viiif,
    "Ca": invoke_viiiff,
    "Db": invoke_viiiffi,
    "zb": invoke_viiiffii,
    "ba": invoke_viiifi,
    "ie": invoke_viiififf,
    "Ea": invoke_viiifii,
    "Bb": invoke_viiifiii,
    "m": invoke_viiii,
    "_a": invoke_viiiidi,
    "oa": invoke_viiiif,
    "wb": invoke_viiiiffi,
    "ee": invoke_viiiifi,
    "Wd": invoke_viiiifii,
    "xb": invoke_viiiifiifiiifffii,
    "t": invoke_viiiii,
    "Rd": invoke_viiiiid,
    "_d": invoke_viiiiidd,
    "Xa": invoke_viiiiidfi,
    "Ya": invoke_viiiiifi,
    "Nd": invoke_viiiiifiiiiiiii,
    "ea": invoke_viiiiifiiiiiiiii,
    "x": invoke_viiiiii,
    "Ab": invoke_viiiiiid,
    "Md": invoke_viiiiiif,
    "Eb": invoke_viiiiiifffii,
    "u": invoke_viiiiiii,
    "D": invoke_viiiiiiii,
    "Kb": invoke_viiiiiiiif,
    "J": invoke_viiiiiiiii,
    "ja": invoke_viiiiiiiiifii,
    "da": invoke_viiiiiiiiii,
    "za": invoke_viiiiiiiiiii,
    "Jb": invoke_viiiiiiiiiiii,
    "bb": invoke_viiiiiiiiiiiii,
    "Ma": invoke_viiiiiiiiiiiiiii,
    "pd": invoke_viiiiijii,
    "Ed": invoke_viiiij,
    "nd": invoke_viiiijii,
    "yd": invoke_viiij,
    "bd": invoke_viij,
    "cd": invoke_viiji,
    "kd": invoke_viijii,
    "jd": invoke_viijiiii,
    "sd": invoke_viijj,
    "Cd": invoke_vij,
    "ed": invoke_viji,
    "md": invoke_vijii,
    "ld": invoke_vijiiii,
    "ud": invoke_vji,
    "vd": invoke_vjii,
    "Gd": invoke_vjj,
    "w": _llvm_eh_typeid_for,
    "a": wasmMemory,
    "v": _setTempRet0,
    "$c": _strftime,
    "W": _strftime_l
};
var asm = createWasm();
var ___wasm_call_ctors = Module["___wasm_call_ctors"] = function() {
    return (___wasm_call_ctors = Module["___wasm_call_ctors"] = Module["asm"]["Al"]).apply(null, arguments)
};
var ___errno_location = Module["___errno_location"] = function() {
    return (___errno_location = Module["___errno_location"] = Module["asm"]["Bl"]).apply(null, arguments)
};
var _free = Module["_free"] = function() {
    return (_free = Module["_free"] = Module["asm"]["Cl"]).apply(null, arguments)
};
var _malloc = Module["_malloc"] = function() {
    return (_malloc = Module["_malloc"] = Module["asm"]["Dl"]).apply(null, arguments)
};
var _pthread_self = Module["_pthread_self"] = function() {
    return (_pthread_self = Module["_pthread_self"] = Module["asm"]["El"]).apply(null, arguments)
};
var _htons = Module["_htons"] = function() {
    return (_htons = Module["_htons"] = Module["asm"]["Fl"]).apply(null, arguments)
};
var _main = Module["_main"] = function() {
    return (_main = Module["_main"] = Module["asm"]["Gl"]).apply(null, arguments)
};
var _emscripten_builtin_free = Module["_emscripten_builtin_free"] = function() {
    return (_emscripten_builtin_free = Module["_emscripten_builtin_free"] = Module["asm"]["Hl"]).apply(null, arguments)
};
var __emscripten_tls_init = Module["__emscripten_tls_init"] = function() {
    return (__emscripten_tls_init = Module["__emscripten_tls_init"] = Module["asm"]["Il"]).apply(null, arguments)
};
var _emscripten_builtin_memalign = Module["_emscripten_builtin_memalign"] = function() {
    return (_emscripten_builtin_memalign = Module["_emscripten_builtin_memalign"] = Module["asm"]["Jl"]).apply(null, arguments)
};
var ___getTypeName = Module["___getTypeName"] = function() {
    return (___getTypeName = Module["___getTypeName"] = Module["asm"]["Kl"]).apply(null, arguments)
};
var ___embind_register_native_and_builtin_types = Module["___embind_register_native_and_builtin_types"] = function() {
    return (___embind_register_native_and_builtin_types = Module["___embind_register_native_and_builtin_types"] = Module["asm"]["Ll"]).apply(null, arguments)
};
var __emscripten_thread_init = Module["__emscripten_thread_init"] = function() {
    return (__emscripten_thread_init = Module["__emscripten_thread_init"] = Module["asm"]["Ml"]).apply(null, arguments)
};
var __emscripten_thread_crashed = Module["__emscripten_thread_crashed"] = function() {
    return (__emscripten_thread_crashed = Module["__emscripten_thread_crashed"] = Module["asm"]["Nl"]).apply(null, arguments)
};
var _emscripten_builtin_malloc = Module["_emscripten_builtin_malloc"] = function() {
    return (_emscripten_builtin_malloc = Module["_emscripten_builtin_malloc"] = Module["asm"]["Pl"]).apply(null, arguments)
};
var _emscripten_run_in_main_runtime_thread_js = Module["_emscripten_run_in_main_runtime_thread_js"] = function() {
    return (_emscripten_run_in_main_runtime_thread_js = Module["_emscripten_run_in_main_runtime_thread_js"] = Module["asm"]["Ql"]).apply(null, arguments)
};
var _emscripten_dispatch_to_thread_ = Module["_emscripten_dispatch_to_thread_"] = function() {
    return (_emscripten_dispatch_to_thread_ = Module["_emscripten_dispatch_to_thread_"] = Module["asm"]["Rl"]).apply(null, arguments)
};
var __emscripten_proxy_execute_task_queue = Module["__emscripten_proxy_execute_task_queue"] = function() {
    return (__emscripten_proxy_execute_task_queue = Module["__emscripten_proxy_execute_task_queue"] = Module["asm"]["Sl"]).apply(null, arguments)
};
var __emscripten_thread_free_data = Module["__emscripten_thread_free_data"] = function() {
    return (__emscripten_thread_free_data = Module["__emscripten_thread_free_data"] = Module["asm"]["Tl"]).apply(null, arguments)
};
var __emscripten_thread_exit = Module["__emscripten_thread_exit"] = function() {
    return (__emscripten_thread_exit = Module["__emscripten_thread_exit"] = Module["asm"]["Ul"]).apply(null, arguments)
};
var _setThrew = Module["_setThrew"] = function() {
    return (_setThrew = Module["_setThrew"] = Module["asm"]["Vl"]).apply(null, arguments)
};
var _emscripten_stack_set_limits = Module["_emscripten_stack_set_limits"] = function() {
    return (_emscripten_stack_set_limits = Module["_emscripten_stack_set_limits"] = Module["asm"]["Wl"]).apply(null, arguments)
};
var stackSave = Module["stackSave"] = function() {
    return (stackSave = Module["stackSave"] = Module["asm"]["Xl"]).apply(null, arguments)
};
var stackRestore = Module["stackRestore"] = function() {
    return (stackRestore = Module["stackRestore"] = Module["asm"]["Yl"]).apply(null, arguments)
};
var stackAlloc = Module["stackAlloc"] = function() {
    return (stackAlloc = Module["stackAlloc"] = Module["asm"]["Zl"]).apply(null, arguments)
};
var ___cxa_can_catch = Module["___cxa_can_catch"] = function() {
    return (___cxa_can_catch = Module["___cxa_can_catch"] = Module["asm"]["_l"]).apply(null, arguments)
};
var ___cxa_is_pointer_type = Module["___cxa_is_pointer_type"] = function() {
    return (___cxa_is_pointer_type = Module["___cxa_is_pointer_type"] = Module["asm"]["$l"]).apply(null, arguments)
};
var dynCall_vjj = Module["dynCall_vjj"] = function() {
    return (dynCall_vjj = Module["dynCall_vjj"] = Module["asm"]["am"]).apply(null, arguments)
};
var dynCall_jj = Module["dynCall_jj"] = function() {
    return (dynCall_jj = Module["dynCall_jj"] = Module["asm"]["bm"]).apply(null, arguments)
};
var dynCall_viiiij = Module["dynCall_viiiij"] = function() {
    return (dynCall_viiiij = Module["dynCall_viiiij"] = Module["asm"]["cm"]).apply(null, arguments)
};
var dynCall_ji = Module["dynCall_ji"] = function() {
    return (dynCall_ji = Module["dynCall_ji"] = Module["asm"]["dm"]).apply(null, arguments)
};
var dynCall_vij = Module["dynCall_vij"] = function() {
    return (dynCall_vij = Module["dynCall_vij"] = Module["asm"]["em"]).apply(null, arguments)
};
var dynCall_iiiijii = Module["dynCall_iiiijii"] = function() {
    return (dynCall_iiiijii = Module["dynCall_iiiijii"] = Module["asm"]["fm"]).apply(null, arguments)
};
var dynCall_iiiiiijiii = Module["dynCall_iiiiiijiii"] = function() {
    return (dynCall_iiiiiijiii = Module["dynCall_iiiiiijiii"] = Module["asm"]["gm"]).apply(null, arguments)
};
var dynCall_viiij = Module["dynCall_viiij"] = function() {
    return (dynCall_viiij = Module["dynCall_viiij"] = Module["asm"]["hm"]).apply(null, arguments)
};
var dynCall_iiij = Module["dynCall_iiij"] = function() {
    return (dynCall_iiij = Module["dynCall_iiij"] = Module["asm"]["im"]).apply(null, arguments)
};
var dynCall_jii = Module["dynCall_jii"] = function() {
    return (dynCall_jii = Module["dynCall_jii"] = Module["asm"]["jm"]).apply(null, arguments)
};
var dynCall_vji = Module["dynCall_vji"] = function() {
    return (dynCall_vji = Module["dynCall_vji"] = Module["asm"]["km"]).apply(null, arguments)
};
var dynCall_vjii = Module["dynCall_vjii"] = function() {
    return (dynCall_vjii = Module["dynCall_vjii"] = Module["asm"]["lm"]).apply(null, arguments)
};
var dynCall_iij = Module["dynCall_iij"] = function() {
    return (dynCall_iij = Module["dynCall_iij"] = Module["asm"]["mm"]).apply(null, arguments)
};
var dynCall_jiiii = Module["dynCall_jiiii"] = function() {
    return (dynCall_jiiii = Module["dynCall_jiiii"] = Module["asm"]["nm"]).apply(null, arguments)
};
var dynCall_viijj = Module["dynCall_viijj"] = function() {
    return (dynCall_viijj = Module["dynCall_viijj"] = Module["asm"]["om"]).apply(null, arguments)
};
var dynCall_iiji = Module["dynCall_iiji"] = function() {
    return (dynCall_iiji = Module["dynCall_iiji"] = Module["asm"]["pm"]).apply(null, arguments)
};
var dynCall_viiji = Module["dynCall_viiji"] = function() {
    return (dynCall_viiji = Module["dynCall_viiji"] = Module["asm"]["qm"]).apply(null, arguments)
};
var dynCall_j = Module["dynCall_j"] = function() {
    return (dynCall_j = Module["dynCall_j"] = Module["asm"]["rm"]).apply(null, arguments)
};
var dynCall_vijii = Module["dynCall_vijii"] = function() {
    return (dynCall_vijii = Module["dynCall_vijii"] = Module["asm"]["sm"]).apply(null, arguments)
};
var dynCall_viijii = Module["dynCall_viijii"] = function() {
    return (dynCall_viijii = Module["dynCall_viijii"] = Module["asm"]["tm"]).apply(null, arguments)
};
var dynCall_viiiiijii = Module["dynCall_viiiiijii"] = function() {
    return (dynCall_viiiiijii = Module["dynCall_viiiiijii"] = Module["asm"]["um"]).apply(null, arguments)
};
var dynCall_viijiiii = Module["dynCall_viijiiii"] = function() {
    return (dynCall_viijiiii = Module["dynCall_viijiiii"] = Module["asm"]["vm"]).apply(null, arguments)
};
var dynCall_viiiijii = Module["dynCall_viiiijii"] = function() {
    return (dynCall_viiiijii = Module["dynCall_viiiijii"] = Module["asm"]["wm"]).apply(null, arguments)
};
var dynCall_vijiiii = Module["dynCall_vijiiii"] = function() {
    return (dynCall_vijiiii = Module["dynCall_vijiiii"] = Module["asm"]["xm"]).apply(null, arguments)
};
var dynCall_ij = Module["dynCall_ij"] = function() {
    return (dynCall_ij = Module["dynCall_ij"] = Module["asm"]["ym"]).apply(null, arguments)
};
var dynCall_viij = Module["dynCall_viij"] = function() {
    return (dynCall_viij = Module["dynCall_viij"] = Module["asm"]["zm"]).apply(null, arguments)
};
var dynCall_iiiiij = Module["dynCall_iiiiij"] = function() {
    return (dynCall_iiiiij = Module["dynCall_iiiiij"] = Module["asm"]["Am"]).apply(null, arguments)
};
var dynCall_iiiiiiij = Module["dynCall_iiiiiiij"] = function() {
    return (dynCall_iiiiiiij = Module["dynCall_iiiiiiij"] = Module["asm"]["Bm"]).apply(null, arguments)
};
var dynCall_viji = Module["dynCall_viji"] = function() {
    return (dynCall_viji = Module["dynCall_viji"] = Module["asm"]["Cm"]).apply(null, arguments)
};
var dynCall_jiji = Module["dynCall_jiji"] = function() {
    return (dynCall_jiji = Module["dynCall_jiji"] = Module["asm"]["Dm"]).apply(null, arguments)
};
var dynCall_iiiiijj = Module["dynCall_iiiiijj"] = function() {
    return (dynCall_iiiiijj = Module["dynCall_iiiiijj"] = Module["asm"]["Em"]).apply(null, arguments)
};
var dynCall_iiiiiijj = Module["dynCall_iiiiiijj"] = function() {
    return (dynCall_iiiiiijj = Module["dynCall_iiiiiijj"] = Module["asm"]["Fm"]).apply(null, arguments)
};

function invoke_vii(index, a1, a2) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_iii(index, a1, a2) {
    var sp = stackSave();
    try {
        return getWasmTableEntry(index)(a1, a2)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viii(index, a1, a2, a3) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_iiii(index, a1, a2, a3) {
    var sp = stackSave();
    try {
        return getWasmTableEntry(index)(a1, a2, a3)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_v(index) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)()
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_vi(index, a1) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_ii(index, a1) {
    var sp = stackSave();
    try {
        return getWasmTableEntry(index)(a1)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_iiiii(index, a1, a2, a3, a4) {
    var sp = stackSave();
    try {
        return getWasmTableEntry(index)(a1, a2, a3, a4)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_iiiiiii(index, a1, a2, a3, a4, a5, a6) {
    var sp = stackSave();
    try {
        return getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viiiiiii(index, a1, a2, a3, a4, a5, a6, a7) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viiii(index, a1, a2, a3, a4) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viiiiii(index, a1, a2, a3, a4, a5, a6) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_iiiiii(index, a1, a2, a3, a4, a5) {
    var sp = stackSave();
    try {
        return getWasmTableEntry(index)(a1, a2, a3, a4, a5)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_vid(index, a1, a2) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_di(index, a1) {
    var sp = stackSave();
    try {
        return getWasmTableEntry(index)(a1)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viiid(index, a1, a2, a3, a4) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_i(index) {
    var sp = stackSave();
    try {
        return getWasmTableEntry(index)()
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_vifi(index, a1, a2, a3) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viiifii(index, a1, a2, a3, a4, a5, a6) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viiiiifiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viiiii(index, a1, a2, a3, a4, a5) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_vif(index, a1, a2) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viiififf(index, a1, a2, a3, a4, a5, a6, a7) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_iiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
    var sp = stackSave();
    try {
        return getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viiiiiiiiifii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viif(index, a1, a2, a3) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viiifi(index, a1, a2, a3, a4, a5) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_iiiff(index, a1, a2, a3, a4) {
    var sp = stackSave();
    try {
        return getWasmTableEntry(index)(a1, a2, a3, a4)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_iif(index, a1, a2) {
    var sp = stackSave();
    try {
        return getWasmTableEntry(index)(a1, a2)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_dii(index, a1, a2) {
    var sp = stackSave();
    try {
        return getWasmTableEntry(index)(a1, a2)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viV(index, a1, a2) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viff(index, a1, a2, a3) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_fii(index, a1, a2) {
    var sp = stackSave();
    try {
        return getWasmTableEntry(index)(a1, a2)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viifiii(index, a1, a2, a3, a4, a5, a6) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_iiiiiid(index, a1, a2, a3, a4, a5, a6) {
    var sp = stackSave();
    try {
        return getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viid(index, a1, a2, a3) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viifii(index, a1, a2, a3, a4, a5) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_iiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
    var sp = stackSave();
    try {
        return getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viiiiiiiif(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viiiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viiiif(index, a1, a2, a3, a4, a5) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_iiiiif(index, a1, a2, a3, a4, a5) {
    var sp = stackSave();
    try {
        return getWasmTableEntry(index)(a1, a2, a3, a4, a5)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viffii(index, a1, a2, a3, a4, a5) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_fi(index, a1) {
    var sp = stackSave();
    try {
        return getWasmTableEntry(index)(a1)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_iiiif(index, a1, a2, a3, a4) {
    var sp = stackSave();
    try {
        return getWasmTableEntry(index)(a1, a2, a3, a4)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_iiif(index, a1, a2, a3) {
    var sp = stackSave();
    try {
        return getWasmTableEntry(index)(a1, a2, a3)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viiiifi(index, a1, a2, a3, a4, a5, a6) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viifff(index, a1, a2, a3, a4, a5) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_iiiiiiii(index, a1, a2, a3, a4, a5, a6, a7) {
    var sp = stackSave();
    try {
        return getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_iiifii(index, a1, a2, a3, a4, a5) {
    var sp = stackSave();
    try {
        return getWasmTableEntry(index)(a1, a2, a3, a4, a5)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_iiiifiiii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
    var sp = stackSave();
    try {
        return getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viifiiii(index, a1, a2, a3, a4, a5, a6, a7) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viiif(index, a1, a2, a3, a4) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_diffff(index, a1, a2, a3, a4, a5) {
    var sp = stackSave();
    try {
        return getWasmTableEntry(index)(a1, a2, a3, a4, a5)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_fidd(index, a1, a2, a3) {
    var sp = stackSave();
    try {
        return getWasmTableEntry(index)(a1, a2, a3)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_vidd(index, a1, a2, a3) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_iid(index, a1, a2) {
    var sp = stackSave();
    try {
        return getWasmTableEntry(index)(a1, a2)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_vifff(index, a1, a2, a3, a4) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viiff(index, a1, a2, a3, a4) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viffff(index, a1, a2, a3, a4, a5) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viiiff(index, a1, a2, a3, a4, a5) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viidii(index, a1, a2, a3, a4, a5) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_iiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
    var sp = stackSave();
    try {
        return getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_d(index) {
    var sp = stackSave();
    try {
        return getWasmTableEntry(index)()
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viiiidi(index, a1, a2, a3, a4, a5, a6) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_diid(index, a1, a2, a3) {
    var sp = stackSave();
    try {
        return getWasmTableEntry(index)(a1, a2, a3)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viiidi(index, a1, a2, a3, a4, a5) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viiiiidd(index, a1, a2, a3, a4, a5, a6, a7) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_fiid(index, a1, a2, a3) {
    var sp = stackSave();
    try {
        return getWasmTableEntry(index)(a1, a2, a3)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viiiiiifffii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_iiiiifii(index, a1, a2, a3, a4, a5, a6, a7) {
    var sp = stackSave();
    try {
        return getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viiffi(index, a1, a2, a3, a4, a5) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viiiffi(index, a1, a2, a3, a4, a5, a6) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_iiiiiifii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
    var sp = stackSave();
    try {
        return getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viiiifii(index, a1, a2, a3, a4, a5, a6, a7) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viiffiii(index, a1, a2, a3, a4, a5, a6, a7) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viiifiii(index, a1, a2, a3, a4, a5, a6, a7) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_iiiifi(index, a1, a2, a3, a4, a5) {
    var sp = stackSave();
    try {
        return getWasmTableEntry(index)(a1, a2, a3, a4, a5)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viiiiiid(index, a1, a2, a3, a4, a5, a6, a7) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viiffii(index, a1, a2, a3, a4, a5, a6) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viiiffii(index, a1, a2, a3, a4, a5, a6, a7) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_iiiiiiifi(index, a1, a2, a3, a4, a5, a6, a7, a8) {
    var sp = stackSave();
    try {
        return getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_iiiid(index, a1, a2, a3, a4) {
    var sp = stackSave();
    try {
        return getWasmTableEntry(index)(a1, a2, a3, a4)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_vidii(index, a1, a2, a3, a4) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viiiiifi(index, a1, a2, a3, a4, a5, a6, a7) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viiiiidfi(index, a1, a2, a3, a4, a5, a6, a7, a8) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viifi(index, a1, a2, a3, a4) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viiiiid(index, a1, a2, a3, a4, a5, a6) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_vidddd(index, a1, a2, a3, a4, a5) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_vidi(index, a1, a2, a3) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viiiiifiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viiffffii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viiiiiif(index, a1, a2, a3, a4, a5, a6, a7) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viiiifiifiiifffii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_fiii(index, a1, a2, a3) {
    var sp = stackSave();
    try {
        return getWasmTableEntry(index)(a1, a2, a3)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viiiiffi(index, a1, a2, a3, a4, a5, a6, a7) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_iiiiid(index, a1, a2, a3, a4, a5) {
    var sp = stackSave();
    try {
        return getWasmTableEntry(index)(a1, a2, a3, a4, a5)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viiiiiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_vjj(index, a1, a2, a3, a4) {
    var sp = stackSave();
    try {
        dynCall_vjj(index, a1, a2, a3, a4)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_jj(index, a1, a2) {
    var sp = stackSave();
    try {
        return dynCall_jj(index, a1, a2)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viiiij(index, a1, a2, a3, a4, a5, a6) {
    var sp = stackSave();
    try {
        dynCall_viiiij(index, a1, a2, a3, a4, a5, a6)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_ji(index, a1) {
    var sp = stackSave();
    try {
        return dynCall_ji(index, a1)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_vij(index, a1, a2, a3) {
    var sp = stackSave();
    try {
        dynCall_vij(index, a1, a2, a3)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_iiiijii(index, a1, a2, a3, a4, a5, a6, a7) {
    var sp = stackSave();
    try {
        return dynCall_iiiijii(index, a1, a2, a3, a4, a5, a6, a7)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_iiiiiijiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
    var sp = stackSave();
    try {
        return dynCall_iiiiiijiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viiij(index, a1, a2, a3, a4, a5) {
    var sp = stackSave();
    try {
        dynCall_viiij(index, a1, a2, a3, a4, a5)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_iiij(index, a1, a2, a3, a4) {
    var sp = stackSave();
    try {
        return dynCall_iiij(index, a1, a2, a3, a4)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_jii(index, a1, a2) {
    var sp = stackSave();
    try {
        return dynCall_jii(index, a1, a2)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_vjii(index, a1, a2, a3, a4) {
    var sp = stackSave();
    try {
        dynCall_vjii(index, a1, a2, a3, a4)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_vji(index, a1, a2, a3) {
    var sp = stackSave();
    try {
        dynCall_vji(index, a1, a2, a3)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_iij(index, a1, a2, a3) {
    var sp = stackSave();
    try {
        return dynCall_iij(index, a1, a2, a3)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viijj(index, a1, a2, a3, a4, a5, a6) {
    var sp = stackSave();
    try {
        dynCall_viijj(index, a1, a2, a3, a4, a5, a6)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_iiji(index, a1, a2, a3, a4) {
    var sp = stackSave();
    try {
        return dynCall_iiji(index, a1, a2, a3, a4)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_j(index) {
    var sp = stackSave();
    try {
        return dynCall_j(index)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viiiiijii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
    var sp = stackSave();
    try {
        dynCall_viiiiijii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viiiijii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
    var sp = stackSave();
    try {
        dynCall_viiiijii(index, a1, a2, a3, a4, a5, a6, a7, a8)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_vijii(index, a1, a2, a3, a4, a5) {
    var sp = stackSave();
    try {
        dynCall_vijii(index, a1, a2, a3, a4, a5)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_vijiiii(index, a1, a2, a3, a4, a5, a6, a7) {
    var sp = stackSave();
    try {
        dynCall_vijiiii(index, a1, a2, a3, a4, a5, a6, a7)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viijii(index, a1, a2, a3, a4, a5, a6) {
    var sp = stackSave();
    try {
        dynCall_viijii(index, a1, a2, a3, a4, a5, a6)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viijiiii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
    var sp = stackSave();
    try {
        dynCall_viijiiii(index, a1, a2, a3, a4, a5, a6, a7, a8)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_ij(index, a1, a2) {
    var sp = stackSave();
    try {
        return dynCall_ij(index, a1, a2)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_jiiii(index, a1, a2, a3, a4) {
    var sp = stackSave();
    try {
        return dynCall_jiiii(index, a1, a2, a3, a4)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_iiiiij(index, a1, a2, a3, a4, a5, a6) {
    var sp = stackSave();
    try {
        return dynCall_iiiiij(index, a1, a2, a3, a4, a5, a6)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_iiiiiiij(index, a1, a2, a3, a4, a5, a6, a7, a8) {
    var sp = stackSave();
    try {
        return dynCall_iiiiiiij(index, a1, a2, a3, a4, a5, a6, a7, a8)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viji(index, a1, a2, a3, a4) {
    var sp = stackSave();
    try {
        dynCall_viji(index, a1, a2, a3, a4)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viiji(index, a1, a2, a3, a4, a5) {
    var sp = stackSave();
    try {
        dynCall_viiji(index, a1, a2, a3, a4, a5)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viij(index, a1, a2, a3, a4) {
    var sp = stackSave();
    try {
        dynCall_viij(index, a1, a2, a3, a4)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}
Module["addRunDependency"] = addRunDependency;
Module["removeRunDependency"] = removeRunDependency;
Module["FS_createPath"] = FS.createPath;
Module["FS_createDataFile"] = FS.createDataFile;
Module["FS_createPreloadedFile"] = FS.createPreloadedFile;
Module["FS_createLazyFile"] = FS.createLazyFile;
Module["FS_createDevice"] = FS.createDevice;
Module["FS_unlink"] = FS.unlink;
Module["keepRuntimeAlive"] = keepRuntimeAlive;
Module["wasmMemory"] = wasmMemory;
Module["cwrap"] = cwrap;
Module["setValue"] = setValue;
Module["getValue"] = getValue;
Module["stringToUTF16"] = stringToUTF16;
Module["ExitStatus"] = ExitStatus;
var calledRun;
dependenciesFulfilled = function runCaller() {
    if (!calledRun) run();
    if (!calledRun) dependenciesFulfilled = runCaller
};

function callMain(args) {
    var entryFunction = Module["_main"];
    args = args || [];
    args.unshift(thisProgram);
    var argc = args.length;
    var argv = stackAlloc((argc + 1) * 4);
    var argv_ptr = argv >> 2;
    args.forEach(arg => {
        GROWABLE_HEAP_I32()[argv_ptr++] = allocateUTF8OnStack(arg)
    });
    GROWABLE_HEAP_I32()[argv_ptr] = 0;
    try {
        var ret = entryFunction(argc, argv);
        exitJS(ret, true);
        return ret
    } catch (e) {
        return handleException(e)
    }
}

function run(args) {
    args = args || arguments_;
    if (runDependencies > 0) {
        return
    }
    if (ENVIRONMENT_IS_PTHREAD) {
        initRuntime();
        postMessage({
            "cmd": "loaded"
        });
        return
    }
    preRun();
    if (runDependencies > 0) {
        return
    }

    function doRun() {
        if (calledRun) return;
        calledRun = true;
        Module["calledRun"] = true;
        if (ABORT) return;
        initRuntime();
        preMain();
        if (Module["onRuntimeInitialized"]) Module["onRuntimeInitialized"]();
        if (shouldRunNow) callMain(args);
        postRun()
    }
    if (Module["setStatus"]) {
        Module["setStatus"]("Running...");
        setTimeout(function() {
            setTimeout(function() {
                Module["setStatus"]("")
            }, 1);
            doRun()
        }, 1)
    } else {
        doRun()
    }
}
if (Module["preInit"]) {
    if (typeof Module["preInit"] == "function") Module["preInit"] = [Module["preInit"]];
    while (Module["preInit"].length > 0) {
        Module["preInit"].pop()()
    }
}
var shouldRunNow = true;
if (Module["noInitialRun"]) shouldRunNow = false;
run();