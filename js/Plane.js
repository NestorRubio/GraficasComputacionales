 THREE.PlaneGeometry = function ( width, height, widthSegments, heightSegments ) {

	console.info( 'THREE.PlaneGeometry: Consider using THREE.PlaneBufferGeometry for lower memory footprint.' );

	THREE.Geometry.call( this );

	this.type = 'PlaneGeometry';

	this.parameters = {
		width: width,
		height: height,
		widthSegments: widthSegments,
		heightSegments: heightSegments
	};

	this.fromBufferGeometry( new THREE.PlaneBufferGeometry( width, height, widthSegments, heightSegments ) );

};

THREE.PlaneGeometry.prototype = Object.create( THREE.Geometry.prototype );
THREE.PlaneGeometry.prototype.constructor = THREE.PlaneGeometry;
