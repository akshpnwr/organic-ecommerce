import { Avatar, AvatarImage, AvatarFallback } from "@/components/UI/avatar";
import { Card, CardHeader, CardContent } from "@/components/UI/card";
import { Badge } from "@/components/UI/badge";
import useAuthUser from "@/zustand/useAuthUser";
import useGetOrders from "@/hooks/useGetOrders";
import { Separator } from "@/components/UI/separator";

const Account = () => {
  const { user } = useAuthUser();
  const { orders } = useGetOrders();

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center mb-8">
        <Avatar className="w-16 h-16 mr-4">
          <AvatarImage src={user?.profilePicture} alt="User Avatar" />
          <AvatarFallback>
            {`${user?.firstName[0]}${user?.lastName[0]}`.toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl font-bold text-green-7    00">
            {user?.firstName.toUpperCase()} {user?.lastName.toUpperCase()}
          </h1>
          <p className="text-muted-foreground">{user?.username}</p>
        </div>
      </div>
      <h2 className="text-2xl font-semibold">Your Orders</h2>
      <Separator className="bg-green-600 my-4" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders?.map((order) => (
          <Card
            key={order._id}
            className="border-gray-300 hover:border-2 hover:border-green-600"
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="text-lg text-green-600 font-bold">
                  {order._id.slice(order._id.length - 6)}
                </div>
                <Badge
                  variant="default"
                  className="bg-green-600 text-white hover:bg-green-600"
                >
                  Pending
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-muted-foreground">
                    Order Date
                  </div>
                  <div>{new Date(order.createdAt).toDateString()}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">
                    Total Amount
                  </div>
                  <div className="font-bold">${order.total.toFixed(2)}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Account;
