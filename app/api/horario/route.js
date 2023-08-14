import { NextResponse } from 'next/server';
import { horarioData } from '../data';

const horario = horarioData;

export async function GET(request) {
	try {
		return NextResponse.json(horario);
	} catch (error) {
		return NextResponse.json({ message: 'POST ERROR', error }, { status: 500 });
	}
}
