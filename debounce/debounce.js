module.exports = function(methodToRun, timeout)
{
	try
	{
	    console.log('trying.')
		if (this.lastRun == null)
		{

			console.log('No previous runs.');
		} 
		else
		{
			var msSinceLastRun = Date.now() - this.lastRun;
			console.log('last ran ' + (msSinceLastRun) + 'ms ago at ' + new Date(this.lastRun) + '.');
			if (msSinceLastRun < timeout)
			{
				return null;
			}
		}

		setTimeout(methodToRun, timeout);
	}
	catch(err)
	{
		console.log('error: ' + err);
	}
	
	this.lastRun = Date.now();
	return null;
 } 