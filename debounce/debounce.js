var lastRun;
	
module.exports = function(methodToRun, timeout)
{
	try
	{
		
		if (lastRun == null)
		{
			lastRun = Date.now();

			console.log('No previous runs.');
		} 
		else
		{
			var msSinceLastRun = Date.now() - lastRun;
			console.log('last ran ' + (msSinceLastRun) + 'ms ago at ' + new Date(lastRun) + '.');
			if (msSinceLastRun < timeout)
			{
				return null;
			}
			
			lastRun = Date.now();
		}

		setTimeout(methodToRun, timeout);
	}
	catch(err)
	{
		console.log('error: ' + err);
	}
	return null;
}
