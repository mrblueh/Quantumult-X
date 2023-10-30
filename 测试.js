var body = $response.body;
body = body.replace(/"begin_time":\d+,/g, '"begin_time":0,');
$done({body});
