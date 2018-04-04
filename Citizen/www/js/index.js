/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

 
var get_data;
 
console.log("testing get post");
var rootURL = 'http://veritus.mypressonline.com/wp-json/wp/v2';



	
function showdata(){
    document.getElementById('post-form').style.display="none";
    document.getElementById('showform').style.display="block";
         
    var rootURL = 'http://veritus.mypressonline.com/wp-json/wp/v2'
    $.ajax({
      url: rootURL + '/posts',
      type: "GET",
      cache:false,
      dataType: 'JSON',
      success: function(data){
        console.log('My data');
        console.log(data);
          var posts = data.posts;
          var alpha = "";
          for (var i = 0; i < data.length; i++) {
            var title = data[i].title.rendered;
            var content = data[i].content.rendered;			    
     
      alpha+=  '<h1>'+title+'</h1><br/><p>'+ content + '</p><br/><br />' ;             
          }
    document.getElementById('call_data').innerHTML = alpha
         
         },
         error: function( data ){
             console.log('error');
             console.log(data);
            }, 
     });
 }

 

 /* POST Function (creating a post)
==============================*/

function postData() {
    document.getElementById('post-form').style.display="none";
    document.getElementById('showform').style.display="block";

var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}
var postForm = $( '#post-form' );

var jsonData = function( form ) {
   var arrData = form.serializeArray(),
       objData = {};
    
   $.each( arrData, function( index, elem ) {
       objData[elem.name] = elem.value;
   });
    
   return JSON.stringify( objData );
};


        console.log( "am heer");
          $.ajax({
              url: 'http://veritus.mypressonline.com/wp-json/wp/v2/posts',
              method: 'POST',
              data: jsonData( postForm ),
              crossDomain: true,
              contentType: 'application/json',
              beforeSend: function ( xhr ) {
                  xhr.setRequestHeader( 'Authorization', 'Basic ' + Base64.encode( 'tiksy2009:trideks0331' ) );
              },
              success: function( data ) {
                  console.log( data );
                  showdata();
                  document.getElementById("notification").innerHTML = "Your Report has been delivered Succesfully";                                  
              },
              error: function( error ) {
                  console.log( error );
                  document.getElementById('notification').innerHTML = "Not Successful, Check your internet settings and try again";              
              }
          });
          
         

}

function showAdd(showhide){
    if(showhide == "show"){
        document.getElementById('post-form').style.display="block";
        document.getElementById('showform').style.display="none";
        document.getElementById('call_data').style.background="rgba(255,255,255,0.3)";
    }else if(showhide == "hide"){
        document.getElementById('post-form').style.visibility="hidden";
          document.getElementById('call_data').style.background="0";
    }
    }









 