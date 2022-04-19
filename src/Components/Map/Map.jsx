import React from 'react';

function Map() {
	return (
		<div className='map-iframe'>
			<iframe
            title='map iframe'
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1259.7701579759873!2d69.24579889255178!3d41.32506218927154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bfaedfe3e1d%3A0x23ac4a5a705b84ab!2sNajot%20Ta&#39;lim!5e0!3m2!1suz!2s!4v1644059216497!5m2!1suz!2s"
				width="250"
				height="250"
				style={{border: 0}}
				allowFullScreen = ""
				loading="lazy"
			></iframe>
		</div>
	);
}

export default Map;
