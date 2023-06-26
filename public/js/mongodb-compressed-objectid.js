const zzNumbers='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-~'
			const basamak0=1
			const basamak1=64
			const basamak2=64*64
			const basamak3=64*64*64
		
			function newId(){
				let s=$('#txtMongoId').val()
				if(s.length !=24) return

				let mongoId=[
					`0x${s.substring(0,6)}`,
					`0x${s.substring(6,12)}`,
					`0x${s.substring(12,18)}`,
					`0x${s.substring(18,24)}`,
				]
				let zzgoId=[]
				console.log(mongoId)

				mongoId.forEach(e=>{
					let a=Number(e)
					let zz3=0, zz2=0, zz1=0, zz0=0
					zz3=Math.floor(a/basamak3)
					a=a-zz3*basamak3

					zz2=Math.floor(a/basamak2)
					a=a-zz2*basamak2

					zz1=Math.floor(a/basamak1)

					a=a-zz1*basamak1

					zz0=Math.floor(a/basamak0)

					zzgoId.push(`${zzNumbers[zz3]}${zzNumbers[zz2]}${zzNumbers[zz1]}${zzNumbers[zz0]}`)
				})
				console.log(`zzgoId:`,zzgoId)
				
			}