import { arrTime } from '@/common/constan';
import { DatePicker } from '@/components/custom/CustomDatePicker';
import { Button } from '@/components/ui/button';
import moment from 'moment';
import React from 'react';
import { b } from 'vitest/dist/suite-ghspeorC.js';

export type SpEzyProps = {
	soXe: string;
	ngayBatDau: string;
	soVanBan: string;
	ngayHopDong: string;
	diemDau: string;
	diemCuoi: string;
	soKhach: string;
	cuLy: string;
};
export type fromDataProps = {
	sttTu: string;
	sttDen: string;
	datePicker: string;
};
const SpEzy = () => {
	const [pickDate, setPickDate] = React.useState<Date | undefined>(
		moment().toDate(),
	);
	const [formData, setFormData] = React.useState<fromDataProps>({
		sttTu: '1',
		sttDen: '51B50303',
		datePicker: moment(pickDate).format('DD/MM/YYYY').toString(),
	});
	React.useEffect(() => {
		setFormData({
			...formData,
			datePicker: moment(pickDate).format('DD/MM/YYYY').toString(),
		});
	}, [pickDate]);

	return (
		<div className="w-full h-screen p-10">
			<label htmlFor="sttTu">Số thứ tự từ</label>
			<input
				type="number"
				id="sttTu"
				name="sttTu"
				min={0}
				defaultValue={'1'}
				className="border border-green-500 rounded-lg mx-2"
				onChange={(e) =>
					setFormData({
						...formData,
						[e.target.name]: e.target.value,
					})
				}
			/>
			<label htmlFor="sttDen">số xe</label>
			<input
				type="text"
				id="sttDen"
				name="sttDen"
				defaultValue={'51B50303'}
				className="border border-green-500 rounded-lg mx-2"
				onChange={(e) =>
					setFormData({
						...formData,
						[e.target.name]: e.target.value,
					})
				}
			/>
			<div className="my-4">
				<DatePicker pickDate={setPickDate}></DatePicker>
			</div>

			<div id="table1">
				{arrTime.map((item, index) => {
					return (
						<div className="border rounded-lg p-2 my-2">
							<p>
								số văn bản{' '}
								<b>{parseInt(formData.sttTu) + index}</b> | số
								xe : <b>{formData.sttDen}</b>
							</p>
							<p>
								HĐ:{' '}
								<b>
									{parseInt(formData.sttTu) + index}/HĐVC
									{formData.datePicker.split('/')}
								</b>{' '}
								| ngày <b>{formData.datePicker}</b>
							</p>
							<p>
								<b>{item}</b> - <b>{arrTime[index + 1]}</b> đi
								từ
								{index % 2 === 0 ? (
									<b> KS HOLIDAY INN đến SAN BAY</b>
								) : (
									<b> SAN BAY đến KS HOLIDAY INN</b>
								)}
							</p>
							<p>số lượng khách: 1 | số cực ly : 8</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default SpEzy;
