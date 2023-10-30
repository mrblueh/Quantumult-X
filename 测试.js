var body = $response.body;
body = body.replace(/"duration":3,"begin_time":1698422400,"end_time":1698508799/g, '"duration":0,"begin_time":0,"end_time":0,');
$done({body});

