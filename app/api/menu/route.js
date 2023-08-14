import { NextResponse } from 'next/server';
import { menuData } from '../data';

const menu = menuData;

export async function GET(request) {
	try {
		return NextResponse.json({ menu });
	} catch (error) {
		return NextResponse.json({ message: 'POST ERROR', error }, { status: 500 });
	}
}
