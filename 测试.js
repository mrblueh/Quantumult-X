var body = $response.body;
body = body.replace(/"duration":\d,"begin_time":\d+,"end_time":\d+,/g, '"duration":0,"begin_time":0,"end_time":0,');
$done({body});

