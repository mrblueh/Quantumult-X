var body = $response.body;
body = body.replace(begin_time":.+,, begin_time":0,);
$done({body});
