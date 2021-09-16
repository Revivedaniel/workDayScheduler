// let parts = [];
// let count = parts.length
// const dataArray = [];
// while(count > 0) {
// 	//define parts
// 	const partsToLookUp = [];
// 	for (let i = 0; i < 10; i++) {
// 		partsToLookUp.push(parts.pop())
// 		count--
// 	}
	

// 	//For loop for each part
// 	for (let i = 0; i < partsToLookUp.length; i++) {
// 		let partNumber = partsToLookUp[i]
// 		let partData = {
// 			partNumber: partNumber
// 		};
// 		const iFrameNumber = i;
// 		//create IFrame
// 		const ifrm = document.createElement("iframe");
// 		ifrm.setAttribute("src", "http://west-web02/aerprod/Items.aspx?modaction=inventoryonhandPitchItemAlias");
// 		ifrm.setAttribute("id", `myIFrame${iFrameNumber}`);
// 		ifrm.style.width = "640px";
// 		ifrm.style.height = "480px";
// 		document.body.appendChild(ifrm);
// 		setTimeout(() => {
// 			//selecting this frame and then the input in this frame and setting the value to the current part number
// 			document.querySelector(`#myIFrame${iFrameNumber}`).contentWindow.document.querySelector("#ctl00_ContentPlaceHolder1_ctl00_txtitemid").value = partNumber;
// 			//simulating click
// 			document.querySelector(`#myIFrame${iFrameNumber}`).contentWindow.document.querySelector("#ctl00_ContentPlaceHolder1_ctl00_btnfilter").click();
// 			setTimeout(() => {
// 				const tds = document.querySelector(`#myIFrame${iFrameNumber}`).contentWindow.document.querySelector("#ctl00_ContentPlaceHolder1_ctl00_LVRoot_ctrl0_GridItems").querySelectorAll("td");
// 				for (let i = 0; i < tds.length; i++) {
// 					const element = tds[i];
// 					if(element.children[0] && element.children[0].getAttribute("id")){
// 						if(element.children[0].getAttribute("id").endsWith("ONHANDMRPTotalLabel")) {
// 							partData.primary = element.innerText;
// 						} else if (element.children[0].getAttribute("id").endsWith("OrderedTotalLabel")) {
// 							partData.po = element.innerText
// 						} else if (partData.primary && partData.po) {
// 							break;
// 						}
// 					}
// 				}
// 				dataArray.push(partData)
// 			}, 23000)
// 		}, 15000);	
// 	};

// 	setTimeout(() => {
// 		console.log(dataArray)
// 		//working here deleting the iframes
// 		setTimeout(() => {
// 			const iframes = document.querySelectorAll("iframe")
// 			for (let i = 0; i < iframes.length; i++) {
// 				iframes[i].remove()
// 			}
// 		}, 55000)
// 	}, 50000)
// }

let parts = [13590747, 42554649, 23109855, "84416473S", 84404219, 22838407, 84062099, 13458537, 22868683, 23475277, 42716478, 23266008, 84423260, 84096713, 84858589, 20906715, 84550101, 15182152, 42532873, 84505064];
let count = Math.floor(parts.length/10)
const dataArray = [];
let init = new Promise ((resolve, reject) => {
    console.log(count)
    //define parts
	const partsToLookUp = [];
	for (let i = 0; i < 10; i++) {
		partsToLookUp.push(parts.pop())
		count--
	}
	// setTimeout(() => resolve(), 40000)

	//For loop for each part
	for (let i = 0; i < partsToLookUp.length; i++) {
		let partNumber = partsToLookUp[i]
		let partData = {
			partNumber: partNumber
		};
		const iFrameNumber = i;
		//create IFrame
		const ifrm = document.createElement("iframe");
		ifrm.setAttribute("src", "http://west-web02/aerprod/Items.aspx?modaction=inventoryonhandPitchItemAlias");
		ifrm.setAttribute("id", `myIFrame${iFrameNumber}`);
		ifrm.style.width = "640px";
		ifrm.style.height = "480px";
		document.body.appendChild(ifrm);
		setTimeout(() => {
			//selecting this frame and then the input in this frame and setting the value to the current part number
			document.querySelector(`#myIFrame${iFrameNumber}`).contentWindow.document.querySelector("#ctl00_ContentPlaceHolder1_ctl00_txtitemid").value = partNumber;
			//simulating click
			document.querySelector(`#myIFrame${iFrameNumber}`).contentWindow.document.querySelector("#ctl00_ContentPlaceHolder1_ctl00_btnfilter").click();
			setTimeout(() => {
                console.log("For loops started")
				const tds = document.querySelector(`#myIFrame${iFrameNumber}`).contentWindow.document.querySelector("#ctl00_ContentPlaceHolder1_ctl00_LVRoot_ctrl0_GridItems").querySelectorAll("td");
				for (let i = 0; i < tds.length; i++) {
					const element = tds[i];
					if(element.children[0] && element.children[0].getAttribute("id")){
						if(element.children[0].getAttribute("id").endsWith("ONHANDMRPTotalLabel")) {
							partData.primary = element.innerText;
						} else if (element.children[0].getAttribute("id").endsWith("OrderedTotalLabel")) {
							partData.po = element.innerText
						} else if (partData.primary && partData.po) {
							break;
						}
					}
				}
				dataArray.push(partData)
				resolve();
			}, 23000)
		}, 15000);	
	};

    
})

async function run () {
    for (let i = 0; i < count; i++) {
        await init.then(() => {
        console.log(count)
        console.log(dataArray)
        //working here deleting the iframes
        const iframes = document.querySelectorAll("iframe")
            for (let i = 0; i < iframes.length; i++) {
                iframes[i].remove()
            }
        })        
    }
}

run();
