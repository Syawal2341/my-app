import Card from '../../../../components/card';

export default function AdminMessage() {
    return (
      <>
        <Card title="List of Message" style="mt-5">
            <table className="w-full table-auto">
                <thead>
                    <tr>
                        <th className='p-2 border-b border-blue-gray-100 bg-gray-100'>#No</th>
                        <th className='p-2 border-b border-blue-gray-100 bg-gray-100'>Name</th>
                        <th className='p-2 border-b border-blue-gray-100 bg-gray-100'>Email</th>
                        <th className='p-2 border-b border-blue-gray-100 bg-gray-100'>Subject</th>
                        <th className='p-2 border-b border-blue-gray-100 bg-gray-100'>Message</th>
                        <th className='p-2 border-b border-blue-gray-100 bg-gray-100'>Action</th>
                    </tr>
                </thead>
                <tbody>
               
                    
                </tbody>
            </table>
        </Card>
      </>
    );
}
  