var xvideo = {};

(function(global) {
	
	var baseUrl = "http://www.xvideos.com/";
	
	var ImageIO = Java.type("javax.imageio.ImageIO");
	
	var fastCopy = function(src, dest) {
		var buffer = java.nio.ByteBuffer.allocateDirect(16 * 1024);
        
        while(src.read(buffer) != -1) {
            buffer.flip();
            dest.write(buffer);
            buffer.compact();
        }
        
        buffer.flip();
        
        while(buffer.hasRemaining()) {
            dest.write(buffer);
        }
	};
	
	var validator = function(value, require, def) {
		if(value === undefined || value === null || value === "") {
			return def;
		}
		if(require.indexOf(value) === -1) {
			return def;
		}
		return value;
	};
	
	var splitArray = function(baseArr, cnt) {
		var b      = baseArr.length
		newArr = [];
		for(var i = 0; i < Math.ceil(b / cnt); i++) {
			var j = i * cnt;
			var p = baseArr.slice(j, j + cnt);
			newArr.push(p);
		}
		
		return newArr;
	};
	
	var stream2text = function(stream) {
		var reader = null;
		
		try {
			reader = new java.io.BufferedReader(new java.io.InputStreamReader(stream, "UTF-8"));
			var buffer = new java.lang.StringBuilder();
			
			var line;
			while ((line = reader.readLine()) != null) {
				buffer.append(line + "\n");
			} 
		} finally {
			connector.close([{target : reader, method : "close"}]);
		}
		
		return buffer.toString() + "";
	};
	
	var connector = {
		close : function(closables) {
			for (var i = 0; i < closables.length; i++) {
				var close = closables[i];
				
				if(close.target !== null) {
					try {
						close.target[close.method]();
					} catch (e) {
						// nop;
					}	
				}
			}
		},
		
		connect : function(url, handler) {
			var stream = null;
			var connection = null;
			
			try {
				connection = new java.net.URL(url).openConnection();
				
				connection.setRequestMethod("GET");
				connection.setInstanceFollowRedirects(true);
				
				connection.setRequestProperty("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8");
				connection.setRequestProperty("Accept-Encoding", "gzip, deflate, sdch");
				connection.setRequestProperty("Accept-Language", "ja,en-US;q=0.8,en;q=0.6");
				connection.setRequestProperty("Cache-Control", "max-age=0");
				connection.setRequestProperty("Connection", "keep-alive");
				connection.setRequestProperty("Host", "www.xvideos.com");
				connection.setRequestProperty("User-Agent", "Mozilla/5.0 (iPad; CPU OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53");
				
				connection.connect();
				
				var responseCode = connection.getResponseCode();
				if(responseCode / 100 == 4 || responseCode / 100 == 5){
					stream = connection.getErrorStream();
				}else{
					stream = new java.util.zip.GZIPInputStream(connection.getInputStream());
				}
				
				return handler(url, responseCode, stream);
			} finally {
				this.close([
				    {target : connection, method : "disconnect"},
				    {target : stream, method : "close"}
				]);
			}
		},
		
		parseDetail : function(url, status, stream) {
			var html = stream2text(stream);
			var ret = {
					categories : [],
					videos : [],
					thumbnails : []
			};
		
			var matches = html.match(/mobileReplacePlayerDivTwoQual\((.*)\);/)
			if(matches === null) {
				return null;
			}
			
			var args = matches[1].split(",");
			for (var i = 0; i < args.length; i++) {
				var val = args[i].trim();
				val = val.substr(1, val.length-2);
				
				if(val.indexOf("/mp4/") !== -1) {
					ret.videos.push({
						type : "mp4",
						href : val
					});
				} else if(val.indexOf("/3gp/") !== -1) {
					ret.videos.push({
						type : "3gp",
						href : val
					});
				} else if(val.indexOf("/thumbslll/") !== -1) {
					var baseThumbUrl = val.slice(0, -5);
					for (var j = 1; j <= 30; j++) {
						ret.thumbnails.push(baseThumbUrl + j + ".jpg");
					}
				}
			}
			
			matches = html.match(/<ul id="video-tags">(.|\s)*?<\/ul>/g);
			if(matches === null) {
				return null;
			}
			
			var values = matches[0].replace(/(<li><a href=".*">)(.*)(<\/a>)/g, function(a1, a2, a3) {
				ret.categories.push(a3);
			});
			
			return ret;
		},
		
		parseTaglist : function(url, status, stream) {
			var html = stream2text(stream);
			var matches = html.match(/<li[\s]+class="tag_col_0"[\s]?>(.|\s)*?<\/li>/g);
			
			if(matches === null) {
				return null;
			}
			
			var ret = [];
			
			for (var i = 0; i < matches.length; i++) {
				var tagdata = matches[i];
				var values = tagdata.match(/<a href="(.*)"><b>(.*)<\/b><\/a>(.*)<\/li>/);
				ret.push({
					href : baseUrl + values[1].substr(1),
					name : values[2],
					count: values[3].trim()
				});
			}
			
			return ret;
		},
		
		parsePage : function(url, status, stream) {
			var result = {};
			
			var html = stream2text(stream);
			
			result.entries = [];
			
			var matches = html.match(/<div[\s]+class="thumbInside"[\s]?>(.|\s)*?<\/div>(.|\s)*?<\/div>/g);
			if(matches === null) {
				return null;
			}
			
			for (var i = 0; i < matches.length; i++) {
				var element = matches[i];
				
				var item = {};
				
				item.duration = element.match(/<span class="duration">\((.*)\)<\/span>/)[1].trim();
				item.quality = element.match(/(Porn quality:[\s]?)(.*)/)[2].trim();
				item.title = element.match(/title="(.*)"/)[1].trim();
				item.url = element.match(/<p>[\s]?<a href="(.*)"[\s]?title=/)[1].trim();
				
				var thumnail = element.match(/src="(.*)\.[\d]+\.jpg"/)[1].trim();
				item.thumnails = []
				for (var index = 1; index <= 30; index++) {
					item.thumnails.push(thumnail + "." + index + ".jpg");
				}
				
				result.entries.push(item);
			}
			
			var next = html.match(/<a class="nP" href="\/(.*)">/);
			var prev = html.match(/<a href="\/(.*)" class="nP">/);
			
			if(next !== null) {
				result.next = baseUrl + next[1];
			}
			
			if(prev !== null) {
				result.prev = baseUrl + prev[1];
			}
			
			result.url = url;
			return result;
		}
	};
	
	global.download = function(out, url) {
		var src = null;
		try {
			src = new java.net.URL(url).openStream();
			var inputChannel = java.nio.channels.Channels.newChannel(src);
	        var outputChannel = java.nio.channels.Channels.newChannel(out);
	        fastCopy(inputChannel, outputChannel);
		} finally {
			connector.close([
			    {target : src, method : "close"},
			    {target : src, method : "close"},
			]);
		}
		
	};
	
	global.detail = function(url) {
		return connector.connect(url, connector.parseDetail);
	};
	
	global.findTags = function() {
		var requestUrl = baseUrl + "tags/";
		var result = connector.connect(requestUrl, connector.parseTaglist);
		return result;
		
	};
	
	global.searchTag = function(tag, option) {
		var requestUrl = baseUrl + "tags/" + tag;
		
		if(option === undefined || option === null) {
			option = {};
		}
		option.sort = validator(option.sort, ["relevance", "uploaddate", "rating"], "relevance");
		option.date = validator(option.date, ["all", "today", "week", "month"], "all");
		option.duration = validator(option.duration, ["allduration", "1-3min", "3-10min", "10min_more"], "allduration");
		
		requestUrl += "/s:"+option.sort+"/m:"+option.duration+"/d:"+option.duration;
		var result = connector.connect(requestUrl, connector.parsePage);
		return result;
	};
	
	global.searchKeyword = function(keyword, option) {
		var requestUrl = baseUrl;
		
		if(keyword !== undefined && keyword !== null) {
			requestUrl += "?k="+keyword;
		}
		
		if(option === undefined || option === null) {
			option = {};
		}
		option.sort = validator(option.sort, ["relevance", "uploaddate", "rating"], "relevance");
		option.date = validator(option.date, ["all", "today", "week", "month"], "all");
		option.duration = validator(option.duration, ["allduration", "1-3min", "3-10min", "10min_more"], "allduration");
		
		requestUrl += "&sort="+option.sort+"&durf="+option.duration+"&datef="+option.date;
		
		var result = connector.connect(requestUrl, connector.parsePage);
		return result;
	};
	
	global.searchNew = function(start) {
		var requestUrl = baseUrl;		
		try {
			if(typeof start === "number") {
				var index = parseInt(start);
				requestUrl += "new/"+start+"/";
			}
		} catch (e) {
		}
		
		var result = connector.connect(requestUrl, connector.parsePage);
		return result;
	};
	
	global.PageIterator = function(word, type, option) {
		if(type === "keyword") {
			this.result = global.searchKeyword(word, option);
		} else if(type === "tag") {
			this.result = global.searchTag(word, option);
		} else if(type === undefined && option === undefined) {
			this.result = global.searchNew(word);
		} else {
			this.result = null;
		}
	};
	
	global.combineThumbnails  = function(thumbnails, count, output, type) {
		var image = null;
		
		var array = splitArray(thumbnails, count);
		for (var i = 0; i < array.length; i++) {
			var line = array[i];
			for (var j = 0; j < line.length; j++) {
				var thumb = line[j];
				
				if(type === "small") {
					thumb = thumb.replace("/thumbslll/", "/thumbs/");
				} else if(type === "big") {
					thumb = thumb.replace("/thumbs/", "/thumbslll/");
				}
				
				var parts = ImageIO.read(new java.net.URL(thumb).openStream());
				
				if(image === null) {
					image = new java.awt.image.BufferedImage(
						parts.getWidth() * count,
						parts.getHeight() * array.length,
						java.awt.image.BufferedImage.TYPE_INT_ARGB
					);
				}
				
				var graphics = image.getGraphics();
				var x = j * parts.getWidth();
				var y = i * parts.getHeight();
				graphics.drawImage(parts, x, y, null);
			}
		}
		
		ImageIO.write(image, "png", output);
		
		try {output.close();} catch (e) {}
		try {image.close();} catch (e) {}
	};
	
	global.PageIterator.prototype.hasNext = function() {
		return this.result !== null && this.result.next !== undefined;
	};
	
	global.PageIterator.prototype.next = function() {
		if(this.result === null) {
			return null;
		}
		var data = this.result;
		
		var next = this.result.next;
		if(next === undefined) {
			this.result = null;
		} else {
			this.result = connector.connect(next, connector.parsePage);
		}
		
		return data;
	},
	
	global.File = function(path) {
		this.path = path;
	};
	
	global.File.prototype.outputstream = function() {
		return new java.io.FileOutputStream(this.path);
	};
	
	
})(xvideo);