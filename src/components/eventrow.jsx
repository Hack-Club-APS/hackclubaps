import { ArrowRight } from 'lucide-react';
import React from 'react';

const EventRow = ({ date, title, type, desc }) => (
  <div className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm p-6 rounded-xl border border-white/10 transition-all cursor-pointer flex flex-col sm:flex-row gap-4 sm:items-center">
    <div className="min-w-[80px] text-center bg-white/10 rounded-lg p-2 group-hover:bg-white group-hover:text-[#ec3750] transition-colors">
      <span className="block text-sm font-bold uppercase tracking-wider opacity-80">Date</span>
      <span className="block text-xl font-bold">{date}</span>
    </div>
    <div className="flex-1">
      <div className="flex items-center gap-3 mb-1">
        <h4 className="text-xl font-bold text-white">{title}</h4>
        <span className="px-2 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide bg-black/20 text-red-200 border border-red-400/30">
          {type}
        </span>
      </div>
      <p className="text-red-100">{desc}</p>
    </div>
    <div className="opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all">
       <ArrowRight />
    </div>
  </div>
);

export default EventRow;
